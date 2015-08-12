<script id="pb-page-builder" type="text/x-handlebars-template">
    <nav class="page-builder-controls">
        <ul>
            <li><a href="javascript:void(0)" class="button gray" data-add="module"><i class="icon-plus"></i> <?= __d('wasabi_cms', 'Add Module') ?></a></li>
            <li><a href="javascript:void(0)" class="button gray" data-add="row"><i class="icon-row"></i> <?= __d('wasabi_cms', 'Add Row') ?></a></li>
        </ul>
    </nav>
    <div class="page-builder-content row">

    </div>
</script>

<script id="pb-content-area" type="text/x-handlebars-template">
    <div class="grid-{{grid.colWidth}}-{{grid.baseWidth}}">
        <div class="content-area" data-ca="{{contentAreaId}}">
            <header class="ca-header">
                <h5>{{name}}</h5>
                <nav class="ca-actions">
                    <ul>
                        <li><a href="javascript:void(0)" class="ca-settings" title="<?= __d('wasabi_cms', 'Settings') ?>"><i class="icon-settings"></i></a></li>
                    </ul>
                </nav>
            </header>
            <div class="ca-content row">

            </div>
        </div>
    </div>
</script>

<script id="pb-row" type="text/x-handlebars-template">
    <div data-type="row">
        <div class="cells row">

        </div>
        <nav class="row-actions">
            <ul>
                <li><a href="javascript:void(0)" class="row-sort" title="<?= __d('wasabi_cms', 'Move') ?>"><i class="icon-grab"></i></a></li>
                <li><a href="javascript:void(0)" class="row-settings" title="<?= __d('wasabi_cms', 'Settings') ?>"><i class="icon-settings"></i></a></li>
            </ul>
        </nav>
    </div>
</script>

<script id="pb-cell" type="text/x-handlebars-template">
    <div class="grid-{{grid.colWidth}}-{{grid.baseWidth}}" data-type="cell">
        <div class="resize-handle" title="<?= __d('wasabi_cms', 'Resize') ?>"></div>
        <div class="cell-wrapper">

        </div>
    </div>
</script>

<script id="pb-module" type="text/x-handlebars-template">
    <div class="module">
        <div class="module-title">
            <h6>{{title}}</h6>
            <nav class="module-actions">
                <ul>
                    <li><a href="javascript:void(0)" class="module-edit" title="<?= __d('wasabi_cms', 'Edit') ?>"><i class="icon-edit"></i></a></li>
                    <li><a href="javascript:void(0)" class="module-duplicate" title="<?= __d('wasabi_cms', 'Duplicate') ?>"><i class="icon-duplicate"></i></a></li>
                    <li><a href="javascript:void(0)" class="module-remove" title="<?= __d('wasabi_cms', 'Remove') ?>"><i class="icon-remove"></i></a></li>
                </ul>
            </nav>
        </div>
        <span class="module-description">{{description}}</span>
    </div>
</script>

<script id="pb-row-editor" type="text/x-handlebars-template">
    <div class="row-editor" data-type="row">
        <div class="cells row">

        </div>
    </div>
</script>

<script id="pb-cell-editor" type="text/x-handlebars-template">
    <div class="grid-{{grid.colWidth}}-{{grid.baseWidth}}" data-type="cell">
        <div class="resize-handle" title="<?= __d('wasabi_cms', 'Resize') ?>"></div>
        <div class="cell-wrapper">
            <nav class="cell-actions">
                <ul>
                    <li><a href="javascript:void(0)" class="cell-remove" title="<?= __d('wasabi_cms', 'Remove') ?>"><i class="icon-close"></i></a></li>
                </ul>
            </nav>
            <span class="cell-width">{{{cellWidth}}}</span>
        </div>
    </div>
</script>
