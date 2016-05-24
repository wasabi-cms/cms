<?php
return [
    'Cache' => [
        'wasabi/cms/pages' => [
            'className' => 'File',
            'duration' => '+999 days',
            'prefix' => '',
            'path' => CACHE . 'wasabi' . DS . 'cms' . DS . 'pages'
        ],
    ]
];
