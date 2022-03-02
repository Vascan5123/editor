<?php

/*
 * This file is part of vascan/editor.
 *
 * Copyright (c) 2022 vascan5123.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Vascan\Editor;

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBCodes->addCustom(
                '[pdf]{TEXT}[/pdf]',
                '<iframe src="" style="width:100%; height:500px;" class="iframe_pdf" frameborder="0">{TEXT}</iframe><span class="span_pdf">{TEXT}</span>'
            );
        })
];
