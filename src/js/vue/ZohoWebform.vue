<template>
  <div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8" />
    <form
      id="zoho-webform"
      action="https://crm.zoho.com/crm/WebToLeadForm"
      name="WebToLeads4875945000004073003"
      method="POST"
      accept-charset="UTF-8"
      @submit.prevent="prep_zoho_value()"
    >
      <input
        type="text"
        class="d-none"
        name="xnQsjsdp"
        value="4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb"
      />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input
        type="text"
        class="d-none"
        name="xmIwtLD"
        value="3df8513a44e8ee0dc6e36209ffd3db2439ef2cc150b37c8431e58c9fcba68bbe"
      />
      <input type="text" class="d-none" name="actionType" value="TGVhZHM=" />
      <input
        type="text"
        class="d-none"
        name="returnURL"
        :value="`https://mckl.edu.my/${path_name}/thank-you.html`"
      />
      <!-- Do not remove this code. -->

      <div class="form-group">
        <label for="programme_interested"
          >I am interested in <span class="text-danger">*</span></label
        >
        <select
          class="form-control"
          name="programme_interested"
          id="programme_interested"
          required
        >
          <option disabled="" selected>
            - Please select your preferences -
          </option>

          <optgroup
            v-for="(group, index) in get_programme_interested"
            :label="index"
            :key="index"
          >
            <option
              :value="prog_value"
              v-for="(prog, prog_value) in get_programme_interested[index]"
              :key="prog_value"
            >
              {{ prog }}
            </option>
          </optgroup>
          <option value="none">Not Sure</option>
        </select>
      </div>

      <div class="bg__darkgrey my-4 px-3 py-4 rounded">
        <p class="mb-2"><b>I'm interested in:</b></p>
        <!-- microsite_interest:
          name="LEADCF10"
          Personalised counselling with Senior Academicians
          Scholarships
        -->
        <div class="form-check">
          <input
            type="checkbox"
            name="LEADCF10"
            value="Personalised counselling with Senior Academicians"
            id="check_counselling"
            class="form-check-input"
          />
          <label for="check_counselling" class="form-check-label">
            Personalised counselling with Senior Academicians
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            name="LEADCF10"
            value="Scholarships"
            id="check_scholarship"
            class="form-check-input"
          />
          <label for="check_scholarship" class="form-check-label">
            Scholarships
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="zcwf_col_lab">
          <label for="Last_Name" class="form-label"
            >Full Name <span class="text-danger">*</span>
          </label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="Last_Name"
            name="Last Name"
            maxlength="80"
            class="form-control"
            placeholder="e.g. Adam Smith"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="zcwf_col_lab">
          <label for="Email" class="form-label"
            >Email <span class="text-danger">*</span></label
          >
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            ftype="email"
            id="Email"
            name="Email"
            maxlength="100"
            class="form-control"
            placeholder="e.g. adam.smith@email.com"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="zcwf_col_lab">
          <label for="Mobile" class="form-label"
            >Phone <span class="text-danger">*</span></label
          >
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="Mobile"
            name="Mobile"
            maxlength="30"
            class="form-control"
            placeholder="e.g. 0108881234"
          />
        </div>
      </div>
      <!-- zoho_custom_field - HIDDEN -->
      <select class="d-none" id="preparatory_programmes" name="LEADCF7">
        <option value="">-None-</option>
        <option value="PREPCAL (MAY)">PREPCAL (MAY)</option>
        <option value="PREPAUSMAT (MAY)">PREPAUSMAT (MAY)</option>
        <option value="FLY Bootcamp">FLY Bootcamp</option>
      </select>
      <select class="d-none" id="pre_university_programmes" name="LEADCF20">
        <option value="">-None-</option>
        <option value="Cambridge A Level">Cambridge A Level</option>
        <option value="Cambridge A Level (German Pathway)">
          Cambridge A Level (German Pathway)
        </option>
        <option value="AUSMAT">AUSMAT</option>
      </select>
      <select class="d-none" id="diploma_degree" name="LEADCF19">
        <option value="">-None-</option>
        <option value="ADTP">ADTP</option>
        <option value="DECE (PT)">DECE (PT)</option>
        <option value="DECE (FT)">DECE (FT)</option>
        <option value="DSW (PT)">DSW (PT)</option>
        <option value="DSW (FT)">DSW (FT)</option>
        <option value="DIFT">DIFT</option>
        <option value="DIT">DIT</option>
        <option value="DCS">DCS</option>
        <option value="DEC">DEC</option>
        <option value="DDM">DDM</option>
      </select>
      <select
        class="d-none"
        id="professional_accounting_programme"
        name="LEADCF21"
      >
        <option value="">-None-</option>
        <option value="ACCA (FT)">ACCA (FT)</option>
        <option value="ACCA (PT)">ACCA (PT)</option>
        <option value="ACCA FIA">ACCA FIA</option>
      </select>
      <select
        class="d-none"
        id="professional_development_programme"
        name="LEADCF22"
      >
        <option value="">-None-</option>
        <option value="CICTL">CICTL</option>
        <option value="CIDTL">CIDTL</option>
        <option value="International Certification of Digital Literacy">
          International Certification of Digital Literacy
        </option>
        <option value="Micro-Credentials in Social Work">
          Micro-Credentials in Social Work
        </option>
        <option value="Micro-Credentials in Early Childhood Education">
          Micro-Credentials in Early Childhood Education
        </option>
        <option value="Micro-credentials in Computer Science">
          Micro-credentials in Computer Science
        </option>
        <option value="Micro-credentials in Information Technology">
          Micro-credentials in Information Technology
        </option>
        <option value="Micro-credentials in E-Commerce">
          Micro-credentials in E-Commerce
        </option>
        <option value="Micro-credentials in Digital Marketing">
          Micro-credentials in Digital Marketing
        </option>
        <option
          value="Educational Management and Leadership for Private Education"
        >
          Educational Management and Leadership for Private Education
        </option>
        <option
          value="Teaching &amp; Learning and Education Related Short Courses &amp; Workshop"
        >
          Teaching &amp; Learning and Education Related Short Courses &amp;
          Workshop
        </option>
        <option value="Micro-Cred Computing &amp; Business">
          Micro-Cred Computing &amp; Business
        </option>
        <option value="AWS Academy">AWS Academy</option>
        <option value="FLY Programme">FLY Programme</option>
      </select>
      <input id="remarks" type="hidden" name="LEADCF11" value="" />
      <input
        id="latest_academic_qualification"
        type="hidden"
        name="LEADCF5"
        value=""
      />
      <input
        id="lead_source"
        type="hidden"
        name="LEADCF1"
        value="Microsite (MCKL Website)"
      />
      <!-- campus:
        KL Campus
        Penang Pykett Campus
       -->
      <input id="campus" type="hidden" name="LEADCF23" value="KL Campus" />
      <!-- microsites_source:
        open-day
        acca
        business-programme
        scholarship
        social-work
        short-courses
        digital-programme
       -->
      <input
        id="microsite_source"
        type="hidden"
        name="LEADCF9"
        :value="`${path_name}`"
      />

      <!-- agreements -->
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="privacyTool4875945000004073003"
          name="privacyTool"
          autocomplete="off"
        />
        <label class="form-check-label" for="privacyTool4875945000004073003">
          I have read the College's
          <a
            href="https://mckl.edu.my/personal-data-protection-notice/"
            target="_blank"
            >Personal Data Protection Notice</a
          >
          and I give consent to the College to process my personal data
          accordingly.
        </label>
        <div id="privacyErr4875945000004073003" style="visibility: hidden">
          Please accept the agreement to proceed.
        </div>
      </div>

      <div class="zcwf_row">
        <div class="zcwf_col_lab"></div>
        <div class="zcwf_col_fld">
          <input
            type="submit"
            id="formsubmit"
            class="formsubmit btn btn-danger px-4"
            value="Submit"
            title="Submit"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import "jquery-validation";

export default {
  data() {
    return {
      $form: "",
      path_name: "",
      programme_interested: {
        "Preparatory Programmes": {
          "PREPCAL (MAY)": "PREPCAL (MAY)",
          "PREPAUSMAT (MAY)": "PREPAUSMAT (MAY)",
          "FLY Bootcamp": "FLY Bootcamp",
        },
        "Pre-U / Foundation": {
          "Cambridge A Level": "Cambridge A Level",
          AUSMAT: "Australian Matriculation",
        },
        "Diploma & Degree": {
          ADTP: "American Degree Transfer Program",
          "DECE (PT)": "Diploma in Early Childhood Education",
          "DSW (PT)": "Diploma in Social Work - NEW",
          DCS: "Diploma in Computer Science - NEW",
          DIT: "Diploma in Information Technology - NEW",
          DEC: "Diploma in E-Commerce - NEW",
          DDM: "Diploma in Digital Marketing - NEW",
          DIFT: "Diploma in Financial Technology - NEW",
        },
        "Professional Accounting": {
          "ACCA FIA": "ACCA Foundation in Accountancy",
          "ACCA (PT)": "Association of Chartered Certified Accountants",
        },
        "Professional Development": {
          CICTL: "Cambridge International Certificate in Teaching & Learning",
          CIDTL: "Cambridge International Diploma in Teaching & Learning",
          "International Certification of Digital Literacy":
            "International Certification of Digital Literacy",
          "Micro-Credentials in Early Childhood Education":
            "Micro-Credentials in Early Childhood Education",
          "Micro-Credentials in Social Work":
            "Micro-Credentials in Social Work",
          "Micro-credentials in Computer Science":
            "Micro-credentials in Computer Science",
          "Micro-credentials in Information Technology":
            "Micro-credentials in Information Technology",
          "Micro-credentials in E-Commerce": "Micro-credentials in E-Commerce",
          "Micro-credentials in Digital Marketing":
            "Micro-credentials in Digital Marketing",
          "Educational Management and Leadership for Private Education":
            "Educational Management and Leadership for Private Education",
          "Teaching & Learning and Education Related Short Courses & Workshop":
            "Teaching & Learning and Education Related Short Courses & Workshop",
          "Micro-Cred Computing & Business":
            "Micro-Credentials in Computing & Business",
          "AWS Academy": "AWS Academy",
        },
      },
    };
  },
  computed: {
    get_programme_interested() {
      return this.programme_interested;
    },
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      if (window.PROGRAMME_INTERESTED) {
        this.programme_interested = window.PROGRAMME_INTERESTED;
      }
      if (window.PATH_NAME) {
        this.path_name = window.PATH_NAME;
      }
    });

    this.$form = $("#zoho-webform");

    const DEBUG = false;

    // debug
    if (DEBUG) {
      document.getElementById("Last_Name").value = "Test TestFormgah";
      document.getElementById("Email").value = "testForm5884@gmail.com";
      document.getElementById("Mobile").value = "0135135884";
    }

    // setup validator
    $.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
      },
      "Letters only please"
    );
    $.validator.addMethod(
      "emailExtraCheck",
      function (value, element) {
        return (
          this.optional(element) ||
          /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            value
          )
        );
      },
      "Please enter a valid email address"
    );
    this.$form.validate({
      debug: false,
      rules: {
        "Last Name": {
          required: true,
          lettersonly: true,
          minlength: 5,
          maxlength: 120,
        },
        Email: {
          required: true,
          email: true,
          emailExtraCheck: true,
        },
        Mobile: {
          required: true,
          number: true,
          minlength: 8,
          maxlength: 15,
        },
        programme_interested: {
          required: true,
        },
      },
      // Specify validation error messages
      messages: {
        "Last Name": {
          required: "Please enter your full name",
          lettersonly: "Please enter your name in alphabet only",
          minlength: "Your name is too short",
          maxlength: "Your name is too long",
        },
        Email: "Please enter a valid email address",
        Mobile: {
          required: "Please enter your contact number",
          number: "Number only, no special character required",
          minlength: "Your phone number is too short",
          maxlength: "Your phone number is too long",
        },
        programme_interested: {
          required: "Please select your preference",
        },
      },
    });
  },
  methods: {
    set_programme_interested() {
      // get all the options to be selected
      let get_options = document.querySelectorAll(
        `#preparatory_programmes option, #pre_university_programmes option, #diploma_degree option, #professional_accounting_programme option, #professional_development_programme option`
      );
      console.log(get_options);

      let get_user_selected_programme = document.getElementById(
        "programme_interested"
      ).value;

      // console.log("get_user_selected_programme", get_user_selected_programme);

      // cross-check user-selected with zoho-options; select option
      get_options.forEach((option) => {
        if (option.value == get_user_selected_programme) {
          option.selected = true;
          return;
        }
      });
    },

    prep_zoho_value() {
      // reset fields
      this.set_programme_interested();

      // debug
      let form = document.getElementById("zoho-webform");
      var data = new FormData(form);
      for (const [name, value] of data) {
        console.log(name, value);
      }

      // validate fields
      if (!this.$form.valid()) return;

      // disable submit
      document
        .querySelector(".crmWebToEntityForm .formsubmit")
        .setAttribute("disabled", true);

      this.$form.submit();
    },
  },
};
</script>
