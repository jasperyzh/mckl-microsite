// library
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;
import "@babel/polyfill";
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";

// scroll
// Remember to include the smooth scroll polyfill:
// (https://github.com/iamdustan/smoothscroll)
if (document.querySelector('nav ul li a')) {

    const navLinks = document.querySelectorAll(
        'nav ul li a'
    );
    Array.from(navLinks).forEach(navLink => {
        const href = navLink.getAttribute('href');
        const section = document.querySelector(href);
        const offset = 50 + 20; // nav and offset

        navLink.onclick = e => {
            // get body position
            const bodyRect = document.body.getBoundingClientRect().top;
            // get section position relative
            const sectionRect = section.getBoundingClientRect().top;
            // subtract the section from body
            const sectionPosition = sectionRect - bodyRect;
            // subtract offset
            const offsetPosition = sectionPosition - offset;

            e.preventDefault();
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    })
}

// scroll-to-top
/* document.querySelector('#top').onclick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
} */

// testimonial
import { tns } from "tiny-slider/src/tiny-slider";
if (document.getElementById("tns_testimonial")) {
    tns({
        container: "#tns_testimonial",
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
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        // mouseDrag: true,
    });
}

// thank-you message
const URL = window.location.href;
if (URL.includes("thank-you")) {
    const section_thank_you = document.getElementById("thank-you");
    section_thank_you.classList.remove("d-none");
}
