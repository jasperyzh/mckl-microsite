<template>
  <form id="gform-mckl" class="col" method="POST">
    <div id="ga-form_programme" class="form-group">
      <label for="programme_interested"
        >I am interested in <span class="text-danger">*</span></label
      >
      <select
        class="programme-picker w-100"
        multiple="multiple"
        name="programme_interested"
        id="programme_interested"
        required
      >
        <option disabled="">- Please select your preferences -</option>

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

    <div class="bg__darkgrey rounded px-3 py-4 my-4">
      <p class="mb-2"><b>I'm interested in:</b></p>
      <div id="ga-form_fly" class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="1"
          name="check_counselling"
          id="check_counselling"
        />
        <label class="form-check-label" for="check_counselling">
          Personalised counselling with Senior Academicians
        </label>
      </div>
      <div id="ga-form_scholarships" class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="1"
          name="check_scholarship"
          id="check_scholarship"
        />
        <label class="form-check-label" for="check_scholarship">
          Scholarships
        </label>
      </div>
    </div>

    <div id="ga-form_full_name" class="form-group">
      <label for="full_name"
        >Full Name <span class="text-danger">*</span></label
      >
      <input
        type="text"
        class="form-control"
        name="full_name"
        id="full_name"
        placeholder="e.g. Adam Smith"
        required
      />
    </div>

    <div id="ga-form_email" class="form-group">
      <label for="email">Email <span class="text-danger">*</span></label>
      <input
        type="email"
        class="form-control"
        name="email"
        id="email"
        placeholder="e.g. adam.smith@email.com"
        required
      />
    </div>

    <div id="ga-form_phone" class="form-group">
      <label for="mobile_phone">Phone <span class="text-danger">*</span></label>
      <input
        type="text"
        class="form-control"
        name="mobile_phone"
        id="mobile_phone"
        placeholder="e.g. 0108881234"
        required
      />
    </div>
    <div class="form-group">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck"
          name="agreement"
          required
        />
        <label class="form-check-label" for="invalidCheck">
          I have read the College's
          <a
            href="https://mckl.edu.my/personal-data-protection-notice/"
            target="_blank"
            >Personal Data Protection Notice</a
          >
          and I give consent to the College to process my personal data
          accordingly.
        </label>
        <div class="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>

    <button
      type="submit"
      class="btn btn-primary btn-primary--red"
      id="gform-mckl__submit"
    >
      Submit
    </button>
  </form>
</template>
<script>
import "jquery-validation";
import "bootstrap-select";

export default {
  created() {
    if (window.PROGRAMME_INTERESTED) {
      this.programme_interested = window.PROGRAMME_INTERESTED;
    }
  },
  mounted() {
    const DEBUG = true;

    const GSHEET_URL =
      "https://script.google.com/macros/s/AKfycbyhquZbpcdfgVBRoyUX3AkKrByty1j2u7ZoTi7NIBo8wrVQoV4oGMud4TzfCwvU0mlNgA/exec";
    const GSHEET_NAME = window.SHEET_NAME ? window.SHEET_NAME : "openday";

    // form submission
    (function ($) {
      // debugs
      if (DEBUG) {
        $('[name="programme_interested"]').val("CAL");
        $('[name="check_counselling"]').prop("checked", true);
        $('[name="check_scholarship"]').prop("checked", true);
        $('[name="full_name"]').val(`test fishermen ${window.SHEET_NAME}`);
        $('[name="email"]').val("test@email.com");
        $('[name="mobile_phone"]').val("0132221111");
        $('[name="agreement"]').prop("checked", true);
      }

      // serializeObject is not a core function of jQuery
      $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
          if (o[this.name]) {
            if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || " ");
          } else {
            o[this.name] = this.value || "";
          }
        });
        return o;
      };

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
          // return regex.test(email);
        },
        "Please enter a valid email address"
      );

      // selector & setup
      var $form = $("form#gform-mckl");

      // bootstrap-picker
      $(".programme-picker").selectpicker({
        noneSelectedText: "Please choose your programmes",
      });

      // jquery validation
      $form.validate({
        debug: DEBUG,
        rules: {
          full_name: {
            required: true,
            lettersonly: true,
            minlength: 5,
            maxlength: 120,
          },
          email: {
            required: true,
            email: true,
            emailExtraCheck: true,
          },
          mobile_phone: {
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
          full_name: {
            required: "Please enter your full name",
            lettersonly: "Please enter your name in alphabet only",
            minlength: "Your name is too short",
            maxlength: "Your name is too long",
          },
          email: "Please enter a valid email address",
          mobile_phone: {
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

      $form.submit(async function (e) {
        /* if (!$form.valid()) {
          console.log("-form not valid-");
          return;
        } */

        // disable button
        $("#gform-mckl__submit").prop("disabled", true);

        // get sanitized formdata
        let formdata = prep_form_data($form, {
          sheet_name: GSHEET_NAME,
        });

        // submit form
        let submit_status = await form_submit_gsheet(GSHEET_URL, formdata);

        if (submit_status.response.result == "success") {
          if (!DEBUG) window.location.href = "./thank-you.html";

          if (DEBUG) console.log("result", submit_status);
        } else {
          console.log("error with submission", submit_status);
        }

        /* 
        # formdata
        
        agreement: "";
        check_counselling: "1";
        check_scholarship: "1";
        email: "test@email.com";
        full_name: "test fishermen openday";
        mobile_phone: "0132221111";
        programme_interested: "CAL";
        sheet_name: "openday";
        */

        /* 
        # ZOHO_LEADS
        ## info
        Last Name
        Email
        Mobile
        State/Negeri
        Campus
        Lead Source: Microsite (MCKL Website)

        ## Programme Interested
        Pre-University 
        Diploma/Degree
        Professional Accounting Programme
        Professional Development Programme

        ## Remarks
        Intake
        Type of Scholarship
        Remarks
       */

        // enable submit button
        $("#gform-mckl__submit").prop("disabled", true);

        return false;
      });

      function prep_form_data(element, additional_data) {
        let data = element.serializeObject();

        // convert programme_interested tostring
        data.programme_interested = data.programme_interested.toString();

        return { ...data, ...additional_data };
      }

      async function form_submit_gsheet(url, params) {
        try {
          const response = await $.ajax({
            url: url,
            // type: "POST",
            dataType: "json",
            data: params,
            method: "GET",
            crossDomain: true,
          });
          return { response, params };
        } catch (error) {
          return error;
        }
      }
    })(jQuery);
  },
  computed: {
    get_programme_interested() {
      return this.programme_interested;
    },
  },
  data() {
    return {
      programme_interested: {},
    };
  },
};
</script>