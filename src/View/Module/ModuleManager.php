<?php

namespace Wasabi\Cms\View\Module;

use Cake\Filesystem\Folder;

class ModuleManager
{
    /**
     * Holds all paths where individual modules are located.
     *
     * @var array
     */
    protected static $_modulePaths = [];

    /**
     * Holds all registered modules.
     * key: namespace
     * value: initialized module
     *
     * @var Module[]
     */
    protected static $_modules = [];

    /**
     * Determines if the module manager initialized all registered modules.
     *
     * @var boolean
     */
    protected static $_initialized = false;

    /**
     * Register a module path.
     *
     * @param string $path
     */
    public static function registerModulePath($path)
    {
        if (file_exists($path)) {
            self::$_modulePaths[] = $path;
        } else {
            user_error(__d('wasabi_cms', 'Module path {0} does not exist.', $path));
        }
    }

    /**
     * Initialize all available modules.
     *
     * @return void
     */
    public static function init()
    {
        foreach (self::$_modulePaths as $path) {
            $folder = new Folder($path);
            $modulePaths = $folder->read(true, false, true)[0];

            foreach ($modulePaths as $modulePath) {
                self::_initializeModule($modulePath);
            }
        }

        self::$_initialized = true;
    }

    /**
     * Get all available Modules.
     *
     * @return Module[]
     */
    public static function getAvailableModules()
    {
        if (!self::$_initialized) {
            self::init();
        }

        $result = [];

        foreach (self::$_modules as $ns => $module) {
            $result[] = [
                'namespace' => $ns,
                'name' => $module->name(),
                'description' => $module->description(),
                'group' => $module->group(),
                'icon' => $module->icon()
            ];
        }

        return $result;
    }

    /**
     * Initialize a single module instance.
     *
     * @param string $modulePath
     */
    protected static function _initializeModule($modulePath)
    {
        $moduleFolder = new Folder($modulePath);
        $moduleName = basename($moduleFolder->path);

        $moduleClassFilename = $moduleName . 'Module.php';
        $moduleClassFile = $moduleFolder->find($moduleClassFilename);

        if (empty($moduleClassFile)) {
            user_error(__d('wasabi_cms', 'Module {0} has no associated class file {1} in {3}.', $moduleName, $moduleClassFilename, $modulePath));
        }

        $moduleClassFile = $moduleClassFile[0];
        $moduleNamespace = self::_extractNamespace($modulePath . DS . $moduleClassFile);

        if (!$moduleNamespace) {
            user_error(__d('wasabi_cms', 'Module {3} has no namespace.'));
        }

        $class = $moduleNamespace . '\\' . $moduleName . 'Module';
        self::$_modules[$class] = new $class();
    }

    /**
     * Extract the namespace of the given php file.
     *
     * @param string $file absolute file path
     * @return null|string
     */
    protected static function _extractNamespace($file)
    {
        $ns = null;
        $handle = fopen($file, "r");
        if ($handle) {
            while (($line = fgets($handle)) !== false) {
                if (strpos($line, 'namespace') === 0) {
                    $parts = explode(' ', $line);
                    $ns = rtrim(trim($parts[1]), ';');
                    break;
                }
            }
            fclose($handle);
        }
        return $ns;
    }
}
