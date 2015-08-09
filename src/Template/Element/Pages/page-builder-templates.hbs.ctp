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
                        <li><a href="javascript:void(0)" class="ca-settings"><i class="icon-settings"></i></a></li>
                    </ul>
                </nav>
            </header>
            <div class="ca-content">

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
                <li><a href="javascript:void(0)" class="row-sort"><i class="icon-grab"></i></a></li>
                <li><a href="javascript:void(0)" class="row-settings"><i class="icon-settings"></i></a></li>
            </ul>
        </nav>
    </div>
</script>

<script id="pb-cell" type="text/x-handlebars-template">
    <div class="grid-{{meta.grid.colWidth}}-{{meta.grid.baseWidth}}" data-type="cell">
        <div class="resize-handle"></div>
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
                    <li><a href="javascript:void(0)" class="module-edit"><i class="icon-edit"></i></a></li>
                    <li><a href="javascript:void(0)" class="module-duplicate"><i class="icon-duplicate"></i></a></li>
                    <li><a href="javascript:void(0)" class="module-remove"><i class="icon-remove"></i></a></li>
                </ul>
            </nav>
        </div>
        <span class="module-description">{{description}}</span>
    </div>
</script>
