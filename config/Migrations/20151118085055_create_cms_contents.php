<?php
use Migrations\AbstractMigration;
use Phinx\Db\Table\Column;

class CreateCmsContents extends AbstractMigration
{
    /**
     * Migrate up.
     */
    public function up()
    {
        $table = $this->table('cms_contents');
        $table->addColumn('page_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('language_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('content', 'text', ['limit' => 255])
            ->addColumn('created_by_user_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('modified_by_user_id', 'integer', ['limit' => 11, 'signed' => false, 'null' => false])
            ->addColumn('created', 'datetime', ['null' => false, 'default' => '0000-00-00 00:00'])
            ->addColumn('modified', 'datetime', ['null' => false, 'default' => '0000-00-00 00:00']);
        $table->addIndex('page_id', ['name' => 'BY_PAGE_ID'])
            ->addIndex('language_id', ['name' => 'BY_LANGUAGE_ID'])
            ->addIndex(['page_id', 'language_id'], ['name' => ['BY_PAGE_ID_AND_LANGUAGE_ID']])
            ->addIndex('created_by_user_id', ['name' => 'BY_CREATED_BY_USER_ID'])
            ->addIndex('modified_by_user_id', ['name' => 'BY_MODIFIED_BY_USER_ID']);
        $table->create();

        $id = new Column();
        $id->setIdentity(true)
            ->setType('integer')
            ->setOptions(['limit' => 11, 'signed' => false, 'null' => false]);

        $table->changeColumn('id', $id)->save();
    }

    /**
     * Migrate down.
     */
    public function down()
    {
        $this->dropTable('cms_contents');
    }
}
