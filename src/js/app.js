/**
 * @copyright codewithsadee 2023
 */

'use strict';

// Module import

import { addEventOnElements , getGreetingMsg} from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";

// Toggle sidebar in small screen 

const $sidebar = document.querySelector('[data-sidebar]');
const $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const $overlay = document.querySelector('[data-sidebar-overlay]')

addEventOnElements($sidebarTogglers, 'click', function(){
$sidebar.classList.toggle('active');
$overlay.classList.toggle('active');
});

const $tooltipElems = document.querySelectorAll('[data-tooltip]');
$tooltipElems.forEach($elem => Tooltip($elem))

const $greetElem = document.querySelector('[data-greeting]');
const currentHour = Data().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);

const $currentDataElem = document.querySelector('data-current-data]');
$currentDataElem.textContent = new Data().toDateString().replace(',',',');