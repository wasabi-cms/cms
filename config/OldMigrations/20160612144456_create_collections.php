<?php
use Migrations\AbstractMigration;
use Phinx\Db\Table\Column;

class CreateCollections extends AbstractMigration
{
    /**
     * Migrate up
     */
    public function up()
    {
        $table = $this->table('cms_collections');

        $table->addColumn('page_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('type', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('identifier', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('model', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('created', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP'])
            ->addColumn('modified', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP']);
        $table
            ->addIndex('page_id', ['name' => 'FK_PAGE_ID'])
            ->addIndex('type', ['name' => 'BY_TYPE'])
            ->addIndex('identifier', ['name' => 'BY_IDENTIFIER']);
        $table->create();

        $id = new Column();
        $id->setIdentity(true)
            ->setType('integer')
            ->setOptions(['limit' => 11, 'signed' => false, 'null' => false]);

        $table->changeColumn('id', $id)->save();
    }

    /**
     * Migrate down
     */
    public function down()
    {
        $this->dropTable('cms_collections');
    }
}
