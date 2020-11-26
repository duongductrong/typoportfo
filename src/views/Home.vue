<template>
  <layout>
    <!-- Section Myself -->
    <section class="section-first">
      <div class="left">
        <!-- <small class="h3">_Say hi, i am </small> -->
        <div class="amn mb-1rem">
          <h1 class="amn-text first-line">A Frontend developer,</h1>
        </div>
        <div class="amn mb-1rem">
          <h2 class="amn-text first-line">To make a website</h2>
        </div>
        <div class="amn mb-1rem">
          <h3 class="amn-text first-line">
            Is <span class="amber">creative</span>,
            <span class="amber">unique</span>
          </h3>
        </div>
        <div class="amn mb-2rem">
          <h3 class="amn-text first-line">
            And <span class="amber">beautiful</span>
          </h3>
        </div>

        <h4 class="amn">
          <a class="amn-text" href="#">Available for freelance work ↪</a>
        </h4>
      </div>

      <div class="right">
        <div class="avatar-box">
          <img
            class="avatar"
            src="https://avatars1.githubusercontent.com/u/39333905?s=1920&u=668a70d02d61891484e2298b91b7fc117fb601a9&v=4"
            alt=""
          />

          <div class="online-point"></div>
        </div>
      </div>
    </section>
    <!-- End:Section Myself -->

    <!-- Section Myself -->
    <section class="section-second">
      <h1 ref="works" id="timeline-works" class="h3 mb-5rem">
        Timeline Works ✈
      </h1>

      <timeline-tree ref="timelineOne" time="2020">
        <timeline-item
          date="05/2020 - 07/2020"
          title="Frontend Developer - Công ty CPTM Dịch vụ  Khả Kim"
        >
          Bước đầu trong còn đường lập trình, được thực tập tại CÔNG TY CPTM
          DỊCH VỤ KHẢ KIM với vị trí làm Frontend Developer. Ở đây mình được
          trải nghiệm một môi trường làm việc thực sự, tiếp cận những kiến thức
          thực tế về lập trình frontend.
          <br />
          <br />
          Được trải nghiệm và sử dụng Vue Framework của JavaScript để xây dựng
          dự án CMS Quản trị hệ thống crawling data ecommere
        </timeline-item>
        <timeline-item
          date="07/2020 - Present"
          title="Web Developer (FE-BE) - Công ty TNHH Công Nghệ Anflash"
        >
          Tại thời điểm đặt chân vào Công ty Anflash cho đến bây giờ, mình tiếp
          cận được khá nhiều trải nghiệm mới từ lập trình, chuyên môn cho đến
          thái độ làm việc. Được đảm nhiệm công việc lập trình cả về mảng
          Frontend Developement và Backend Developement<br /><br />
          Mặc dù công ty chỉ mới startup được 2 năm nhưng môi trường rất thân
          thiện, hòa đồng, không phân biệt thành viên. Thời gian làm việc thoải
          mái nhưng cũng đòi hỏi chất lượng sản phẩm đầu ra khi làm
          việc</timeline-item
        >
      </timeline-tree>

      <timeline-tree ref="timelineTwo" time="2021">
        <timeline-item date="The Planning" title="Middle Level Web Developer">
          Với mong muốn trong năm tới, có thể đặt một bước tiến lớn hơn trở
          thành một Middle level trong ngành lập trình website / Web Development
          trong bước tiến trở thành một Senior Developer Web
        </timeline-item>
      </timeline-tree>
    </section>
    <!-- End:Section Timelines -->

    <!-- Section Myself -->
    <section class="section-thirty">
      <h1 ref="expertise" id="expertise" class="h3 mb-1rem">Expertise ⌚</h1>
      <p
        class="h6 mb-5rem"
        style="animation-delay: 0.2s"
        ref="expertiseDescription"
      >
        Nắm được một số kỹ năng chuyên môn để có thể làm việc với ngành nghề lập
        trình,
        <br />hoàn thành tốt công việc được giao trong thời hạn.
      </p>

      <div class="list-expertise row">
        <div ref="language" class="col-12 col-md-6 col-lg-4">
          <h1 class="h3 mb-1rem">Language</h1>
          <p class="expertise-item h5">JavaScript</p>
          <br />
          <p class="expertise-item h5">Php</p>
          <br />
        </div>

        <div ref="framework" class="col-12 col-md-6 col-lg-4">
          <h1 class="h3 mb-1rem">Framework / Supported</h1>

          <p class="expertise-item h5">React</p>
          <br />
          <p class="expertise-item h5">Vue</p>
          <br />
          <p class="expertise-item h5">Alpinejs</p>
          <br />
          <p class="expertise-item h5">State management (Redux/Vuex)</p>
          <br />
          <p class="expertise-item h5">Laravel</p>
          <br />
        </div>

        <div ref="database" class="col-12 col-md-6 col-lg-4">
          <h1 class="h3 mb-1rem">Database</h1>

          <p class="expertise-item h5">SQL</p>
          <br />
          <p class="expertise-item h5">No SQL</p>
          <br />
        </div>
      </div>
    </section>
    <!-- End:Section Timelines -->
  </layout>
</template>

<script>
import { throttle } from "../core/functions/performance";
import Layout from "../components/Layout/Layout.vue";
import TimelineTree from "../components/TimelineTree/TimelineTree.vue";
import TimelineItem from "../components/TimelineTree/TimelineItem.vue";
export default {
  name: "Home",
  components: { Layout, TimelineTree, TimelineItem },
  mounted() {
    let arrayList = [
      this.$refs.expertise,
      this.$refs.language,
      this.$refs.framework,
      this.$refs.database,
      this.$refs.expertiseDescription,
      this.$refs.timelineOne.focus(),
      this.$refs.timelineTwo.focus(),
    ];
    document.addEventListener(
      "scroll",
      throttle(() => {
        arrayList.forEach((refEl) => {
          if (refEl.offsetTop < window.scrollY + window.innerHeight) {
            refEl.classList.add("amn-opacity-transformY100");
          } else {
            if (refEl.classList.contains("amn-opacity-transformY100")) {
              refEl.classList.remove("amn-opacity-transformY100");
            }
          }
        });
      }, 20)
    );
  },
  beforeUnmount() {
    let arrayList = [
      this.$refs.expertise,
      this.$refs.language,
      this.$refs.framework,
      this.$refs.database,
      this.$refs.expertiseDescription,
      this.$refs.timelineOne.focus(),
      this.$refs.timelineTwo.focus(),
    ];

    document.removeEventListener(
      "scroll",
      throttle(() => {
        arrayList.forEach((refEl) => {
          if (refEl.offsetTop < window.scrollY + window.innerHeight) {
            refEl.classList.add("amn-opacity-transformY100");
          } else {
            if (refEl.classList.contains("amn-opacity-transformY100")) {
              refEl.classList.remove("amn-opacity-transformY100");
            }
          }
        });
      }, 20)
    );
  },
};
</script>

<style lang="scss">
.section-first {
  display: flex;
  align-items: center;
  height: calc(90vh - 66px);
  .left {
    flex-grow: 2;
    .first-line {
      font-size: 4rem;
      font-weight: 900;
    }
    .second-line {
      font-size: 3rem;
      font-weight: 900;
    }
    .thirty-line {
      font-size: 2.5rem;
      font-weight: 900;
    }

    .amn {
      $items: 5;
      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          .amn-text {
            animation-delay: #{0.2 * $i}s;
          }
        }
      }
    }
  }
  .right {
    flex-grow: 1;
    .avatar-box {
      position: relative;
      display: inline-block;
      width: 300px;
      height: 300px;
      opacity: 0;
      animation: AmnBtt 600ms ease forwards;
      animation-delay: 1.4s;

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }

      .online-point {
        width: 50px;
        height: 50px;
        border: 2px solid $light;
        border-radius: 50%;
        background-color: $red;
        position: absolute;
        bottom: 0;
        right: 30px;
      }
    }
  }
}
.section-second {
  margin-bottom: 10rem;
  .timeline-tree {
    opacity: 0;
    animation-duration: 600ms;
  }
}
.section-thirty {
  margin-bottom: 10rem;
  text-align: center;
  .list-expertise {
    & > div {
      opacity: 0;
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation-delay: #{0.2 * $i}s;
        }
      }
    }
    .expertise-item {
      display: inline-block;
      border-bottom: 1px dashed $amber;
      margin-bottom: 1rem;
    }
  }
}

@media screen and (max-width: 680px) {
  .section-first {
    .left {
      .first-line {
        font-size: 2.5rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-first {
    margin-bottom: 10rem;
  }
}

@media screen and (max-width: 1168px) {
  .section-first {
    flex-wrap: wrap;
    text-align: center;

    .left,
    .right {
      flex: 1 0 100%;
    }

    .left {
      order: 2;
    }
    .right {
      order: 1;
    }
  }
}
</style>;