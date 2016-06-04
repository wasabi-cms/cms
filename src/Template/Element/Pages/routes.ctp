<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var Route[] $routes
 * @var array $routeTypes
 * @var string $model
 * @var string $element
 */
use Cake\Routing\Router;
use Wasabi\Core\Model\Entity\Route;
use Wasabi\Core\Routing\RouteTypes;

$error = false;
if ($this->request->is('ajax')) {
	$error = ($this->request->session()->read('Message.flash.params.class') === 'error') && ($this->request->params['action'] !== 'delete');
	echo $this->Flash->render('routes');
}

$addRouteUrl = Router::url([
	'plugin' => 'Wasabi/Core',
	'controller' => 'Routes',
	'action' => 'add'
]);
?>
<table class="list routes valign-middle" data-add-route-url="<?= $addRouteUrl ?>" data-model="<?= $model ?>" data-element="<?= $element ?>">
	<thead>
	<tr>
		<th class="t-10-16"><?= __d('wasabi_cms', 'URL') ?></th>
		<th class="t-4-16 center"><?= __d('wasabi_cms', 'Type') ?></th>
		<th class="t-2-16 center"><?= __d('wasabi_cms', 'Actions') ?></th>
	</tr>
	</thead>
	<tbody>
    <?php foreach ($routes as $route): ?>
		<tr>
			<td><?= ($route->redirect_to === null) ? '<strong>' . $route->url . '</strong>' : $route->url ?></td>
			<td class="center"><?php
				if ($route->redirect_to === null) {
					echo '<strong>' . __d('wasabi_cms', 'Default Route') . '</strong>';
				} else {
					echo $this->Html->link(
                        __d('wasabi_cms', 'Redirect Route'),
                        [
                            'plugin' => 'Wasabi/Core',
                            'controller' => 'Routes',
                            'action' => 'makeDefault',
                            'id' => $route->id,
                            '?' => [
                                'element' => 'Wasabi/Cms.Pages/routes'
                            ]
                        ],
                        [
                            'title' => __d('wasabi_cms', 'Make this Route the Default Route.'),
                            'data-toggle' => 'confirm',
                            'data-modal-header' => __d('wasabi_cms', 'Make Default Route'),
                            'data-modal-body' => '<p>' . __d('wasabi_cms', 'Do you really want to make<br/><strong>{0}</strong><br/>the new default route for this page?', $route->url) . '</p>',
                            'data-modal-ajax' => 1,
                            'data-modal-method' => 'post',
                            'data-modal-notify' => '.field.routes',
                            'data-modal-event' => 'makeDefaultRoute'
					    ]
                    );
				}
				?></td>
			<td class="actions center">
				<?= $this->Html->link(
                    __d('wasabi_cms', 'delete'),
                    [
                        'plugin' => 'Wasabi/Core',
                        'controller' => 'Routes',
                        'action' => 'delete',
                        'id' => $route->id,
                        '?' => [
                            'element' => 'Wasabi/Cms.Pages/routes'
                        ]
                    ],
                    [
                        'class' => 'wicon-remove',
                        'title' => __d('wasabi_cms', 'Delete this Route'),
                        'data-toggle' => 'confirm',
                        'data-modal-header' => __d('wasabi_cms', 'Deletion Confirmation'),
                        'data-modal-body' => '<p>' . __d('wasabi_cms', 'Do you really want to delete Route <strong>{0}</strong>?', $route->url) . '</p>',
                        'data-modal-ajax' => 1,
                        'data-modal-method' => 'post',
                        'data-modal-notify' => '.field.routes',
                        'data-modal-event' => 'deleteRoute'
                    ]
				);
				?>
			</td>
		</tr>
	<?php endforeach; ?>
	<tr class="new-route<?= $error ? ' valign-top' : '' ?>">
		<td>
			<?= $this->Form->input('Routes.url', ['label' => false, 'type' => 'text', 'templates' => 'Wasabi/Cms.form_templates_routes']) ?>
		</td>
		<td class="center">
			<?= $this->Form->input('Routes.type', ['label' => false, 'options' => $routeTypes, 'default' => (count($routes) >= 1) ? RouteTypes::get(RouteTypes::TYPE_REDIRECT_ROUTE) : RouteTypes::get(RouteTypes::TYPE_DEFAULT_ROUTE), 'templates' => 'Wasabi/Cms.form_templates_routes']) ?>
		</td>
		<td class="actions center">
			<?= $this->Form->button(__d('wasabi_cms', 'Submit'), ['div' => false, 'class' => 'button small']) ?>
		</td>
	</tr>
	</tbody>
</table>
<small><?= __d('wasabi_cms', 'The different URLs define all locations this page will be available on.') ?></small>
