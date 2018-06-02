<?php
use Phinx\Db\Table\Column;
use Phinx\Migration\AbstractMigration;

class CreateAttributes extends AbstractMigration
{
    /**
     * Migrate up
     */
    public function up()
    {
        $table = $this->table('cms_attributes');
        $table
            ->addColumn('model', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('foreign_key', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('language_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('name', 'string', ['limit' => 255, 'null' => false])
            ->addColumn('content', 'text', ['null' => true, 'default' => null])
            ->addColumn('created', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP'])
            ->addColumn('modified', 'datetime', ['null' => false, 'default' => 'CURRENT_TIMESTAMP']);
        $table
            ->addIndex('model', ['name' => 'BY_MODEL', 'unique' => false])
            ->addIndex('foreign_key', ['name' => 'BY_FOREIGN_KEY', 'unique' => false])
            ->addIndex('language_id', ['name' => 'FK_LANGUAGE_ID', 'unique' => false]);
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
        $this->table('cms_attributes')->drop();
    }
}
