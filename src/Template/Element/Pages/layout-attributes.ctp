<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var array $attributes
 * @var \Wasabi\Cms\Model\Entity\Page $page
 */
use Wasabi\Cms\View\Layout\AttributeType;

?>
<table class="list layout-attributes">
	<thead>
	<tr>
		<th class="t4"><?php echo __d('wasabi_cms', 'Attribute') ?></th>
		<th class="t12"><?php echo __d('wasabi_cms', 'Content') ?></th>
	</tr>
	</thead>
	<tbody>
	<?php $key = 0;foreach ($attributes as $attrId => $attr) {
        $field = 'attributes.' . $key . '.content'; ?>
        <tr>
            <td><?php
                echo $this->Form->label($field, $attr['name']);
                echo $this->Form->control('attributes.' . $key . '.id', array('type' => 'hidden'));
                echo $this->Form->control('attributes.' . $key . '.model', array('type' => 'hidden', 'value' => 'Wasabi/Cms.Pages'));
                echo $this->Form->control('attributes.' . $key . '.foreign_key', array('type' => 'hidden', 'value' => $page->id));
                echo $this->Form->control('attributes.' . $key . '.name', array('type' => 'hidden', 'value' => $attrId));
            ?></td>
            <td><?php

                switch ($attr['type']) {
                    case AttributeType::TYPE_TEXT:
                        echo $this->Form->control($field, ['label' => false, 'type' => 'text', 'templates' => 'Wasabi/Cms.form_templates_attributes']);
                        break;
                    case AttributeType::TYPE_TEXTAREA:
                        echo $this->Form->control($field, ['label' => false, 'type' => 'textarea', 'templates' => 'Wasabi/Cms.form_templates_attributes']);
                        break;
                    case AttributeType::TYPE_SELECT:
                        echo $this->Form->control($field, ['label' => false, 'options' => $attr['options'], 'templates' => 'Wasabi/Cms.form_templates_attributes']);
                        break;
                }


//                switch ($attr['type']) {
//						case 'page_id':
//							$pages = $OOPage->generatetreelist(null, null, null, '___');
//							echo $this->Form->control('PagesAttribute.'. $i .'.content', array('label' => $a['Attribute']['name'].':', 'type' => 'select', 'options' => $pages, 'value' => $value));
//							break;
//
//                    case 'select':
//                        if (isset($attr['options']) && !empty($attr['options'])) {
//                            $empty = (isset($attr['empty'])) ? $attr['empty'] : false;
//                            $default = (isset($attr['default']) && $attr['default'] !== '' && !isset($this->request->data['CmsPageLayoutAttribute'][$key]['content'])) ? $attr['default'] : false;
//                            $options = array(
//                                'label' => false,
//                                'type' => 'select',
//                                'options' => $attr['options'],
//                                'empty' => $empty
//                            );
//                            if ($default !== false) {
//                                $options['value'] = $default;
//                            }
//                            echo $this->Form->control('CmsPageLayoutAttribute.'. $key .'.content', $options);
//                        }
//                        break;

//                    case 'radio':
//                        $params = explode('|', $attr['params']);
//                        $options = array();
//                        foreach ($params as $p) {
//                            $parts = explode(':', $p);
//                            $options[$parts[0]] = $parts[1];
//                        }
//                        echo $this->Form->control('CmsPageLayoutAttribute.'. $key .'.content', array('legend' => false, 'type' => 'radio', 'options' => $options));
//                        break;

//                    case 'date':
//                        echo $this->Form->control('CmsPageLayoutAttribute.'. $key .'.content', array('type' => 'hidden', 'class' => 'datepicker'));
//                        break;

//                    case 'datetime':
//                        echo $this->Form->control('CmsPageLayoutAttribute.'. $key .'.content', array('type' => 'hidden', 'class' => 'datetimepicker'));
//                        break;

//                    case 'image':
//                        echo $this->Form->control('CmsPageLayoutAttribute.'. $key .'.content', array('type' => 'hidden'));
//                        break;

//                    default:
//                        $options = array(
//                            'label' => false,
//                            'type' => $attr['type']
//                        );
//                        if ($options['type'] === 'textarea') {
//                            $options['rows'] = 1;
//                        }
//                        echo $this->Form->control('CmsPageLayoutAttribute.'. $key .'.content', $options);
//                }
                ?></td>
        </tr>
    <?php
        $key++;
    }

    if (empty($attributes)) {
		echo '<tr><td colspan="2">'.__d('wasabi_cms', 'This Layout has no attributes.').'</td></tr>';
	}
	?>
	</tbody>
</table>
<small><?= __d('wasabi_cms', 'Layout attributes allow you to customize the layout for this page.') ?></small>
