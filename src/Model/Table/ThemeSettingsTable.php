<?php
/**
 * Wasabi CMS
 * Copyright (c) Frank Förster (http://frankfoerster.com)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Frank Förster (http://frankfoerster.com)
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace Wasabi\Cms\Model\Table;

use Cake\ORM\Entity;
use Cake\Validation\Validator;
use Wasabi\Core\Model\Table\SettingsTable;

/**
 * Class GeneralSettingsTable
 *
 * @method getKeyValues(Entity $entity, array $fields) KeyValueBehavior::getKeyValues(Entity $entity, array $fields)
 * @method saveKeyValues(Entity $entity, array $fields) KeyValueBehavrio::saveKeyValues(Entity $entity, array $fields)
 */
class ThemeSettingsTable extends SettingsTable
{
    /**
     * Initialize a table instance. Called after the constructor.
     *
     * @param array $config Configuration options passed to the constructor
     */
    public function initialize(array $config)
    {
        $this->table('settings');

        $this->addBehavior('Wasabi/Core.KeyValue', [
            'scope' => 'Cms'
        ]);

        parent::initialize($config);
    }

    /**
     * Default validation rules.
     *
     * @param Validator $validator
     * @return Validator
     */
    public function validationDefault(Validator $validator)
    {
        return $validator
            ->notEmpty(
                'Theme__id',
                __d('wasabi_cms', 'Please select a theme that is used for all pages of your CMS instance.')
            );
    }
}
