<template>
  <div class="container">
    <div class="row pt-3 pb-3 justify-content-center">
      <div
        class="
          col-md-8
          text-center text-md-center
          align-items-center
          order-2 order-md-1
        "
      >
        <div class="scholarships__intro">
          <h2>News & Highlights</h2>
        </div>
      </div>
    </div>

    <div class="card-deck justify-content-center">
      <div class="card border-0" style="max-width: 20rem">
        <img
          class="card-img rounded-0"
          src="../../img/page-acca/news1.jpg"
          alt="Card image cap"
        />
        <div class="card-body px-1 pb-0">
          <h3 class="h5 card-title">
            A Partnership to Empower Future Accountants
          </h3>
          <p class="card-text">
            Yayasan Jasa Ann Joo partners with MCKL to support Malaysian
            accountants.
          </p>
        </div>
        <div class="card-footer bg-transparent border-0 px-1">
          <a
            href="https://mckl.edu.my/2022/02/11/a-partnership-to-empower-future-accountants/"
            target="_blank"
            class="btn btn-primary"
            >Read more</a
          >
        </div>
      </div>

      <div class="card border-0" style="max-width: 20rem">
        <img
          class="card-img rounded-0"
          src="../../img/page-acca/20220321 ACCA press img-02.jpg"
          alt="Card image cap"
        />
        <div class="card-body px-1 pb-0">
          <h3 class="h5 card-title">MCKL ACCA Students’ Recent Achievements</h3>
          <p class="card-text">
            Congratulations to our students on their achievements!
          </p>
        </div>
        <div class="card-footer bg-transparent border-0 px-1">
          <a
            href="https://bernama.com/en/press/news.php?id=2064303"
            target="_blank"
            class="btn btn-primary"
            >Read more</a
          >
          <!-- data-toggle="modal"
            data-target="#news-3" -->
        </div>
      </div>
    </div>

    <div class="modal fade" id="news-3">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">MCKL ACCA Students’ Recent Achievements</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <!-- <img src="../../img/page-social/news_3-info.jpg" alt="" /> -->
            <!-- carousel start -->
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../../img/page-acca/20220127-ACCA_Ganapathi_FINAL.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../img/page-acca/20220127-ACCA_Ang Guo Weng_FINAL.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev bg-transparent border-0"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="prev"
              >
                <span
                  style="filter: drop-shadow(2px 2px 4px black)"
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="carousel-control-next bg-transparent border-0"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="next"
              >
                <span
                  style="filter: drop-shadow(2px 2px 4px black)"
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </button>
            </div>
            <!-- carousel end -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>