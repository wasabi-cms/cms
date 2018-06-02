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

class CreatePageRevisions extends BaseMigration
{
    /**
     * Migrate up
     */
    public function up()
    {
        $table = $this->table('wasabi_cms_page_revisions', ['id' => false, 'primary_key' => ['id']]);
        $table->addColumn('id', 'uuid')
            ->addColumn('page_id', 'uuid')
            ->addColumn('title', 'string', ['length' => 255, 'null' => false])
            ->addColumn('navigation_name', 'string', ['length' => 255, 'null' => false])
            ->addColumn('slug', 'string', ['length' => 255, 'null' => false])
            ->addColumn('excerpt', 'text', ['null' => false])
            ->addColumn('content', 'text', ['null' => false])
            ->addColumn('layout', 'string', ['length' => 255, 'null' => false])
            ->addColumn('page_title', 'string', ['length' => 255, 'null' => false])
            ->addColumn('display_page_title_suffix', 'boolean', ['null' => false])
            ->addColumn('meta_description', 'text', ['null' => true, 'default' => null])
            ->addColumn('meta_robots_index', 'boolean', ['null' => false, 'default' => null])
            ->addColumn('meta_robots_follow', 'boolean', ['null' => false, 'default' => null])
            ->addColumn('area_css_classes', 'string', ['length' => 255, 'null' => true, 'default' => null])
            ->addColumn('additional_css_classes', 'string', ['length' => 255, 'null' => true, 'default' => null])
            ->addColumn('data', 'text', ['null' => false])
            ->addColumn('image_id', 'uuid', ['null' => true, 'default' => null])
            ->addColumn('social_media_image_id', 'uuid', ['null' => true, 'default' => null])
            ->addColumn('status', 'string', ['length' => 255, 'null' => false])
            ->addColumn('created_by', 'integer', ['length' => 11, 'signed' => false, 'null' => false])
            ->addColumn('created', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP']);
        $table->addIndex(['page_id'], ['name' => 'FK_PAGE_ID', 'unique' => false])
            ->addIndex(['title'], ['name' => 'BY_TITLE', 'unique' => false])
            ->addIndex(['slug'], ['name' => 'BY_SLUG', 'unique' => false])
            ->addIndex(['layout'], ['name' => 'BY_LAYOUT', 'unique' => false])
            ->addIndex(['status'], ['name' => 'BY_STATUS', 'unique' => false])
            ->addIndex(['created_by'], ['name' => 'FK_CREATED_BY', 'unique' => false])
            ->addIndex(['created'], ['name' => 'BY_CREATED', 'unique' => false]);
        $table->create();
    }

    /**
     * Migrate down
     */
    public function down()
    {
        $this->dropTable('wasabi_cms_page_revisions');
    }
}
