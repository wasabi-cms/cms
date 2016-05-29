<?php

namespace Wasabi\Cms\View\Module\Text;

use Cake\Form\Schema;
use Cake\Utility\Hash;
use Cake\Validation\Validator;
use Wasabi\Cms\View\Module\Module;

class TextModule extends Module
{
    /**
     * Constructor
     *
     * @param array|null $data
     */
    public function __construct($data = null)
    {
        parent::__construct($data);

        $this->name(__d('module_text', 'Text'));
        $this->description(__d('module_text', 'Arbitrary text or Html.'));
        $this->group(__d('module_text', 'General'));
        $this->path(__FILE__);
    }

    /**
     * You can use this method to define the schema using
     * the methods on Cake\Form\Schema.
     *
     * @param \Cake\Form\Schema $schema The schema to customize.
     * @return \Cake\Form\Schema The schema to use.
     */
    protected function _buildSchema(Schema $schema)
    {
        return $schema->addField('content', 'string');
    }

    /**
     * You can use this method to define the validator using
     * the methods on Cake\Validation\Validator.
     *
     * @param \Cake\Validation\Validator $validator The validator to customize.
     * @return \Cake\Validation\Validator The validator to use.
     */
    protected function _buildValidator(Validator $validator)
    {
        return $validator->notEmpty('content', __d('wasabi_cms', 'Please enter some content.'));
    }

    /**
     * Called when the form data is valid.
     * Handle, transform and return the data in an array format so it can
     * be json encoded and sent back to the client.
     *
     * @param array $data
     * @return array
     */
    public function process(array $data)
    {
        $data = parent::process($data);

        $data['meta']['description'] = Hash::get($data, 'data.content');

        return $data;
    }

    /**
     * Get the context class.
     * 
     * @return mixed
     */
    public function getContext()
    {
        return Context::class;
    }
}
