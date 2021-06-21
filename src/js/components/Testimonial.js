import { tns } from "tiny-slider/src/tiny-slider";


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