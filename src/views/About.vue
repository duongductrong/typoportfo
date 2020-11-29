<template>
  <router-link class="back-to-home" to="/">⟵ Back to home</router-link>
  <div class="container about">
    <div class="about-projects">
      <h1 class="h3 mb-5rem">Projects</h1>

      <timeline-tree class="col-12 col-lg-6" time="2019">
        <timeline-item
          date="Unknown"
          title="XskillStore - Ecommere (Personal)"
          href="https://reactjs-xskillstore.firebaseapp.com/"
          ref="Project1_2019"
        >
          là trang ecommere với mặt hàng kinh doanh là giày giày. Trang có một
          số chức năng cơ bản như Đăng nhập, Đăng ký tài khoản, Đặt hàng, Chọn
          lọc mặt hàng theo xem trước ảnh của sản phẩm, phân trang, viết blog
          giới thiệu sản phẩm. Trang web cũng có giao diện quản lý, thống kê bài
          viết, sản phẩm, đơn hàng, ngoài ra cũng có thể chỉnh sửa và xóa các
          đối tượng.
        </timeline-item>
        <timeline-item
          date="Unknown"
          title="Leon blog (Personal)"
          href="http://leon-sand.firebaseapp.com/"
          ref="Project2_2019"
        >
          Leon blog là trang web về chủ đề blog. Mục đích dùng để chia sẻ kiến
          thức mình học được lên trang, cũng như dịch các bài blog có kiến thức
          liên quan đến ngôn ngữ Javascript. Leon blog được mình xây dựng kèm
          theo trang giao diện quản lý sử dụng thư viện UI/Ant.design.
          <br /><br />
          Sau khi làm sản phẩm này mình có học được một số kiến thức mới như sử
          dụng UI/ant.design để xây dựng UI/UX tốt hơn, quản lý Form/thông tin
          người dùng nhập vào và validate giá trị trước khi gửi yêu cầu lên
          SERVER API để giảm bớt lượng yêu cầu dư thừa, áp dụng thuật toán phân
          trang</timeline-item
        >
      </timeline-tree>

      <timeline-tree class="col-12 col-lg-6" time="2020">
        <timeline-item
          date="Unknown"
          title="Xây dựng giao diện CMS crawling data Ecommere"
          ref="Project1_2020"
        >
          Ở đây mình cùng với một đồng nghiệp khác sử dụng framework VueJS của
          JavaScript để xây dựng giao diện, xử lý dữ liệu từ API và các nghiệp
          vụ liên quan để xây dựng CMS Crawling Data Ecommere - Canawan (Khả
          kim)
        </timeline-item>

        <timeline-item
          date="7/2020"
          title="Hạ tầng đô thị (TQDesign)"
          href="https://hatangdothi.tqdesign.vn/"
          ref="Project2_2020"
        >
          Xây dựng Giao diện Frontend cho TQDesign
        </timeline-item>

        <timeline-item
          date="8/2020"
          title="Website Phả đồ (Private)"
          href="http://nguyenquang-thaibinh.com/"
          ref="Project3_2020"
        >
          Xây dựng hệ thống website phả đồ các phần từ Frontend đến Backend
        </timeline-item>
      </timeline-tree>
    </div>

    <div class="about-profile row mb-5rem">
      <h1
        ref="fullName"
        class="fullName h1 mb-2rem col-12"
        style="text-align: center"
      >
        ⚔️ Dương Đức Trọng
      </h1>

      <div class="box1 col-12 col-lg-8">
        <p ref="description" class="h6">
          Là một sinh viên sắp ra trường, mình có sở thích cũng như mọi người
          hay gọi là đam mê với lập trình, mình bắt đầu tìm hiểu và trau dồi
          kiến thức từ cuối năm 18 tuổi. <br /><br />
          Thích làm gì đó đẹp mà lại còn theo đuổi ngành lập trình, vậy nên mình
          chọn luôn hướng làm Frontend Developer. Mong muốn trau dồi thêm kiến
          thức bổ ích về <span class="amber">UX/UI</span> để tăng lợi ích sản
          phẩm mình mang lại cho người dùng phía
          <span class="amber">lập trình Frontend</span>. <br />
          <br />
          Hiện tại, mình đang làm việc với ngôn ngữ JavaScript hướng Frontend
          với các kỹ năng sử dụng VanillaJS, Framework Vue, React và PHP hướng
          Backend (Sử dụng Framework Laravel để xây dựng). Mình có kinh nghiệm
          sử dụng công nghệ JavaScript trên 1 năm và 6 tháng sử dụng Php/Laravel
          để xây dựng Website. Nắm sơ lược các kiến thức nền tảng về Web
          development để đáp ứng nhu cầu xây dựng website của khách hàng. Có khả
          năng thuyết trình cơ bản và kiến thức để làm việc nhóm.
          <br /><br />
          Liên hệ cho công việc: <br />
          <br />
          ☝ Github:
          <a
            ref="github"
            href="https://github.com/duongductrong"
            style="font-weight: 300"
            >https://github.com/duongductrong</a
          >
          <br />
          ☝ Facebook:
          <a
            ref="facebook"
            href="https://www.facebook.com/trong.duong.77398/"
            style="font-weight: 300"
          >
            https://www.facebook.com/trong.duong.77398/
          </a>
          <br />
          ✌ Linkedin:
          <a
            ref="linkedin"
            style="font-weight: 300"
            href="https://www.linkedin.com/in/duongductrong"
            >https://www.linkedin.com/in/duongductrong</a
          >
          <br />
          <br />
          <span class="amber" style="font-weight: bold"
            >Is the developer of anflash ☕️</span
          >
        </p>
      </div>
      <div class="box2 col-12 col-lg-4">
        <img
          ref="avatar"
          class="avatar"
          src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/118356842_2840631236174433_769092926154998611_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=6uQlL2r-IUMAX-repRu&_nc_ht=scontent.fsgn5-7.fna&oh=caccc00385c3dcf060f8b78f4bbe2943&oe=5FE657DB"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import TimelineItem from "../components/TimelineTree/TimelineItem.vue";
import TimelineTree from "../components/TimelineTree/TimelineTree.vue";
import { throttle } from "../core/functions/performance";

export default {
  name: "About",
  components: {
    TimelineItem,
    TimelineTree,
  },

  mounted() {
    let arrayListStatic = [
      this.$refs.Project1_2019.focus(),
      this.$refs.Project2_2019.focus(),
      this.$refs.Project1_2020.focus(),
      this.$refs.Project2_2020.focus(),
      this.$refs.Project3_2020.focus(),
    ];

    let arrayListDynamic = [
      this.$refs.description,
      this.$refs.avatar,
      this.$refs.github,
      this.$refs.facebook,
      this.$refs.linkedin,
    ];

    // add opacity for element by js
    arrayListStatic.forEach((e) => (e.style.opacity = "0"));
    arrayListDynamic.forEach((e) => (e.style.opacity = "0"));

    // add animation
    arrayListStatic.forEach((ite, index) => {
      ite.classList.add("amn-btt-transform");
      ite.style.animationDelay = `${0.9 + index * 0.2}s`;
    });

    // add animation scroll
    document.addEventListener(
      "scroll",
      throttle(() => {
        arrayListDynamic.forEach((e, i) => {
          if (e.offsetTop < window.innerHeight + window.scrollY) {
            e.classList.add("amn-btt-transform");
            e.style.animationDelay = `${0.3 * i}s`;
          }
        });
      }, 20)
    );
  },
};
</script>

<style lang="scss" scoped>
.back-to-home {
  position: fixed;
  top: 10px;
  left: 20px;
  z-index: 20;
  // transform: translateX(-50%);
}
.about {
  overflow: hidden;

  &-projects {
    display: flex;
    align-items: center;
    min-height: 92vh;
  }

  @media screen and (max-width: 1440px) {
    &-projects {
      margin-top: 5rem;
      flex-wrap: wrap;
      margin-bottom: 5rem;
    }
  }

  &-profile {
    .fullName {
      font-weight: 900;
      opacity: 1 !important;
    }

    .box1 {
    }
    .box2 {
      margin-top: 1rem;
      .avatar {
        border-radius: 10px;
        width: 100%;
        height: 400px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
}
</style>