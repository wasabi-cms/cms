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

class CreateAlternatePages extends BaseMigration
{
    /**
     * Migrate up
     */
    public function up()
    {
        $table = $this->table('wasabi_cms_alternate_pages');
        $table->addColumn('root_page_id', 'uuid')
            ->addColumn('alternate_page_id', 'uuid');
        $table->addIndex(['root_page_id'], ['name' => 'FK_ROOT_PAGE_ID', 'unique' => false])
            ->addIndex(['alternate_page_id'], ['name' => 'FK_ALTERNATE_PAGE_ID', 'unique' => false]);
        $table->create();

        $this->unsignedIntId($table);
        $table->save();
    }

    /**
     * Migrate down
     */
    public function down()
    {
        $this->dropTable('wasabi_cms_alternate_pages');
    }
}
