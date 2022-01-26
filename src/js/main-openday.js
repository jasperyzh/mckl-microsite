// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

// import library
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select";

// import js
import "./components/ScrollToSection.js";

// vue
import Vue from 'vue';
import LeadForm from './vue/LeadForm';
import Testimonial from './vue/Testimonial';

// June 2021 - itinerary for webinar
// import Webinar from './components/Webinar';

new Vue({ render: createElement => createElement(Testimonial) }).$mount('#testimonial-vue');

window.SHEET_NAME = "openday";

new Vue({ render: createElement => createElement(LeadForm) }).$mount('#leadform-vue');
