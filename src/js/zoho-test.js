// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

// import library
import "@babel/polyfill";
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select";

// // import js
// import "./components/ScrollToSection.js";

// // vue
import Vue from 'vue';

window.SHEET_NAME = "openday";
window.PROGRAMME_INTERESTED = {
    "Pre-U / Foundation": {
        CAL: "Cambridge A Level",
        AUSMAT: "Australian Matriculation",
    },
    "Diploma & Degree": {
        ADTP: "American Degree Transfer Program",
        DECE: "Diploma in Early Childhood Education",
        DSW: "Diploma in Social Work - NEW",
        DCS: "Diploma in Computer Science - NEW",
        DIT: "Diploma in Information Technology - NEW",
        DEC: "Diploma in E-Commerce - NEW",
        DDM: "Diploma in Digital Marketing - NEW",
        DFT: "Diploma in Financial Technology - NEW",
    },
    "Professional Accounting": {
        ACCAFIA: "ACCA Foundation in Accountancy",
        ACCA: "Association of Chartered Certified Accountants",
    },
    "Professional Development": {
        CICTL: "Cambridge International Certificate in Teaching &amp; Learning",
        CIDTL: "Cambridge International Diploma in Teaching &amp; Learning",
        ICD: "International Certification of Digital Literacy",
        MCECE: "Micro-Credentials in Early Childhood Education",
        MCSW: "Micro-Credentials in Social Work",
        MCCS: "Micro-credentials in Computer Science",
        MCIT: "Micro-credentials in Information Technology",
        MCEC: "Micro-credentials in E-Commerce",
        MCDM: "Micro-credentials in Digital Marketing",
        EMLPE: "Educational Management and Leadership for Private Education",
        TLERSCW: "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop",
    },
};
import LeadForm from './vue/LeadForm';
// import ZohoWebform from './vue/ZohoWebform';
// import Testimonial from './vue/Testimonial';

// // June 2021 - itinerary for webinar
// // import Webinar from './components/Webinar';

// new Vue({ render: createElement => createElement(Testimonial) }).$mount('#testimonial-vue');

new Vue({ render: createElement => createElement(LeadForm) }).$mount('#leadform-vue');
// // new Vue({ render: createElement => createElement(ZohoWebform) }).$mount('#zohowebform-vue');


console.log("--test zoho javascript native-- https://www.zoho.com/crm/developer/docs/api/insertrecords.html")

/**
 * request_url: https://www.zohoapis.com/crm/v2/{module_api_name}
 * 
 * supported modules: Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom
 * 
 * header: Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52
 * 
 * scope=ZohoCRM.modules.ALL
(or)
scope=ZohoCRM.modules.{module_name}.{operation_type}

ALL - Full access to the record
WRITE - Edit records in the module
CREATE - Create records in the module

 */
var listener = 0;
class InsertRecordsAPI {

    async insertRecords() {
        var url = "https://www.zohoapis.com/crm/v2/Leads"
        var parameters = new Map()
        var headers = new Map()
        var token = {
            clientId: "1000.NPY9M1V0XXXXXXXXXXXXXXXXXXXF7H",
            redirectUrl: "http://127.0.0.1:5500/redirect.html",
            scope: "ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,Aaaserver.profile.Read,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.bulk.ALL,ZohoCRM.settings.variable_groups.ALL"
        }
        var accesstoken = await new InsertRecordsAPI().getToken(token)
        headers.set("Authorization", "Zoho-oauthtoken " + accesstoken)
        var requestMethod = "POST"
        var reqBody = { "data": [{ "Last_Name": "Lead_changed", "Email": "newcrmapi@zoho.com", "Company": "abc", "Lead_Status": "Contacted" }, { "Last_Name": "New Lead", "Email": "newlead@zoho.com", "Company": "abc", "Lead_Status": "Contacted" }], "trigger": ["approval", "workflow", "blueprint"] }
        var params = "";
        parameters.forEach(function (value, key) {
            if (parameters.has(key)) {
                if (params) {
                    params = params + key + '=' + value + '&';
                }
                else {
                    params = key + '=' + value + '&';
                }
            }
        });
        var apiHeaders = {};
        if (headers) {
            headers.forEach(function (value, key) {
                apiHeaders[key] = value;
            });
        }
        if (params.length > 0) {
            url = url + '?' + params.substring(0, params.length - 1);
        }
        var requestObj = {
            uri: url,
            method: requestMethod,
            headers: apiHeaders,
            body: JSON.stringify(reqBody),
            encoding: "utf8",
            allowGetBody: true,
            throwHttpErrors: false
        };
        var result = await new InsertRecordsAPI().makeAPICall(requestObj);
        console.log(result.status)
        console.log(result.response)
    }

    async getToken(token) {

        if (listener == 0) {

            window.addEventListener("storage", function (reponse) {
                if (reponse.key === "access_token" && (reponse.oldValue != reponse.newValue || reponse.oldValue == null)) {
                    location.reload();
                }
                if (reponse.key === "access_token") {

                    sessionStorage.removeItem("__auth_process");
                }
            }, false);
            listener = 1;
            if (sessionStorage.getItem("__auth_process")) {
                sessionStorage.removeItem("__auth_process");
            }
        }
        ["granted_for_session", "access_token", "expires_in", "expires_in_sec", "location", "api_domain", "state", "__token_init", "__auth_process"].forEach(function (k) {
            var isKeyExists = localStorage.hasOwnProperty(k);
            if (isKeyExists) {
                sessionStorage.setItem(k, localStorage[k]);
            }
            localStorage.removeItem(k);
        });
        var valueInStore = sessionStorage.getItem("access_token");
        var tokenInit = sessionStorage.getItem("__token_init");
        if (tokenInit != null && valueInStore != null && Date.now() >= parseInt(tokenInit) + 59 * 60 * 1000) { // check after 59th minute
            valueInStore = null;
            sessionStorage.removeItem("access_token");
        }

        var auth_process = sessionStorage.getItem("__auth_process");
        if ((valueInStore == null && auth_process == null) || (valueInStore == 'undefined' && (auth_process == null || auth_process == "true"))) {
            var accountsUrl = "https://accounts.zoho.com/oauth/v2/auth"
            var clientId;
            var scope;
            var redirectUrl;
            if (token != null) {
                clientId = token.clientId;
                scope = token.scope;
                redirectUrl = token.redirectUrl;
            }

            var fullGrant = sessionStorage.getItem("full_grant");
            var grantedForSession = sessionStorage.getItem("granted_for_session");
            if (sessionStorage.getItem("__token_init") != null && ((fullGrant != null && "true" == full_grant) || (grantedForSession != null && "true" == grantedForSession))) {
                accountsUrl += '/refresh';
            }
            if (clientId && scope) {
                sessionStorage.setItem("__token_init", Date.now());
                sessionStorage.removeItem("access_token");
                sessionStorage.setItem("__auth_process", "true");
                window.open(accountsUrl + "?" + "scope" + "=" + scope + "&" + "client_id" + "=" + clientId + "&response_type=token&state=zohocrmclient&redirect_uri=" + redirectUrl);
                ["granted_for_session", "access_token", "expires_in", "expires_in_sec", "location", "api_domain", "state", "__token_init", "__auth_process"].forEach(function (k) {
                    var isKeyExists = localStorage.hasOwnProperty(k);
                    if (isKeyExists) {
                        sessionStorage.setItem(k, localStorage[k]);
                    }
                    localStorage.removeItem(k);
                });
                valueInStore = sessionStorage.getItem("access_token");
            }
        }
        if (token != null && valueInStore != 'undefined') {
            token.accessToken = valueInStore;
        }
        return token.accessToken;
    }

    async makeAPICall(requestDetails) {
        return new Promise(function (resolve, reject) {
            var body, xhr, i;
            body = requestDetails.body || null;
            xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open(requestDetails.method, requestDetails.uri, true);
            for (i in requestDetails.headers) {
                xhr.setRequestHeader(i, requestDetails.headers[i]);
            }
            xhr.send(body);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(xhr);
                }
            }
        })
    }
}