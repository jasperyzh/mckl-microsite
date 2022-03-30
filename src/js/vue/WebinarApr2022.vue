<template>
  <div class="container">
    <div class="row text-center">
      <div class="col">
        <h2>Launch to Endless Possibilities with MCKL</h2>
        <p>Catch these informative webinar now!</p>
      </div>
    </div>

    <nav class="row justify-content-center mb-4">
      <ul class="nav nav-pills nav-fill" role="tablist">
        <li class="nav-item" v-for="(btn, index) in webinar" :key="btn.id">
          <a
            :class="`nav-link ${index <= 0 ? 'active' : ''}`"
            :id="`${btn.id}-tab`"
            data-toggle="tab"
            :href="`#${btn.id}`"
            role="tab"
            :aria-controls="btn.id"
            :aria-selected="index <= 0 ? true : false"
            >{{ btn.date }}</a
          >
        </li>
      </ul>
    </nav>
    <main class="row justify-content-center mb-4 tab-content">
      <article
        :class="`col-12 col-lg-10 tab-pane fade ${
          index <= 0 ? 'show active' : ''
        }`"
        role="tabpanel"
        v-for="(item, index) in webinar"
        :key="item.id"
        :id="item.id"
        :aria-labelledby="`${item.id}-tab`"
      >
        <div class="row justify-content-center mb-4">
          <a
            :href="item.register_link"
            target="_blank"
            class="btn btn-primary btn-lg"
            >Register for {{ item.date }}</a
          >
        </div>

        <div
          class="session mb-3"
          v-for="(session, session_index) in get_webinar_content[index]"
          :key="`day${index + 1}-session${session_index}`"
        >
          <p class="time font-weight-bold mb-1 me-3" style="min-width: 12rem">
            {{ session.time }}
          </p>
          <div class="content">
            <h3 class="h5" v-if="session.title">{{ session.title }}</h3>
            <p v-if="session.desc">{{ session.desc }}</p>

            <ul class="speakers">
              <li
                class="h6 mb-2"
                v-for="(speaker, speaker_index) in session.speaker"
                :key="`${item.id}-speaker${speaker_index}`"
              >
                {{ get_speaker(speaker).speaker_name }}
                <span class="d-block font-italic"
                  ><small>{{ get_speaker(speaker).position }}</small></span
                >
              </li>
            </ul>
          </div>
        </div>

        <section class="container">
          <div class="row justify-content-center my-4">
            <h4 class="h2 mb-4">Meet the Speakers</h4>
          </div>
          <div class="row justify-content-around text-center">
            <div
              class="col-6 col-sm-4 col-md-3 mb-3"
              v-for="(person, index) in item.all_speakers"
              :key="`person-${index}`"
            >
              <img
                class="rounded-circle mb-4 shadow"
                width="220"
                :src="get_speaker(person).profile_picture"
                alt=""
              />
              <h5 class="mb-1">{{ get_speaker(person).speaker_name }}</h5>
              <p class="text-muted">
                {{ get_speaker(person).position }}
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import SpeakerImage from "../../img/page-openday/webinar-april22-speakers/**.jpg";

export default {
  mounted() {
    console.log(SpeakerImage);
  },
  methods: {
    get_speaker(the_name) {
      return Object(this.speaker[the_name]);
    },
  },
  computed: {
    get_webinar_content() {
      return this.webinar.map((day) => {
        return day.content;
      });
    },
  },
  data() {
    return {
      webinar: [
        {
          id: "day1",
          register_link: "https://bit.ly/9AprWebinar",
          date: "9 April 2022 (Sat)",
          host: "Ms Wong Ying Ying",
          event: "Open Day",
          all_speakers: [
            "host_wong_ying_ying",
            "adrian_yao",
            "shalini_ragunath",
          ],
          content: [
            {
              time: "11.05am to 11.45am",
              title: "Launching Pad to College Life!",
              desc: "Discover the best ways to launch into your pre-tertiary education and explore the various opportunities waiting to be unlocked by you.",
              speaker: ["adrian_yao"],
            },
            {
              time: "11.45am to 12.25pm",
              title: "MCKL Education Guide 101",
              desc: "Planning to further your studies abroad but feeling uncertain about your SPM results? Let our experts guide you to the right path!",
              speaker: ["adrian_yao", "shalini_ragunath"],
            },
          ],
        },
        {
          id: "day2",
          register_link: "https://bit.ly/16AprWebinar",
          date: "16 April 2022 (Sat)",
          host: "Ms Beh Su Jane",
          event: "Programme Preview",
          all_speakers: [
            "host_beh_su_jane",
            "adrian_yao",
            "ryan_p_abraham",
            "dr_gerard_boey",
          ],
          content: [
            {
              time: "11.05am to 11.45am",
              title: "Accountancy in the New Era",
              desc: "Discover the transformation in the accounting industry and why it is still of the most sought-after and rewarding professions in the industry today.",
              speaker: ["adrian_yao", "ryan_p_abraham"],
            },
            {
              time: "11.45am to 12.25pm",
              title: "Transformation to a Future-Proof Graduate",
              desc: "The wave of the pandemic brought about permanent changes in the workforce. Learn how you can be a future proof graduate to stay ahead of the game.",
              speaker: ["dr_gerard_boey"],
            },
          ],
        },
        {
          id: "day3",
          register_link: "https://bit.ly/23AprWebinar",
          date: "23 April 2022 (Sat)",
          host: "Mr Joshua Johnson",
          event: "Programme Preview",
          all_speakers: [
            "host_joshua_johnson",
            "dr_grace_chua",
            "veneezha_muniandi",
          ],
          content: [
            {
              time: "2.00pm to 2.45pm",
              title: "Blooming Opportunities for Early Childhood Educator",
              desc: "MCKL's proven track record, comprehensive programme and guaranteed access to global universities grants students with endless opportunities. Find out more now!",
              speaker: ["dr_grace_chua"],
            },
            {
              time: "2.45am to 3.25pm",
              title: "Dynamic Communication in Social Work",
              desc: "Communication holds a key role in the Social Work field. Get a glimpse of the programme with a quick preview of the social work module.",
              speaker: ["veneezha_muniandi"],
            },
          ],
        },
        {
          id: "day4",
          register_link: "https://bit.ly/30AprWebinar",
          date: "30 April 2022 (Sat)",
          host: "Ms Kellie Ong",
          event: "Programme Preview",
          all_speakers: [
            "host_kellie_ong",
            "khor_kheng_leik",
            "dorcas_yeoh",
            "michelle_lo",
            "joshua_johnson",
            "jonathan_lau",
          ],
          content: [
            {
              time: "11.05am to 11.45am",
              title: "Achieve Your American Dream with MCKL",
              desc: "The US continues to be home to a diverse range of majors with generous scholarship offerings – Start your journey with ADTP@MCKL",
              speaker: ["khor_kheng_leik", "dorcas_yeoh", "michelle_lo"],
            },
            {
              time: "11.45am to 12.25pm",
              title:
                "A.C.E (Achieve Competitive Excellence) with International Pre-U",
              desc: "Setting an excellent track record since its inception, MCKL pre-university programme has carved pathways to renowned universities around the globe. Join the ranks of MCKL graduates today!",
              speaker: ["joshua_johnson"],
            },
            {
              time: "12.25pm to 12.35pm",
              title: "Study in Germany",
              desc: "Get a glimpse what’s the experience to learn German and study tuition-free in Germany",
              speaker: ["jonathan_lau"],
            },
          ],
        },
      ],
      speaker: {
        host_wong_ying_ying: {
          speaker_name: "Ms Wong Ying Ying (Host)",
          position: "Executive, University Placement & Alumni",
          profile_picture: SpeakerImage["1-Wong Ying Ying"],
        },
        host_beh_su_jane: {
          speaker_name: "Ms Beh Su Jane (Host)",
          position:
            "Coordinator, Career Services and Biology Lecturer, Cambridge A Levels",
          profile_picture: SpeakerImage["4-Beh Su Jane"],
        },
        host_joshua_johnson: {
          speaker_name: "Mr Joshua Johnson (Host)",
          position: "Head, University Placement & Alumni",
          profile_picture: SpeakerImage["9-Joshua"],
        },
        host_kellie_ong: {
          speaker_name: "Ms Kellie Ong (Host)",
          position: "Senior Course Advisor, American Degree Transfer Program",
          profile_picture: SpeakerImage["10-Kellie"],
        },
        joshua_johnson: {
          speaker_name: "Mr Joshua Johnson",
          position: "Head, University Placement & Alumni",
          profile_picture: SpeakerImage["9-Joshua"],
        },
        adrian_yao: {
          speaker_name: "Mr Adrian Yao",
          position: "Academic Director, External Programmes",
          profile_picture: SpeakerImage["2-Adrian Yao"],
        },
        shalini_ragunath: {
          speaker_name: "Ms Shalini Ragunath",
          position: "Acting Assistant Head of Department, Cambridge A Level",
          profile_picture: SpeakerImage["3-Shalini"],
        },
        ryan_p_abraham: {
          speaker_name: "Mr Ryan P.Abraham",
          position: "Lecturer, ACCA",
          profile_picture: SpeakerImage["5-Ryan"],
        },
        dr_gerard_boey: {
          speaker_name: "Dr Gerard Boey",
          position: "Principal cum Academic Dean",
          profile_picture: SpeakerImage["6-Dr Gerard"],
        },
        dr_grace_chua: {
          speaker_name: "Dr Grace Chua",
          position: "Head of Department, Early Childhood Education",
          profile_picture: SpeakerImage["7-Dr Grace"],
        },
        veneezha_muniandi: {
          speaker_name: "Ms Veneezha Muniandi",
          position: "Lecturer, Social Work",
          profile_picture: SpeakerImage["8-Vaneezha"],
        },
        dorcas_yeoh: {
          speaker_name: "Ms Dorcas Yeoh",
          position: "ADTP Alumni",
          profile_picture: SpeakerImage["12-Dorcas Yeoh"],
        },
        michelle_lo: {
          speaker_name: "Ms Michelle Lo",
          position: "ADTP Alumni",
          profile_picture: SpeakerImage["11-Michelle Lo"],
        },
        khor_kheng_leik: {
          speaker_name: "Ms Khor Kheng Leik",
          position: "Academic Director, Tertiary Programmes",
          profile_picture: SpeakerImage["13-Khor Kheng Leik"],
        },
        jonathan_lau: {
          speaker_name: "Mr Jonathan Lau",
          position: "Director, German Educare",
          profile_picture: SpeakerImage["14-Mr Jonathan"],
        },
      },
    };
  },
};
</script>
