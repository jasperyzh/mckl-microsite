// leadform - social-workw
window.SHEET_NAME = "dsw";
window.PATH_NAME = "social-work";
window.PROGRAMME_INTERESTED = {
    // "Preparatory Programmes": {
    //     "PREPCAL (MAY)": "PREPCAL (MAY)",
    //     "PREPAUSMAT (MAY)": "PREPAUSMAT (MAY)",
    //     "FLY Bootcamp": "FLY Bootcamp",
    // },
    // "Pre-U / Foundation": {
    //     "Cambridge A Level": "Cambridge A Level",
    //     AUSMAT: "Australian Matriculation",
    // },
    "Diploma": {
    //     ADTP: "American Degree Transfer Program",
    //     "DECE (PT)": "Diploma in Early Childhood Education",
        "DSW (PT)": "Diploma in Social Work - NEW",
    //     DCS: "Diploma in Computer Science - NEW",
    //     DIT: "Diploma in Information Technology - NEW",
    //     DEC: "Diploma in E-Commerce - NEW",
    //     DDM: "Diploma in Digital Marketing - NEW",
    //     DIFT: "Diploma in Financial Technology - NEW",
    },
    // "Professional Accounting": {
    //     "ACCA FIA": "ACCA Foundation in Accountancy",
    //     "ACCA (PT)": "Association of Chartered Certified Accountants",
    // },
    "Professional Development": {
    //     CICTL: "Cambridge International Certificate in Teaching & Learning",
    //     CIDTL: "Cambridge International Diploma in Teaching & Learning",
    //     "International Certification of Digital Literacy":
    //         "International Certification of Digital Literacy",
    //     "Micro-Credentials in Early Childhood Education":
    //         "Micro-Credentials in Early Childhood Education",
        "Micro-Credentials in Social Work":
            "Micro-Credentials in Social Work",
    //     "Micro-credentials in Computer Science":
    //         "Micro-credentials in Computer Science",
    //     "Micro-credentials in Information Technology":
    //         "Micro-credentials in Information Technology",
    //     "Micro-credentials in E-Commerce": "Micro-credentials in E-Commerce",
    //     "Micro-credentials in Digital Marketing":
    //         "Micro-credentials in Digital Marketing",
    //     "Educational Management and Leadership for Private Education":
    //         "Educational Management and Leadership for Private Education",
    //     "Teaching & Learning and Education Related Short Courses & Workshop":
    //         "Teaching & Learning and Education Related Short Courses & Workshop",
    //     "Micro-Cred Computing & Business":
    //         "Micro-Credentials in Computing & Business",
    //     "AWS Academy": "AWS Academy",
    },
};

// import
import "./_main-default.js";
import "./_vue-leadform.js";

import Vue from 'vue';
import SocialNews from './vue/SocialNews.vue';
if (document.getElementById("SocialNews")) {
    new Vue({ render: createElement => createElement(SocialNews) }).$mount('#SocialNews');
}