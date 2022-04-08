<template>
  <!-- Modal -->
  <div
    class="
      modal modal__floatpop
      fade
    "
    id="floatpop"
    tabindex="-1"
    aria-labelledby="floatpopLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-sm modal-dialog-centered justify-content-end align-items-end mr-0">
      <div class="modal-content">
        <div class="modal-header p-0 border-0">
          <button
            type="button"
            class="close close--white floatpop__shadow"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-0 border-0">
          <figure class="text-center">
            <a href="https://mckl.edu.my/open-day" target="_blank">
              <img
                class="floatpop__shadow"
                width="280"
                src="../../img/promobanners/OD_masthead.svg"
                alt=""
              />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log('hello')

    document.addEventListener("DOMContentLoaded", () => {
      $("#floatpop").modal({
        show: true,
        backdrop: false,
        focus: false,
        // backdrop: 'static',
      });
    });
  },
};
</script>