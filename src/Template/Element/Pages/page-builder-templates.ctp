<script id="pb-PageBuilder" type="text/template">
    <nav class="pb-PageBuilder-controls">
        <ul>
            <li><a href="javascript:void(0)" class="button gray" data-add="module"><i class="icon-plus"></i> <?= __d('wasabi_cms', 'Add Module') ?></a></li>
            <li><a href="javascript:void(0)" class="button gray" data-add="row"><i class="icon-row"></i> <?= __d('wasabi_cms', 'Add Row') ?></a></li>
            <li><a href="javascript:void(0)" class="button gray" data-add="container"><i class="icon-row"></i> <?= __d('wasabi_cms', 'Add Container') ?></a></li>
        </ul>
    </nav>
    <div class="pb-PageBuilder-content row"></div>
</script>

<script id="pb-ContentArea" type="text/template">
    <div class="pb-ContentArea" data-ca="<%= contentAreaId %>">
        <header class="pb-ContentArea-header">
            <h5><%= name %></h5>
            <nav class="pb-ContentArea-actions">
                <ul>
                    <li><a href="javascript:void(0)" class="pb-ContentArea-settings" title="<?= __d('wasabi_cms', 'Settings') ?>"><i class="icon-settings"></i></a></li>
                </ul>
            </nav>
        </header>
        <div class="pb-ContentArea-content row"></div>
    </div>
</script>

<script id="pb-Container" type="text/template">
    <header class="pb-Container-header">
        <h6 class="pb-Container-move"><%= name %> <small><%= containerElement %><%= cssClasses %><% if(useInnerContainer) { %> > div<% if(innerCssClasses !== '') { %><%= innerCssClasses %><% } %><% } %></small></h6>
        <nav class="pb-Container-actions">
            <ul class="row">
                <li><a href="javascript:void(0)" class="pb-Container-options" title="<?= __d('wasabi_cms', 'Options') ?>"><i class="icon-cogs"></i></a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="pb-Container-settings" title="<?= __d('wasabi_cms', 'Settings') ?>" data-toggle="dropdown"><i class="icon-settings"></i></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="javascript:void(0)" class="pb-Container-clear"><?= __d('wasabi_cms', 'Clear Container') ?></a></li>
                        <li><a href="javascript:void(0)" class="pb-Container-duplicate"><?= __d('wasabi_cms', 'Duplicate Container') ?></a></li>
                        <li><a href="javascript:void(0)" class="pb-Container-delete"><?= __d('wasabi_cms', 'Delete Container') ?></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    <div class="pb-Container-options-panel">
        <div class="form-row">
            <label><?= __d('wasabi_cms', 'Container Element') ?></label>
            <div class="field">
                <select class="pb-Container-element">
                    <option value="article"<% if (containerElement === 'article') { %> selected<% } %>>article</option>
                    <option value="section"<% if (containerElement === 'section') { %> selected<% } %>>section</option>
                    <option value="div"<% if (containerElement === 'div') { %> selected<% } %>>div</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <label><?= __d('wasabi_cms', 'CSS Classes') ?></label>
            <div class="field">
                <input class="pb-Container-css-classes" type="text" value="<%= cssClassesValue %>" />
            </div>
        </div>
        <div class="form-section">
            <div class="form-section-title"><?= __d('wasabi_cms', 'Inner Container') ?></div>
            <div class="form-section-description"><?= __d('wasabi_cms', 'Wrap the content of this container in an additional div.') ?></div>
        </div>
        <div class="form-row">
            <label><?= __d('wasabi_cms', 'Use Inner Container') ?></label>
            <div class="field">
                <div class="row">
                    <label><input type="checkbox" class="pb-Container-use-inner-container" value="1"<% if (useInnerContainer) { %> checked<% } %>/><?= __d('wasabi_cms', 'Use inner Container') ?></label>
                </div>
            </div>
        </div>
        <div class="form-row">
            <label><?= __d('wasabi_cms', 'CSS Classes') ?></label>
            <div class="field">
                <input class="pb-Container-inner-container-css-classes" type="text" value="<%= innerCssClassesValue %>" placeholder="<?= __d('wasabi_cms', 'e.g.: container') ?>"/>
            </div>
        </div>
    </div>
    <div class="pb-Container-content row"></div>
</script>

<script id="pb-Row" type="text/template">
    <div class="pb-Row-cells row"></div>
    <nav class="pb-Row-actions">
        <ul>
            <li><a href="javascript:void(0)" class="pb-Row-move" title="<?= __d('wasabi_cms', 'Move') ?>"><i class="icon-grab"></i></a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="pb-Row-settings" title="<?= __d('wasabi_cms', 'Settings') ?>" data-toggle="dropdown"><i class="icon-settings"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="javascript:void(0)" class="pb-Row-edit"><?= __d('wasabi_cms', 'Edit Row') ?></a></li>
                    <li><a href="javascript:void(0)" class="pb-Row-duplicate"><?= __d('wasabi_cms', 'Duplicate Row') ?></a></li>
                    <li><a href="javascript:void(0)" class="pb-Row-clear"><?= __d('wasabi_cms', 'Clear Row') ?></a></li>
                    <li><a href="javascript:void(0)" class="pb-Row-delete"><?= __d('wasabi_cms', 'Delete Row') ?></a></li>
                </ul>
            </li>
        </ul>
    </nav>
</script>

<script id="pb-cell" type="text/template">
    <div class="resize-handle" title="<?= __d('wasabi_cms', 'Resize') ?>"></div>
    <div class="cell-wrapper"></div>
    <div class="cell-width-wrapper">
        <span class="cell-width"><span class="cell-colwidth"><%= colWidth() %></span>/<span class="cell-baseiwdth"><%= baseWidth() %></span></span>
    </div>
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
    <div class="module-description"><%= description %></div>
</script>

<script id="pb-row-editor" type="text/template">
    <div class="row layout-select-row">
        <label for="rowLayoutSelect"><?= __d('wasabi_cms', 'Row Layout') ?>:</label>
        <select id="rowLayoutSelect">
            <option>Choose...</option>
            <optgroup label="16 Grid">
                <option value="16:8"><?= __d('wasabi_cms', '2 columns') ?></option>
                <option value="16:4"><?= __d('wasabi_cms', '4 columns') ?></option>
                <option value="16:2"><?= __d('wasabi_cms', '8 columns') ?></option>
                <option value="16:1"><?= __d('wasabi_cms', '16 columns') ?></option>
            </optgroup>
            <optgroup label="12 Grid">
                <option value="12:6"><?= __d('wasabi_cms', '2 columns') ?></option>
                <option value="12:4"><?= __d('wasabi_cms', '3 columns') ?></option>
                <option value="12:3"><?= __d('wasabi_cms', '4 columns') ?></option>
                <option value="12:2"><?= __d('wasabi_cms', '6 columns') ?></option>
                <option value="12:1"><?= __d('wasabi_cms', '12 columns') ?></option>
            </optgroup>
            <optgroup label="10 Grid">
                <option value="10:5"><?= __d('wasabi_cms', '2 columns') ?></option>
                <option value="10:2"><?= __d('wasabi_cms', '5 columns') ?></option>
            </optgroup>
        </select>
    </div>
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

<script id="module-dialog-module" type="text/template">
    <span class="<%= icon %>"></span>
    <h3><%= name %></h3>
    <small class="description"><%= description %></small>
</script>

<script id="module-dialog-sidebar" type="text/template">
    <input id="module-search" type="text" value="" placeholder="<?= __d('wasabi_cms', 'Search Modules') ?>">
    <ul class="module-groups">
        <li>
            <a class="module-group active disable-filter" href="javascript:void(0)"><?= __d('wasabi_cms', 'All Modules') ?></a>
        </li>
        <% _.each(groups, function(group) { %>
        <li>
            <a class="module-group" href="javascript:void(0)"><%= group %></a>
        </li>
        <% }); %>
    </ul>
</script>
