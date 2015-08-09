<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var array $routes
 * @var array $routeTypes
 */
use Cake\Routing\Router;
use Wasabi\Core\Model\Entity\Route;
use Wasabi\Core\Routing\RouteTypes;

$error = false;
if ($this->request->is('ajax')) {
	$error = ($this->Session->read('Message.flash.params.class') === 'error') && ($this->request->params['action'] !== 'delete');
	echo $this->Flash->render('routes');
}

$addRouteUrl = Router::url([
	'plugin' => 'Wasabi/Cms',
	'controller' => 'Routes',
	'action' => 'add'
]);
?>
<table class="list routes valign-middle" data-add-route-url="<?= $addRouteUrl ?>">
	<thead>
	<tr>
		<th class="t-10-16"><?= __d('wasabi_cms', 'URL') ?></th>
		<th class="t-4-16 center"><?= __d('wasabi_cms', 'Type') ?></th>
		<th class="t-2-16 center"><?= __d('wasabi_cms', 'Actions') ?></th>
	</tr>
	</thead>
	<tbody>
	<?php foreach ($routes as $r): ?>
		<tr>
			<td><?= ($r['Route']['redirect_to'] === null) ? '<strong>' . $r['Route']['url'] . '</strong>' : $r['Route']['url'] ?></td>
			<td class="center"><?php
				if ($r['Route']['redirect_to'] === null) {
					echo '<strong>' . __d('wasabi_cms', 'Default Route') . '</strong>';
				} else {
					echo $this->Html->link(
                        __d('wasabi_cms', 'Redirect Route'),
                        [
                            'plugin' => 'Wasabi/Cms',
                            'controller' => 'Routes',
                            'action' => 'makeDefault',
                            'id' => $r['Route']['id']
                        ],
                        [
                            'title' => __d('wasabi_cms', 'Make this Route the Default Route.'),
                            'data-toggle' => 'confirm',
                            'data-modal-header' => __d('wasabi_cms', 'Make Default Route'),
                            'data-modal-body' => '<p>' . __d('wasabi_cms', 'Do you really want to make<br/><strong>{0}</strong><br/>the new default route for this page?', $r['Route']['url']) . '</p>',
                            'data-ajax' => true,
                            'data-method' => 'post',
                            'data-notify' => '.field.routes',
                            'data-event' => 'makeDefaultRoute'
					    ]
                    );
				}
				?></td>
			<td class="actions center">
				<?= $this->Html->link(
                    __d('wasabi_cms', 'delete'),
                    [
                        'plugin' => 'Wasabi/Cms',
                        'controller' => 'Routes',
                        'action' => 'delete',
                        'id' => $r['Route']['id']
                    ],
                    [
                        'class' => 'wicon-remove',
                        'title' => __d('wasabi_cms', 'Delete this Route'),
                        'data-modal-header' => __d('wasabi_cms', 'Deletion Confirmation'),
                        'data-modal-body' => '<p>' . __d('wasabi_cms', 'Do you really want to delete Route <strong>{0}</strong>?', $r['Route']['url']) . '</p>',
                        'data-ajax' => true,
                        'data-method' => 'post',
                        'data-notify' => '.field.routes',
                        'data-event' => 'deleteRoute'
                    ]
				);
				?>
			</td>
		</tr>
	<?php endforeach; ?>
	<tr class="new-route<?= $error ? ' valign-top' : '' ?>">
		<td>
			<?= $this->Form->input('Route.url', ['label' => false, 'type' => 'text', 'templates' => 'Wasabi/Cms.form_templates']) ?>
		</td>
		<td class="center">
			<?= $this->Form->input('Route.type', ['label' => false, 'options' => $routeTypes, 'default' => (count($routes) >= 1) ? RouteTypes::get(RouteTypes::TYPE_REDIRECT_ROUTE) : RouteTypes::get(RouteTypes::TYPE_DEFAULT_ROUTE), 'templates' => 'Wasabi/Cms.form_templates']) ?>
		</td>
		<td class="actions center">
			<?= $this->Form->button(__d('wasabi_cms', 'Submit'), ['div' => false, 'class' => 'button small']) ?>
		</td>
	</tr>
	</tbody>
</table>
<small><?= __d('wasabi_cms', 'The different URLs define all locations this page will be available on.') ?></small>