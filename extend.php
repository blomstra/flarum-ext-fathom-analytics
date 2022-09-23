<?php

/*
 * This file is part of blomstra/fathom-analytics.
 *
 * Copyright (c) 2022 Blomstra team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Blomstra\FathomAnalytics;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less')
        ->content(function (Document $document, ServerRequestInterface $request) {
            /** @var SettingsRepositoryInterface $settings */
            $settings = resolve(SettingsRepositoryInterface::class);

            $siteId = $settings->get('blomstra-fathom-analytics.site_id');

            $document->head[] = '<script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="' . $siteId . '" defer></script>';
        }),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Settings())
        ->default('blomstra-fathom-analytics.site_id', '')
        ->default('blomstra-fathom-analytics.enabled_events', '{}')
        ->serializeToForum('blomstra-fathom-analytics.enabled_events', 'blomstra-fathom-analytics.enabled_events', function (string $val) {
            return json_decode($val, true);
        })
];
