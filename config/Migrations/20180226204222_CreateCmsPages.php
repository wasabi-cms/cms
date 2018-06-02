<?php
/**
 * Wasabi Cms
 * Copyright (c) Frank Förster (http://frankfoerster.com)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Frank Förster (http://frankfoerster.com)
 * @link          https://github.com/wasabi-cms/cms Wasabi Cms
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

use Wasabi\Core\Database\Migration\BaseMigration;

class CreateCmsPages extends BaseMigration
{
    /**
     * Migrate up
     */
    public function up()
    {
        $table = $this->table('wasabi_cms_pages', ['id' => false, 'primary_key' => ['id']]);
        $table->addColumn('id', 'uuid')
            ->addColumn('parent_id', 'integer', ['length' => 11, 'signed' => false, 'null' => false, 'default' => 0])
            ->addColumn('lft', 'integer', ['length' => 11, 'signed' => false, 'null' => false])
            ->addColumn('rght', 'integer', ['length' => 11, 'signed' => false, 'null' => false])
            ->addColumn('language_id', 'integer', ['length' => 11, 'signed' => false, 'null' => false])
            ->addColumn('page_type', 'string', ['length' => 255, 'null' => false, 'default' => null])
            ->addColumn('publication_date', 'datetime', ['null' => true])
            ->addColumn('created', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP'])
            ->addColumn('modified', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP']);
        $table->addIndex(['parent_id'], ['name' => 'FK_PARENT_ID', 'unique' => false])
            ->addIndex(['lft'], ['name' => 'BY_LFT', 'unique' => false])
            ->addIndex(['rght'], ['name' => 'BY_RGHT', 'unique' => false])
            ->addIndex(['language_id'], ['name' => 'FK_LANGUAGE_ID', 'unique' => false])
            ->addIndex(['page_type'], ['name' => 'BY_PAGE_TYPE', 'unique' => false])
            ->addIndex(['publication_date'], ['name' => 'BY_PUBLICATION_DATE', 'unique' => false]);
        $table->create();
    }

    /**
     * Migrate down
     */
    public function down()
    {
        $this->dropTable('wasabi_cms_pages');
    }
}
