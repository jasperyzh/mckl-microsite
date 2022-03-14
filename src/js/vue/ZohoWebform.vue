<template>
  <div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8" />
    <form
      action="https://crm.zoho.com/crm/WebToLeadForm"
      name="WebToLeads4875945000004073003"
      method="POST"
      accept-charset="UTF-8"
      @submit.prevent="prep_zoho_value()"
    >
      <!-- checkMandatory4875945000004073003(); -->
      <!-- onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4875945000004073003()' -->
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
        value="https://mckl.edu.my"
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
            :label="group_id"
            v-for="(group, group_id) in get_programme_interested"
            :key="group_id"
          >
            <option
              :value="prog_value"
              v-for="(prog, prog_value) in group"
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
        <div class="form-check">
          <input
            type="checkbox"
            value="Personalised counselling with Senior Academicians"
            name="check_counselling"
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
            value="Scholarships"
            name="check_scholarship"
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
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF7">Preparatory Programmes</label>
        </div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF7" name="LEADCF7">
            <option value="-None-">-None-</option>
            <option value="PREPCAL (MAY)">PREPCAL (MAY)</option>
            <option value="PREPAUSMAT (MAY)">PREPAUSMAT (MAY)</option>
            <option value="FLY Bootcamp">FLY Bootcamp</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF20">Pre-University</label>
        </div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF20" name="LEADCF20">
            <option value="-None-">-None-</option>
            <option value="Cambridge A Level">Cambridge A Level</option>
            <option value="Cambridge A Level (German Pathway)">
              Cambridge A Level (German Pathway)
            </option>
            <option value="AUSMAT">AUSMAT</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF19">Diploma/Degree</label>
        </div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF19" name="LEADCF19">
            <option value="-None-">-None-</option>
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
            <option value="FINTECH">FINTECH</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF21">Professional Accounting Programme</label>
        </div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF21" name="LEADCF21">
            <option value="-None-">-None-</option>
            <option value="ACCA (FT)">ACCA (FT)</option>
            <option value="ACCA (PT)">ACCA (PT)</option>
            <option value="ACCA FIA">ACCA FIA</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF22">Professional Development Programme</label>
        </div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF22" name="LEADCF22">
            <option value="-None-">-None-</option>
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
              value="Teaching & Learning and Education Related Short Courses & Workshop"
            >
              Teaching & Learning and Education Related Short Courses & Workshop
            </option>
            <option value="Micro-Cred Computing & Business">
              Micro-Cred Computing & Business
            </option>
            <option value="FLY Programme">FLY Programme</option>
            <option value="AWS Academy">AWS Academy</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab"><label for="LEADCF11">Remarks</label></div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="LEADCF11"
            name="LEADCF11"
            maxlength="255"
            value="-"
          />
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab"><label for="LEADCF23">Campus</label></div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF23" name="LEADCF23">
            <option value="-None-">-None-</option>
            <option selected value="KL Campus">KL Campus</option>
            <option value="Penang Pykett Campus">Penang Pykett Campus</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF1">Lead Source.</label>
        </div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF1" name="LEADCF1">
            <option selected value="Microsite (MCKL Website)">
              Microsite (MCKL Website)
            </option>
          </select>
        </div>
      </div>

      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF24">Interested In</label>
        </div>
        <div class="zcwf_col_fld">
          <select
            class="zcwf_col_fld_slt"
            id="LEADCF24"
            name="LEADCF24"
            multiple
          >
            <option value="Personalised counselling with Senior Academicians">
              Personalised counselling with Senior Academicians
            </option>
            <option value="Scholarships">Scholarships</option>
          </select>
        </div>
      </div>
      <div class="zcwf_row zoho__d-none d-none">
        <div class="zcwf_col_lab">
          <label for="LEADCF5">Latest Academic Qualification</label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="LEADCF5"
            name="LEADCF5"
            maxlength="255"
            value=""
          />
        </div>
      </div>

      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="privacyTool4875945000004073003"
          name="privacyTool"
          autocomplete="off"
        />
        <!-- @click="disableErr4875945000004073003()" -->
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
          <!-- <input type='reset' class='btn btn-secondary' name='reset' value='Reset' title='Reset'> -->
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
          // "FLY Programme": "FLY Programme",
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
      // console.log(window, window.PROGRAMME_INTERESTED);
      if (window.PROGRAMME_INTERESTED) {
        this.programme_interested = window.PROGRAMME_INTERESTED;
      }
    });

    this.$form = $("[name='WebToLeads4875945000004073003']");

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
    debug_display_form_data() {
      var form = document.forms["WebToLeads4875945000004073003"];
      var data = new FormData(form);
      for (const [name, value] of data) {
        console.log(name, value);
      }
    },
    // this field could be varies across different microsites
    set_interested_in() {
      // MANUAL - get checkboxes
      let checkbox1 = document.querySelector('[name="check_counselling"]');
      let checkbox2 = document.querySelector('[name="check_scholarship"]');

      let custom_checkboxes = [
        checkbox1.checked ? checkbox1.value : "",
        checkbox2.checked ? checkbox2.value : "",
      ];

      // set value for "interested_in"
      const select = document.querySelector("[name='LEADCF24']");
      for (const o of select.options) {
        o.selected = custom_checkboxes.includes(o.value);
      }
    },
    set_programme_interested() {
      // get all the options to be selected
      let get_options = document.querySelectorAll(
        `#LEADCF20 option, #LEADCF19 option, #LEADCF21 option, #LEADCF22 option`
      );

      let get_user_selected_programme = document.getElementById(
        "programme_interested"
      ).value;
      console.log("get_user_selected_programme", get_user_selected_programme);

      // cross-check user-selected with zoho-options; select option
      get_options.forEach((option) => {
        if (option.value == get_user_selected_programme) {
          option.selected = true;
          return;
        }
      });
    },
    prep_zoho_value() {
      // debugs
      // console.log("prep_zoho_value");
      // this.debug_display_form_data();
      // console.log("form validate?", this.$form.valid());

      // reset fields
      this.set_interested_in();
      this.set_programme_interested();

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
