import './hw_11.scss';
import { lightWidget } from './scripts/hw_dom';

const lights = document.querySelectorAll('.light');

for (const lightElement of lights) {
    lightWidget(lightElement);
}
