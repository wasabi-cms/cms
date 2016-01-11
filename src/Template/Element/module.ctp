<?php
/**
 * @var string $template
 * @var array $data
 */
ob_start();
eval('?>'. file_get_contents($template));
$out = ob_get_clean();

echo $out;
