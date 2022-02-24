
import Vue from 'vue';

// import LeadForm from './vue/LeadForm';
// if (document.getElementById("leadform-vue")) {
//     new Vue({ render: createElement => createElement(LeadForm) }).$mount('#leadform-vue');
// }

import ZohoWebform from './vue/ZohoWebform';
if (document.getElementById("ZohoWebform")) {
    new Vue({ render: createElement => createElement(ZohoWebform) }).$mount('#ZohoWebform');
}
