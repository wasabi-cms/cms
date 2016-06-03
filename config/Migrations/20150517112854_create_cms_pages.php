<?php
use Cake\ORM\TableRegistry;
use Phinx\Db\Table\Column;
use Phinx\Migration\AbstractMigration;
use Wasabi\Cms\Model\Entity\Page;

class CreateCmsPages extends AbstractMigration
{
    /**
     * Migrate up
     */
    public function up()
    {
        $table = $this->table('cms_pages');
        $table->addColumn('parent_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => true, 'default' => null])
            ->addColumn('lft', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('rght', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('name', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('slug', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('layout', 'string', ['limit' => 255, 'null' => false, 'default' => 'Default'])
            ->addColumn('page_title', 'string', ['limit' => 255, 'null' => true, 'default' => null])
            ->addColumn('display_page_title_suffix', 'boolean', ['signed' => false, 'null' => false, 'default' => 0])
            ->addColumn('meta_description', 'string', ['limit' => 255, 'null' => true, 'default' => null])
            ->addColumn('status', 'integer', ['limit' => 11, 'signed' => false, 'null' => false, 'default' => 0])
            ->addColumn('created', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP'])
            ->addColumn('modified', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP']);
        $table->addIndex('name', ['name' => 'BY_NAME']);
        $table->create();

        $id = new Column();
        $id->setIdentity(true)
            ->setType('integer')
            ->setOptions(['limit' => 11, 'signed' => false, 'null' => false]);

        $table->changeColumn('id', $id)->save();

        $page = new Page([
            'name' => 'Home',
            'slug' => 'home'
        ]);
        $Pages = TableRegistry::get('Wasabi/Cms.Pages');
        $Pages->save($page);
    }

    /**
     * Migrate down
     */
    public function down()
    {
        $this->table('cms_pages')->drop();
    }
}
