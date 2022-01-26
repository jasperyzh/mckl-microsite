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
          v-for="(group, group_id) in programme_interested"
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
    // form submission
    (function ($) {
      const DEBUG = false;
      if (DEBUG) {
        $('[name="programme_interested"]').val("CAL");
        $('[name="check_counselling"]').prop("checked", true);
        $('[name="check_scholarship"]').prop("checked", true);
        $('[name="full_name"]').val(`test fishermen ${window.SHEET_NAME}`);
        $('[name="email"]').val("test@email.com");
        $('[name="mobile_phone"]').val("0132221111");
        $('[name="agreement"]').prop("checked", true);
        /*         let formItems = {
          fullname: $("#fullname").val(),
          dob: $("#dob").val(),
          age: $("#age").val(),
          height: $("#height").val(),
          weight: $("#weight").val(),
          chest: $("#chest").val(),
          hip: $("#hip").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
          phone: $("#address").val(),
        };
        console.log(formItems); */
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

      // form selector
      var $form = $("form#gform-mckl");

      // url of gsheet webapp
      var gsheet_url =
        "https://script.google.com/macros/s/AKfycbyhquZbpcdfgVBRoyUX3AkKrByty1j2u7ZoTi7NIBo8wrVQoV4oGMud4TzfCwvU0mlNgA/exec";

      // jquery validation
      $form.validate({
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
        // debug: true,

        // submitHandler: function (form) {
        //   form.preventDefault();
        //   console.log("test submit");
        //   //  $("#gform-mckl__submit").prop('disabled', true);

        //   return false;
        //   // form.submit();
        // },
      });

      $form.submit(function (e) {
        if (!$form.valid()) {
          console.log("form not valid !!");
          return;
        }
        // check valid

        // get sanitized formdata
        let formdata = get_form_data($form);
        console.log(formdata);

        // submit form
        form_submit_to_google_sheet(formdata, gsheet_url);

        // go to thank you page
        return false;
      });

      // func - get sanitized formdata
      function get_form_data(element) {
        var data = element.serializeObject();
        data.programme_interested = data.programme_interested.toString();
        // gsheet - https://docs.google.com/spreadsheets/d/1RTfHGUgFTJ1ut3GAfeNXCTP3o6nNXFF_ITNACk4qH4M/edit#gid=0
        // data.sheet_name = "openday";
        data.sheet_name = window.SHEET_NAME ? window.SHEET_NAME : "openday";

        console.log(data);
        return data;
      }

      // func - ajax for form submission
      function form_submit_to_google_sheet(data, url) {
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          crossDomain: true,
          data: data,
          beforeSend: function () {
            $("#gform-mckl__submit").prop("disabled", true);
            // console.log('beforesend: sending')
          },
          success: function (xhr, status, error) {
            console.log(xhr, status, error);

            window.location.href = "./thank-you.html";
          },
          error: function (xhr, status, error) {
            console.log(xhr, status, error);
            $("#gform-mckl__submit").prop("disabled", false);
          },
        });
      }

      // bootstrap-picker
      $(".programme-picker").selectpicker({
        noneSelectedText: "Please choose your programmes",
      });
    })(jQuery);
  },
  data() {
    return {
      programme_interested: {
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
          CICTL:
            "Cambridge International Certificate in Teaching &amp; Learning",
          CIDTL: "Cambridge International Diploma in Teaching &amp; Learning",
          ICD: "International Certification of Digital Literacy",
          MCECE: "Micro-Credentials in Early Childhood Education",
          MCSW: "Micro-Credentials in Social Work",
          MCCS: "Micro-credentials in Computer Science",
          MCIT: "Micro-credentials in Information Technology",
          MCEC: "Micro-credentials in E-Commerce",
          MCDM: "Micro-credentials in Digital Marketing",
          EMLPE: "Educational Management and Leadership for Private Education",
          TLERSCW:
            "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop",
        },
      },
    };
  },
};
</script>