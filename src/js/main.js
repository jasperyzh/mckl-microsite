// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

// import library
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select";

// import js
// import "./components/Testimonial.js";
import "./components/ScrollToSection.js";

// vue
import Vue from 'vue';
import LeadForm from './vue/LeadForm';
import Testimonial from './vue/Testimonial';
// import Webinar from './components/Webinar';

new Vue({ render: createElement => createElement(Testimonial) }).$mount('#testimonial-vue');
new Vue({ render: createElement => createElement(LeadForm) }).$mount('#leadform-vue');
// new Vue({ render: createElement => createElement(Webinar) }).$mount('#webinar');

