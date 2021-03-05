import jQuery from "jquery";
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";

import { tns } from "tiny-slider/src/tiny-slider";

//eventtracking
let trackElements = [
  {
    "ga-about_mckl": { event_category: "menu bar", event_label: "about_mckl" },
  },
  {
    "ga-scholarships": { event_category: "menu bar", event_label: "scholarships" },
  },
  {
    "ga-programmes": { event_category: "menu bar", event_label: "programmes" },
  },
  {
    "ga-enquire_today": { event_category: "menu bar", event_label: "enquire_today" },
  },
  {
    "ga-scholarships_enquire": { event_category: "scholarships", event_label: "scholarships_enquire" },
  },
  {
    "ga-fly_enquire": { event_category: "fly programme'", event_label: "fly_enquire" },
  },
  {
    "ga-pre_u": { event_category: "programmes", event_label: "pre_u" },
  },
  {
    "ga-diploma_degree": { event_category: "programmes", event_label: "diploma_degree" },
  },
  {
    "ga-prof_accounting": { event_category: "programmes", event_label: "prof_accounting" },
  },
  {
    "ga-prof_development": { event_category: "programmes", event_label: "prof_development" },
  },
  {
    "ga-form_programme": { event_category: "registration", event_label: "programme" },
  },
  {
    "ga-form_scholarships": { event_category: "registration", event_label: "scholarships" },
  },
  {
    "ga-form_fly": { event_category: "registration", event_label: "fly" },
  },
  {
    "ga-form_full_name": { event_category: "registration", event_label: "full_name" },
  },
  {
    "ga-form_email": { event_category: "registration", event_label: "email" },
  },
  {
    "ga-form_phone": { event_category: "registration", event_label: "phone" },
  },
  {
    "gform-mckl__submit": { event_category: "registration", event_label: "submit" },
  },
];

trackElements.forEach(item => {
  // console.log(Object.keys(item));
  document.getElementById(Object.keys(item)).addEventListener("click", () => {
    // console.log(item[Object.keys(item)]);
    gtag("event", "click", item[Object.keys(item)]);
  });
});

// testimonials
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

// form submission
(function($) {
  // serializeObject is not a core function of jQuery
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
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
    function(value, element) {
      return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
    },
    "Letters only please"
  );
  $.validator.addMethod(
    "emailExtraCheck",
    function(value, element) {
      return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
      // return regex.test(email);
    },
    "Please enter a valid email address"
  );

  // form selector
  var $form = $("form#gform-mckl");
  console.log("found form#gform-mckl", $form);

  // url of gsheet webapp
  var gsheet_url = "https://script.google.com/macros/s/AKfycbzG2CYHo-hUb1otF6KIW9rRyaAHap7qo3We8tOJ2QBiYFzK38aD/exec";

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

    /*  submitHandler: function (form) {
           $("#gform-mckl__submit").prop('disabled', true);
           // form.submit();
       } */
  });

  $form.submit(function(e) {
    if (!$form.valid()) {
      console.log("form not valid !!");
      return;
    }
    // check valid

    // get sanitized formdata
    let formdata = get_form_data($form);

    // submit form
    // console.log('submit form!!')
    form_submit_to_google_sheet(formdata, gsheet_url);

    // go to thank you page
    return false;
  });

  // func - get sanitized formdata
  function get_form_data(element) {
    var data = element.serializeObject();
    data.programme_interested = data.programme_interested.toString();
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
      beforeSend: function() {
        $("#gform-mckl__submit").prop("disabled", true);
        // console.log('beforesend: sending')
      },
      success: function(xhr, status, error) {
        console.log(xhr, status, error);

        window.location.href = "./thank-you.html";
        /*   document.body.insertAdjacentHTML('afterbegin', `
<aside id="submit-warning" class="position-fixed d-flex w-100 justify-content-center" style="top: 1rem; z-index: 100">
<div class="alert alert-success col-12" role="alert">
  A simple success alert—check it out!
</div>
</aside>
`);

setTimeout(function () {
$('#submit-warning').remove();
}, 12000);
*/
      },
      error: function(xhr, status, error) {
        console.log(xhr, status, error);
        $("#gform-mckl__submit").prop("disabled", false);
      },
    });
  }

  // bootstrap modal
  /* $(document).ready(function() {
    $("#iframe-btn").on("hide.bs.modal", function() {
      $("#iframe-video").attr("src", "");
    });
  });

  const iframe_btns = document.querySelectorAll(".btn-watch-video");
  iframe_btns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      let videoId = e.target.dataset.video;
      $("#iframe-btn").on("show.bs.modal", function() {
        $("#iframe-video").attr("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      });
    });
  }); */
})(jQuery);
