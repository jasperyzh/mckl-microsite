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

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div
        class="col mb-3"
        v-for="(post, index) in posts"
        :key="`card-${index}`"
      >
        <div class="card border-0 h-100" :id="`card-${index}`">
          <img
            class="card-img rounded-0"
            :src="post.img_url"
            :alt="post.title"
            style="aspect-ratio: 16/10; object-fit: cover"
          />
          <div class="card-body px-1 pb-0">
            <h3 class="h5 card-title">
              {{ post.title }}
            </h3>
            <p class="card-text">
              {{ post.description }}
            </p>
          </div>
          <div class="card-footer bg-transparent border-0 px-1">
            <a
              :href="post.link"
              target="_blank"
              class="btn btn-primary"
              :data-toggle="post.modal_img ? 'modal' : ''"
              :data-target="post.modal_img ? `#card-modal-${index}` : ''"
            >
              {{ post.button_text ? post.button_text : "Read more" }}
            </a>
          </div>

          <div
            class="modal fade"
            :id="`card-modal-${index}`"
            v-if="post.modal_img"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">
                    MCKL ACCA Students’ Recent Achievements
                  </h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <img :src="post.modal_img" :alt="post.title" />
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
      </div>
    </div>
  </div>
</template>

<script>
import CardImages from "../../img/page-social/news/**.jpg";
export default {
  data() {
    return {
      posts: [
        {
          title: "Making a career from doing good",
          img_url: CardImages["news_1"],
          description: "The Star News",
          link: "",
          button_text: "View image",
          modal_img: CardImages["news_1-info"],
        },
        {
          title: "MCKL - First batch of social work students graduated",
          img_url: CardImages["news_2"],
          description: "Sin Chew News",
          link: "",
          button_text: "View image",
          modal_img: CardImages["news_2-info"],
        },
        {
          title: "First Graduating Cohort from MCKL 2021",
          img_url: CardImages["news_3"],
          description: "Graduating Picture",
          link: "",
          button_text: "View image",
          modal_img: CardImages["news_3-info"],
        },
        {
          title: "MCKL Holds Inaugural Social Work Virtual Forum 2021",
          img_url: CardImages["bernama"],
          description: "Bernama Press",
          link: "https://www.bernama.com/en/press/news.php?id=1979039",
        },
        {
          title: "MCKL holds inaugural social work virtual forum",
          img_url: CardImages["cj"],
          description: "Citizen Journal",
          link: "https://cj.my/119887/mckl-holds-inaugural-social-work-virtual-forum/",
        },
        {
          title: "Social workers: The “uncelebrated” professionals among us",
          img_url: CardImages["focus-malaysia"],
          description: "Focus Malaysia",
          link: "https://focusmalaysia.my/social-workers-the-uncelebrated-professionals-among-us/",
        },
        {
          title: "Knowledge and Skills are Essential for being a Professional Social Worker",
          img_url: CardImages["news_7"],
          description: "Sin Chew News",
          link: "",
          button_text: "View image",
          modal_img: CardImages["news_7-info"],
        },
        {
          title: "Social Work Can Be A Profession And Not Just A Side Gig",
          img_url: CardImages["news_8"],
          description: "Wiki Impact",
          link: "https://www.wikiimpact.com/social-work-can-be-a-profession-and-not-just-a-side-gig/",
        },
        {
          title: "Social Work High Tea Event",
          img_url: CardImages["news-socialworkteaevent"],
          description: "",
          link: "https://mckl.edu.my/2022/03/25/mckl-social-work-high-tea/",
        },
      ],
    };
  },
};
</script>