
document.addEventListener('DOMContentLoaded', () => {

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
  
  })