// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

// import library
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select";

// jQuery(".programme-picker").selectpicker({
//     noneSelectedText: "Interested Programmes*",
// });

// import js
import "./components/ScrollToSection.js";

// vue
import Vue from 'vue';
import LeadForm from './vue/LeadForm';
// import Testimonial from './vue/Testimonial';

// // June 2021 - itinerary for webinar
// // import Webinar from './components/Webinar';

window.SHEET_NAME = "dsw";
new Vue({ render: createElement => createElement(LeadForm) }).$mount('#leadform-vue');
// new Vue({ render: createElement => createElement(Testimonial) }).$mount('#testimonial-vue');

import { tns } from "tiny-slider/src/tiny-slider";

tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    loop: true,
    // fixedWidth: true,
    // autoWidth: true,
    viewportMax: true,
    arrowKeys: true,
    autoplayButtonOutput: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    autoHeight: true,
    controls: false,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    mouseDrag: true,
});