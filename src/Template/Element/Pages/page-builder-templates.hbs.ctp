<script id="pb-page-builder" type="text/template">
    <nav class="page-builder-controls">
        <ul>
            <li><a href="javascript:void(0)" class="button gray" data-add="module"><i class="icon-plus"></i> <?= __d('wasabi_cms', 'Add Module') ?></a></li>
            <li><a href="javascript:void(0)" class="button gray" data-add="row"><i class="icon-row"></i> <?= __d('wasabi_cms', 'Add Row') ?></a></li>
        </ul>
    </nav>
    <div class="page-builder-content row"></div>
</script>

<script id="pb-content-area" type="text/template">
    <div class="content-area" data-ca="<%= contentAreaId %>">
        <header class="ca-header">
            <h5><%= name %></h5>
            <nav class="ca-actions">
                <ul>
                    <li><a href="javascript:void(0)" class="ca-settings" title="<?= __d('wasabi_cms', 'Settings') ?>"><i class="icon-settings"></i></a></li>
                </ul>
            </nav>
        </header>
        <div class="ca-content row"></div>
    </div>
</script>

<script id="pb-row" type="text/template">
    <div class="cells row"></div>
    <nav class="row-actions">
        <ul>
            <li><a href="javascript:void(0)" class="row-sort" title="<?= __d('wasabi_cms', 'Move') ?>"><i class="icon-grab"></i></a></li>
            <li><a href="javascript:void(0)" class="row-settings" title="<?= __d('wasabi_cms', 'Settings') ?>"><i class="icon-settings"></i></a></li>
        </ul>
    </nav>
</script>

<script id="pb-cell" type="text/template">
    <div class="resize-handle" title="<?= __d('wasabi_cms', 'Resize') ?>"></div>
    <div class="cell-wrapper"></div>
</script>

<script id="pb-module" type="text/template">
    <div class="module-title">
        <h6><%= title %></h6>
        <nav class="module-actions">
            <ul>
                <li><a href="javascript:void(0)" class="module-edit" title="<?= __d('wasabi_cms', 'Edit') ?>"><i class="icon-edit"></i></a></li>
                <li><a href="javascript:void(0)" class="module-duplicate" title="<?= __d('wasabi_cms', 'Duplicate') ?>"><i class="icon-duplicate"></i></a></li>
                <li><a href="javascript:void(0)" class="module-remove" title="<?= __d('wasabi_cms', 'Remove') ?>"><i class="icon-remove"></i></a></li>
            </ul>
        </nav>
    </div>
    <span class="module-description"><%= description %></span>
</script>

<script id="pb-row-editor" type="text/template">
    <label for="rowLayoutSelect">Row Layout</label>
    <select id="rowLayoutSelect">
        <option>Choose...</option>
        <optgroup label="16 Grid">
            <option value="16:8">2 columns</option>
            <option value="16:4">4 columns</option>
            <option value="16:2">8 columns</option>
            <option value="16:1">16 columns</option>
        </optgroup>
        <optgroup label="12 Grid">
            <option value="12:6">2 columns</option>
            <option value="12:4">3 columns</option>
            <option value="12:3">4 columns</option>
            <option value="12:2">6 columns</option>
            <option value="12:1">12 columns</option>
        </optgroup>
        <optgroup label="10 Grid">
            <option value="10:5">2 columns</option>
            <option value="10:2">5 columns</option>
        </optgroup>
    </select>
    <div class="cells row"></div>
</script>

<script id="pb-cell-editor" type="text/template">
    <div class="resize-handle" title="<?= __d('wasabi_cms', 'Resize') ?>"></div>
    <div class="cell-wrapper">
        <nav class="cell-actions">
            <ul>
                <li><a href="javascript:void(0)" class="cell-remove" title="<?= __d('wasabi_cms', 'Remove') ?>"><i class="icon-close"></i></a></li>
            </ul>
        </nav>
        <span class="cell-width"><span class="cell-colwidth"><%= colWidth() %></span>/<span class="cell-baseiwdth"><%= baseWidth() %></span></span>
    </div>
</script>
