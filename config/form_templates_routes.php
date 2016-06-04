<?php
return [
    'formStart' => '<form {{attrs}} novalidate>',
    'label' => '<label {{attrs}}>{{text}}{{info}}</label>',
    'input' => '<input type="{{type}}" name="{{name}}"{{attrs}}>',
    'inputContainer' => '<div class="form-row form-row-{{type}}{{required}}">{{content}}</div>',
    'inputContainerError' => '<div class="form-row form-row-{{type}}{{required}} error">{{content}}</div>',
    'formGroup' => '{{label}}{{input}}{{info}}{{error}}',
    'section' => '<div class="form-section"><div class="form-section-title">{{title}}</div><div class="form-section-description">{{description}}</div></div>',
    'checkboxFormGroup' => '<label>{{formRowLabel}}</label><div class="field">{{label}}</div>',
    'select' => '<select name="{{name}}"{{attrs}}>{{content}}</select>'
];
