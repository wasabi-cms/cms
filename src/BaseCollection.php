<?php

namespace Wasabi\Cms;

use Cake\Utility\Hash;
use Cake\Utility\Text;

abstract class BaseCollection
{
    protected $_items = [];

    /**
     * Register a new collection.
     *
     * @param string $id The collection identifier.
     * @param array $options The collection options.
     */
    public static function register($id, $options)
    {
        $id = (string)$id;
        if (self::exists($id)) {
            user_error(Text::insert('A collection with id ":id" is already registered.', ['id' => $id]));
            return;
        }
        $defaults = [
            'model' => 'Plugin.Model',
            'displayName' => 'Translated Name'
        ];
        $options = array_merge($defaults, $options);
        self::_instance()->_items[$id] = $options;
    }

    /**
     * Get all collections for a select.
     *
     * @return array
     */
    public static function getForSelect()
    {
        $instance = self::_instance();
        return array_combine(array_keys($instance->_items), Hash::extract($instance->_items, '{s}.displayName'));
    }

    /**
     * Get the display name for a specific item.
     *
     * @param string $id
     * @return bool
     */
    public static function getDisplayName($id)
    {
        $instance = self::_instance();

        if (!isset($instance->_items[$id])) {
            return false;
        }
        return $instance->_items[$id]['displayName'];
    }

    /**
     * Check if a collection is already registered.
     *
     * @param $id
     * @return bool
     */
    public static function exists($id)
    {
        return isset(self::_instance()->_items[$id]);
    }

    /**
     * Get the collections instance.
     *
     * @return \stdClass
     */
    protected static function _instance() {
        static $instance;
        if (!$instance) {
            $instance = new \stdClass();
        }
        return $instance;
    }
}
