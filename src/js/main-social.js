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

window.PROGRAMME_INTERESTED = {
    /* "Pre-U / Foundation": {
        CAL: "Cambridge A Level",
        AUSMAT: "Australian Matriculation",
    }, */
    "Diploma & Degree": {
        // ADTP: "American Degree Transfer Program",
        // DECE: "Diploma in Early Childhood Education",
        DSW: "Diploma in Social Work - NEW",
        // DCS: "Diploma in Computer Science - NEW",
        // DIT: "Diploma in Information Technology - NEW",
        // DEC: "Diploma in E-Commerce - NEW",
        // DDM: "Diploma in Digital Marketing - NEW",
        // DFT: "Diploma in Financial Technology - NEW",
    },
    /* "Professional Accounting": {
        ACCAFIA: "ACCA Foundation in Accountancy",
        ACCA: "Association of Chartered Certified Accountants",
    }, */
    "Professional Development": {
        // CICTL: "Cambridge International Certificate in Teaching &amp; Learning",
        // CIDTL: "Cambridge International Diploma in Teaching &amp; Learning",
        // ICD: "International Certification of Digital Literacy",
        // MCECE: "Micro-Credentials in Early Childhood Education",
        MCSW: "Micro-Credentials in Social Work",
        // MCCS: "Micro-credentials in Computer Science",
        // MCIT: "Micro-credentials in Information Technology",
        // MCEC: "Micro-credentials in E-Commerce",
        // MCDM: "Micro-credentials in Digital Marketing",
        // EMLPE: "Educational Management and Leadership for Private Education",
        // TLERSCW: "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop",
    },
};
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