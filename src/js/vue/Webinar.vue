<template>
  <section id="forum" class="forum my-5">
    <div class="container">
      <!-- head -->
      <head class="row justify-content-center">
        <div class="col-md-10 text-center">
          <h2 class="text-white" style="color: #033676 !important">
            Modern Education for the Changing Times
          </h2>
          <p>Catch this informative Webinar now</p>
        </div>
      </head>

      <nav class="row justify-content-center mb-5">
        <ul class="nav nav-pills nav-fill" id="myTab" role="tablist">
          <li class="nav-item" style="margin-left: auto">
            <a
              class="nav-link active"
              id="day1-tab"
              data-toggle="tab"
              href="#day1"
              role="tab"
              aria-controls="day1"
              aria-selected="true"
              >26 June 2021 (Sat)</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="day2-tab"
              data-toggle="tab"
              href="#day2"
              role="tab"
              aria-controls="day2"
              aria-selected="false"
              >3 July 2021 (Sat)</a
            >
          </li>
        </ul>
      </nav>

      <main class="row justify-content-center mb-4 tab-content">
        <article
          class="col-12 col-lg-10 tab-pane fade show active"
          id="day1"
          role="tabpanel"
          aria-labelledby="day1-tab"
        >
          <div
            class="session"
            v-for="(item, index) in day1"
            :key="`day1-${index}`"
          >
            <p class="time">{{ item.time }}</p>
            <div class="detail">
              <h3 v-if="item.title">{{ item.title }}</h3>
              <p v-if="item.desc">{{ item.desc }}</p>

              <ul class="speaker">
                <li class="name" v-if="item.speaker">{{ item.speaker }}</li>
                <li class="position" v-if="item.position">
                  {{ item.position }}
                </li>
              </ul>
            </div>
          </div>

          <section class="container">
            <div class="row justify-content-center my-4">
              <h2 class="mb-4">Meet the Speakers</h2>
            </div>
            <div
              class="
                row row-cols-2 row-cols-md-3
                justify-content-center
                text-center
              "
            >
              <div
                class="col mb-3"
                v-for="(person, index) in speakers1"
                :key="`person-${index}`"
              >
                <figure>
                  <img
                    width="180"
                    height="180"
                    :src="person.avatar"
                    class="rounded-circle"
                    alt="..."
                  />
                </figure>
                <h5 class="mb-1">{{ person.name }}</h5>
                <p class="text-muted">
                  {{ person.position }}
                </p>
              </div>
            </div>
          </section>
        </article>

        <article
          class="col-12 col-lg-10 tab-pane fade"
          id="day2"
          role="tabpanel"
          aria-labelledby="day2-tab"
        >
          <div
            class="session"
            v-for="(item, index) in day2"
            :key="`day2-${index}`"
          >
            <p class="time">{{ item.time }}</p>
            <div class="detail">
              <h3 v-if="item.title">{{ item.title }}</h3>
              <p v-if="item.desc">{{ item.desc }}</p>

              <ul class="speaker">
                <li class="name" v-if="item.speaker">{{ item.speaker }}</li>
                <li class="position" v-if="item.position">
                  {{ item.position }}
                </li>
              </ul>
            </div>
          </div>

          <section class="container">
            <div class="row justify-content-center my-4">
              <h2 class="mb-4">Meet the Speakers</h2>
            </div>
            <div
              class="
                row row-cols-2 row-cols-md-3
                justify-content-center
                text-center
              "
            >
              <div
                class="col mb-3"
                v-for="(person, index) in speakers2"
                :key="`person-${index}`"
              >
                <figure>
                  <img
                    width="180"
                    height="180"
                    :src="person.avatar"
                    class="rounded-circle"
                    alt="..."
                  />
                </figure>
                <h5 class="mb-1">{{ person.name }}</h5>
                <p class="text-muted">
                  {{ person.position }}
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  </section>
</template>

<script>
import Speaker1 from "../../img/speakers/colin_wong.jpg";
import Speaker2 from "../../img/speakers/low_chin_ann.jpg";
import Speaker3 from "../../img/speakers/yap_haw_sim.jpg";
import Speaker4 from "../../img/speakers/bryan_leong.jpg";
import Speaker5 from "../../img/speakers/ling_wen_hoong.jpg";
import Speaker6 from "../../img/speakers/samantha_nelly_ghouse.jpg";

import Speaker_adrian_yao from "../../img/speakers/adrian_yao.jpg";
import Speaker_jolyn from "../../img/speakers/jolyn.jpg";
import Speaker_wong_poh_swan from "../../img/speakers/wong_poh_swan.jpg";

export default {
  data() {
    return {
      day1: [
        {
          time: "10:30am – 10:35am",
          title: "",
          desc: "Welcome Address",
          speaker: "Ms Samantha Ghouse",
          position: "Admission & Enrolment, Programme Specialist",
        },
        {
          time: "10:35am – 11:10am",
          title: "Saving Taxes",
          desc: "Taxations remains at the core of accountancy. Equip yourself with the right knowledge to explore wide career opportunities.",
          speaker: "Mr Low Chin Ann",
          position: "Course Advisor, ACCA",
        },
        {
          time: "11:10am – 11:50am",
          title:
            "Holistic US Education: Advantages and Scholarship Opportunities",
          desc: "The US remains home to the most diverse programmes with an abundance of Scholarships - Start with MCKL's ADTP programme.",
          speaker: "Bryan Leong Ji Yang & Ling Wen Hoong",
          position: "MCKL ADTP Alumni",
        },
        {
          time: "11:50am – 12:25pm",
          title: "Future Proof with Business & Computing Studies",
          desc: "Advance education and global industry partnerships to equip students with in-demand skills for the IR4.0 era.",
          speaker: "Mr Yap Haw Sim",
          position: "Deputy Academic Director (Future Education)",
        },
        {
          time: "12:25pm – 1:00pm",
          title: "Up to 100% Scholarship and Tuition Fee Waiver!",
          desc: "50% tuition fee waiver, and 100% MCKL Industry Partner Joint Scholarship when registering for a wide range of MCKL diploma programmes.",
          speaker: "Mr Colin Wong",
          position: "Scholarship Advisor, Office of the Registrar",
        },
        {
          time: "1:00pm – 1:05pm",
          title: "",
          desc: "Closing Remarks",
          speaker: "Ms Samantha Ghouse",
          position: "Admission & Enrolment, Programme Specialist",
        },
      ],

      day2: [
        {
          time: "10:30am – 10:35am",
          title: "",
          desc: "Welcome Address",
          speaker: "Ms Samantha Ghouse",
          position: "Admission & Enrolment, Programme Specialist",
        },
        {
          time: "10:35am – 11:10am",
          title: "A.C.E with Pre-U @ MCKL",
          desc: "MCKL continues to be the leading choice in Pre-U programmes, paving the way for students to Top Universities across the globe.",
          speaker: "Mr Adrian Yao",
          position:
            "Academic Director, External Programmes and Head, Teaching & Learning",
        },
        {
          time: "11:10am – 11:45am",
          title: "Up to 100% Scholarship and Tuition Fee Waiver!",
          desc: "50% tuition fee waiver, and 100% MCKL Industry Partner Joint Scholarship when registering for a wide range of MCKL diploma programmes.",
          speaker: "Mr Colin Wong",
          position: "Scholarship Advisor, Office of the Registrar",
        },
        {
          time: "11:45am – 12:20pm",
          title: "Rewarding Career Opportunities as a Qualified Social Worker",
          desc: "Grab these rewarding opportunities by being a qualified social worker now with MCKL.",
          speaker: "Ms Jolyn Hong",
          position: "Head of Department, Diploma in Social Work",
        },
        {
          time: "12:20pm – 12:55pm",
          title:
            "Early Childhood Education: The in-demand career for 21st century learners",
          desc: "MCKL's proven track record and global network gives learners the edge in this profession with in-demand skills.",
          speaker: "Ms Wong Poh Swan",
          position: "Assistant, Early Childhood Education",
        },
        {
          time: "12:55pm – 1:00pm",
          title: "",
          desc: "Closing Remarks",
          speaker: "Ms Samantha Ghouse",
          position: "Admission & Enrolment, Programme Specialist",
        },
      ],
      speakers1: [
        {
          avatar: Speaker2,
          name: "Mr Low Chin Ann",
          position: "Course Advisor, ACCA",
        },
        {
          avatar: Speaker4,
          name: "Bryan Leong Ji Yang",
          position: "MCKL ADTP Alumni",
        },
        {
          avatar: Speaker5,
          name: "Ling Wen Hoong",
          position: "MCKL ADTP Alumni",
        },
        {
          avatar: Speaker3,
          name: "Mr Yap Haw Sim",
          position: "Deputy Academic Director (Future Education)",
        },
        {
          avatar: Speaker1,
          name: "Mr Colin Wong",
          position: "Scholarship Advisor, Office of the Registrar",
        },
        {
          avatar: Speaker6,
          name: "Ms Samantha Ghouse",
          position: "Admission & Enrolment, Programme Specialist",
        },
      ],
      speakers2: [
        {
          avatar: Speaker_adrian_yao,
          name: "Mr Adrian Yao",
          position:
            "Academic Director, External Programmes and Head, Teaching & Learning",
        },
        {
          avatar: Speaker1,
          name: "Mr Colin Wong",
          position: "Scholarship Advisor, Office of the Registrar",
        },
        {
          avatar: Speaker_jolyn,
          name: "Mr Jolyn Hong",
          position: "Head of Department, Diploma in Social Work",
        },
        {
          avatar: Speaker_wong_poh_swan,
          name: "Ms Wong Poh Swan",
          position: "Assistant Head, Early Childhood Education",
        },
        {
          avatar: Speaker6,
          name: "Ms Samantha Ghouse",
          position: "Admission & Enrolment, Programme Specialist",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../../scss/abstracts" as *;
@use "bootstrap/scss/bootstrap" as *;

.nav-pills .nav-link,
.nav-pills .show > .nav-link {
  padding: 10px 38px !important;
  margin: 1rem;
  border: 3px solid $color-blue;
  border-radius: 0;
  color: $color-blue;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: $color-blue;
  color: #fff;
}

// forum
.session {
  display: flex;
  flex-direction: column;

  @include media-breakpoint-up(sm) {
    flex-direction: row;
  }

  .time {
    font-weight: bold;
    margin-bottom: 0.25rem;
    width: 41%;

    @include media-breakpoint-up(sm) {
      margin-right: 1rem;
    }
  }
  .detail {
    width: 100%;
    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
    p {
      font-size: 0.8825rem;
    }
  }

  ul.speaker {
    padding-left: 1rem;
    li {
      font-size: 0.8rem;
      max-width: 80%;
      margin-left: auto;
      list-style: outside;
      margin-left: unset;
    }
    .name {
      font-weight: bold;
    }
    .position {
      list-style: none;
      font-style: italic;
    }
  }
}
</style>
