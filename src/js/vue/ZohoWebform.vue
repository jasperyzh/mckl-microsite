<template>
  <section id="custom-zoho-webform">
    <!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
    <div
      id="crmWebToEntityForm"
      class="zcwf_lblLeft crmWebToEntityForm"
      style="background-color: white; color: black; max-width: 600px"
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'> -->
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads4875945000004073003"
        method="POST"
        @submit="onSubmit"
        accept-charset="UTF-8"
      >
        <!-- onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4875945000004073003()' -->
        <input
          type="text"
          style="display: none"
          name="xnQsjsdp"
          value="4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          style="display: none"
          name="xmIwtLD"
          value="3df8513a44e8ee0dc6e36209ffd3db2439ef2cc150b37c8431e58c9fcba68bbe"
        />
        <input
          type="text"
          style="display: none"
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          style="display: none"
          name="returnURL"
          value="https&#x3a;&#x2f;&#x2f;mckl.edu.my"
        />
        <!-- Do not remove this code. -->
        <div class="zcwf_title" style="max-width: 600px; color: black">
          mckl-microsite
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="Last_Name"
              >Last Name<span style="color: red">*</span></label
            >
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Last_Name" name="Last Name" maxlength="80" />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="Email">Email</label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              ftype="email"
              id="Email"
              name="Email"
              maxlength="100"
            />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="Mobile">Mobile</label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Mobile" name="Mobile" maxlength="30" />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF20">Pre-University</label>
          </div>
          <div class="zcwf_col_fld">
            <select class="zcwf_col_fld_slt" id="LEADCF20" name="LEADCF20">
              <option value="-None-">-None-</option>
              <option selected value="Cambridge&#x20;A&#x20;Level">
                Cambridge A Level
              </option>
              <option
                value="Cambridge&#x20;A&#x20;Level&#x20;&#x28;German&#x20;Pathway&#x29;"
              >
                Cambridge A Level &#x28;German Pathway&#x29;
              </option>
              <option value="AUSMAT">AUSMAT</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF19">Diploma&#x2f;Degree</label>
          </div>
          <div class="zcwf_col_fld">
            <select class="zcwf_col_fld_slt" id="LEADCF19" name="LEADCF19">
              <option value="-None-">-None-</option>
              <option selected value="ADTP">ADTP</option>
              <option value="DECE&#x20;&#x28;PT&#x29;">
                DECE &#x28;PT&#x29;
              </option>
              <option value="DECE&#x20;&#x28;FT&#x29;">
                DECE &#x28;FT&#x29;
              </option>
              <option value="DSW&#x20;&#x28;PT&#x29;">
                DSW &#x28;PT&#x29;
              </option>
              <option value="DSW&#x20;&#x28;FT&#x29;">
                DSW &#x28;FT&#x29;
              </option>
              <option value="DIFT">DIFT</option>
              <option value="DIT">DIT</option>
              <option value="DCS">DCS</option>
              <option value="DEC">DEC</option>
              <option value="DDM">DDM</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF21">Professional Accounting Programme</label>
          </div>
          <div class="zcwf_col_fld">
            <select class="zcwf_col_fld_slt" id="LEADCF21" name="LEADCF21">
              <option value="-None-">-None-</option>
              <option selected value="ACCA&#x20;&#x28;FT&#x29;">
                ACCA &#x28;FT&#x29;
              </option>
              <option value="ACCA&#x20;&#x28;PT&#x29;">
                ACCA &#x28;PT&#x29;
              </option>
              <option value="ACCA&#x20;FIA">ACCA FIA</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF22">Professional Development Programme</label>
          </div>
          <div class="zcwf_col_fld">
            <select class="zcwf_col_fld_slt" id="LEADCF22" name="LEADCF22">
              <option value="-None-">-None-</option>
              <option value="CICTL">CICTL</option>
              <option value="CIDTL">CIDTL</option>
              <option
                value="Micro-Credentials&#x20;in&#x20;Computing&#x20;&amp;&#x20;Business"
              >
                Micro-Credentials in Computing &amp; Business
              </option>
              <option value="Micro-Credentials&#x20;in&#x20;Social&#x20;Work">
                Micro-Credentials in Social Work
              </option>
              <option
                value="Micro-Credentials&#x20;in&#x20;Early&#x20;Childhood&#x20;Education"
              >
                Micro-Credentials in Early Childhood Education
              </option>
              <option selected value="FLY&#x20;Programme">FLY Programme</option>
              <option value="AWS&#x20;Academy">AWS Academy</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF11">Remarks</label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="LEADCF11"
              name="LEADCF11"
              maxlength="255"
              value="-"
            />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF23">Campus</label>
          </div>
          <div class="zcwf_col_fld">
            <select class="zcwf_col_fld_slt" id="LEADCF23" name="LEADCF23">
              <option value="-None-">-None-</option>
              <option selected value="KL&#x20;Campus">KL Campus</option>
              <option value="Penang&#x20;Pykett&#x20;Campus">
                Penang Pykett Campus
              </option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn">
          <div class="zcwf_col_lab" style="font-size: 12px; font-family: Arial">
            <label for="LEADCF1">Lead Source.</label>
          </div>
          <div class="zcwf_col_fld">
            <select class="zcwf_col_fld_slt" id="LEADCF1" name="LEADCF1">
              <option value="-None-">-None-</option>
              <option value="Walk-in">Walk-in</option>
              <option value="Call">Call</option>
              <option value="Email">Email</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Social&#x20;media&#x20;&#x28;FB&#x29;">
                Social media &#x28;FB&#x29;
              </option>
              <option
                selected
                value="Microsite&#x20;&#x28;MCKL&#x20;Website&#x29;"
              >
                Microsite &#x28;MCKL Website&#x29;
              </option>
              <option
                value="Recruitment&#x20;Campaigns&#x20;&#x28;Open&#x20;Day&#x2f;High&#x20;Tea&#x29;&#x29;"
              >
                Recruitment Campaigns &#x28;Open Day&#x2f;High Tea&#x29;&#x29;
              </option>
              <option
                value="School&#x20;Events&#x20;&#x28;Talks,&#x20;Workshops,&#x20;Fair&#x29;"
              >
                School Events &#x28;Talks, Workshops, Fair&#x29;
              </option>
              <option value="Public&#x20;Fair&#x2f;Roadshow">
                Public Fair&#x2f;Roadshow
              </option>
              <option
                value="Third&#x20;Party&#x20;Platforms&#x20;&#x28;Agents..etc&#x29;"
              >
                Third Party Platforms &#x28;Agents..etc&#x29;
              </option>
              <option value="Udemy">Udemy</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_privacy">
            <div class="dIB vat" align="left">
              <div class="displayPurpose f13">
                <label class="newCustomchkbox-md dIB w100per"
                  ><input
                    autocomplete="off"
                    id="privacyTool4875945000004073003"
                    type="checkbox"
                    name="privacyTool"
                    @click="disableErr4875945000004073003()"
                /></label>
              </div>
            </div>
            <div
              class="dIB zcwf_privacy_txt"
              style="font-size: 12px; font-family: Arial; color: black"
            >
              <span
                style="
                  color: rgb(33, 37, 41);
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                  background-color: rgb(255, 255, 255);
                "
                >I have read the College's&nbsp;</span
              ><a
                href="https://mckl.edu.my/personal-data-protection-notice/"
                target="_blank"
                style="
                  box-sizing: border-box;
                  color: rgb(3, 54, 118);
                  text-decoration-line: none;
                  background-color: rgb(255, 255, 255);
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
                >Personal Data Protection Notice</a
              ><span
                style="
                  color: rgb(33, 37, 41);
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                  background-color: rgb(255, 255, 255);
                "
                >&nbsp;and I give consent to the College to process my personal
                data accordingly.</span
              >
            </div>
            <div
              id="privacyErr4875945000004073003"
              style="
                font-size: 12px;
                color: red;
                padding-left: 5px;
                visibility: hidden;
              "
            >
              Please accept this
            </div>
          </div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"></div>
          <div class="zcwf_col_fld">
            <input
              type="submit"
              id="formsubmit"
              class="formsubmit zcwf_button"
              value="Submit"
              title="Submit"
            /><input
              type="reset"
              class="zcwf_button"
              name="reset"
              value="Reset"
              title="Reset"
            />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    onSubmit() {
      return this.checkMandatory4875945000004073003();
    },
    disableErr4875945000004073003() {
      var privacyTool = document.getElementById(
        "privacyTool4875945000004073003"
      );
      var privacyErr = document.getElementById("privacyErr4875945000004073003");
      if (
        privacyTool != undefined &&
        privacyTool.checked &&
        privacyErr != undefined
      ) {
        privacyErr.style.visibility = "hidden";
      }
    },
    checkMandatory4875945000004073003() {
      var mndFileds = new Array("Last Name");
      var fldLangVal = new Array("Last\x20Name");
      for (let i = 0; i < mndFileds.length; i++) {
        var fieldObj =
          document.forms["WebToLeads4875945000004073003"][mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
            if (fieldObj.type == "file") {
              alert("Please select a file to upload.");
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + " cannot be empty.");
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName == "SELECT") {
            if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
              alert(fldLangVal[i] + " cannot be none.");
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type == "checkbox") {
            if (fieldObj.checked == false) {
              alert("Please accept  " + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
          try {
            if (fieldObj.name == "Last Name") {
              name = fieldObj.value;
            }
          } catch (e) {}
        }
      }
      if (!this.validateEmail4875945000004073003()) {
        return false;
      }

      if (!this.privacyAlert4875945000004073003()) {
        return false;
      }
      document
        .querySelector(".crmWebToEntityForm .formsubmit")
        .setAttribute("disabled", true);
    },
    validateEmail4875945000004073003() {
      var form = document.forms["WebToLeads4875945000004073003"];
      var emailFld = form.querySelectorAll("[ftype=email]");
      var i;
      for (i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value;
        if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
          var atpos = emailVal.indexOf("@");
          var dotpos = emailVal.lastIndexOf(".");
          if (
            atpos < 1 ||
            dotpos < atpos + 2 ||
            dotpos + 2 >= emailVal.length
          ) {
            alert("Please enter a valid email address. ");
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    },
    privacyAlert4875945000004073003() {
      var privacyTool = document.getElementById(
        "privacyTool4875945000004073003"
      );
      var privacyErr = document.getElementById("privacyErr4875945000004073003");
      if (privacyTool != undefined && !privacyTool.checked) {
        privacyErr.style.visibility = "visible";
        privacyTool.focus();
        return false;
      }
      return true;
    },
  },
  mounted() {
    /* function privacyAlert4875945000004073003() {
      var privacyTool = document.getElementById(
        "privacyTool4875945000004073003"
      );
      var privacyErr = document.getElementById("privacyErr4875945000004073003");
      if (privacyTool != undefined && !privacyTool.checked) {
        privacyErr.style.visibility = "visible";
        privacyTool.focus();
        return false;
      }
      return true;
    } */
    /* function disableErr4875945000004073003() {
      var privacyTool = document.getElementById(
        "privacyTool4875945000004073003"
      );
      var privacyErr = document.getElementById("privacyErr4875945000004073003");
      if (
        privacyTool != undefined &&
        privacyTool.checked &&
        privacyErr != undefined
      ) {
        privacyErr.style.visibility = "hidden";
      }
    } */
    /* function validateEmail4875945000004073003() {
      var form = document.forms["WebToLeads4875945000004073003"];
      var emailFld = form.querySelectorAll("[ftype=email]");
      var i;
      for (i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value;
        if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
          var atpos = emailVal.indexOf("@");
          var dotpos = emailVal.lastIndexOf(".");
          if (
            atpos < 1 ||
            dotpos < atpos + 2 ||
            dotpos + 2 >= emailVal.length
          ) {
            alert("Please enter a valid email address. ");
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    } */

    /* function checkMandatory4875945000004073003() {
      var mndFileds = new Array("Last Name");
      var fldLangVal = new Array("Last\x20Name");
      for (i = 0; i < mndFileds.length; i++) {
        var fieldObj =
          document.forms["WebToLeads4875945000004073003"][mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
            if (fieldObj.type == "file") {
              alert("Please select a file to upload.");
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + " cannot be empty.");
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName == "SELECT") {
            if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
              alert(fldLangVal[i] + " cannot be none.");
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type == "checkbox") {
            if (fieldObj.checked == false) {
              alert("Please accept  " + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
          try {
            if (fieldObj.name == "Last Name") {
              name = fieldObj.value;
            }
          } catch (e) {}
        }
      }
      if (!validateEmail4875945000004073003()) {
        return false;
      }

      if (!privacyAlert4875945000004073003()) {
        return false;
      }
      document
        .querySelector(".crmWebToEntityForm .formsubmit")
        .setAttribute("disabled", true);
    } */

    function tooltipShow4875945000004073003(el) {
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay == "none") {
        var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
        for (i = 0; i < allTooltip.length; i++) {
          allTooltip[i].style.display = "none";
        }
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    }
  },
};
</script>
