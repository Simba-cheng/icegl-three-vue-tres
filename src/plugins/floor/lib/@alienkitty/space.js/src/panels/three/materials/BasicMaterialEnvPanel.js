/**
 * @author pschroen / https://ufo.ai/
 */

import { Panel } from '../../Panel.js';
import { PanelItem } from '../../PanelItem.js';
import { CombineOptions } from '../Options.js';

import { getKeyByValue } from '../../../utils/Utils.js';

export class BasicMaterialEnvPanel extends Panel {
    constructor(mesh) {
        super();

        this.mesh = mesh;

        this.initPanel();
    }

    initPanel() {
        const mesh = this.mesh;

        const items = [
            {
                type: 'divider'
            },
            {
                type: 'list',
                list: CombineOptions,
                value: getKeyByValue(CombineOptions, mesh.material.combine),
                callback: value => {
                    mesh.material.combine = CombineOptions[value];
                    mesh.material.needsUpdate = true;
                }
            },
            {
                type: 'slider',
                label: 'Reflect',
                min: 0,
                max: 1,
                step: 0.01,
                value: mesh.material.reflectivity,
                callback: value => {
                    mesh.material.reflectivity = value;
                }
            },
            {
                type: 'slider',
                label: 'Refract',
                min: 0,
                max: 1,
                step: 0.01,
                value: mesh.material.refractionRatio,
                callback: value => {
                    mesh.material.refractionRatio = value;
                }
            }
            // TODO: Texture thumbnails
        ];

        items.forEach(data => {
            this.add(new PanelItem(data));
        });
    }
}
