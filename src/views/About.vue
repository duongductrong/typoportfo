<template>
  <div class="container about">
    <div class="about-projects">
      <h1 class="h3 mb-5rem">Projects</h1>

      <timeline-tree style="flex: 1" time="2019">
        <timeline-item
          date="Unknown"
          title="XskillStore - Ecommere (Personal)"
          href="https://reactjs-xskillstore.firebaseapp.com/"
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

      <timeline-tree style="flex: 1" time="2020">
        <timeline-item
          date="Unknown"
          title="Xây dựng giao diện CMS crawling data Ecommere"
          href="https://hatangdothi.tqdesign.vn/"
        >
          Ở đây mình cùng với một đồng nghiệp khác sử dụng framework VueJS của
          JavaScript để xây dựng giao diện, xử lý dữ liệu từ API và các nghiệp vụ liên quan
          để xây dựng CMS Crawling Data Ecommere - Canawan (Khả kim)
        </timeline-item>

        <timeline-item
          date="7/2020"
          title="Hạ tầng đô thị (TQDesign)"
          href="https://hatangdothi.tqdesign.vn/"
        >
          Xây dựng Giao diện Frontend cho TQDesing
        </timeline-item>

        <timeline-item
          date="8/2020"
          title="Website Phả đồ (Private)"
          href="http://nguyenquang-thaibinh.com/"
        >
          Xây dựng hệ thống website phả đồ các phàn từ Frontend đến Backend
        </timeline-item>
      </timeline-tree>
    </div>

    <div class="about-profile">
      <h1 class="h1"></h1>
    </div>
  </div>
</template>

<script>
import TimelineItem from "../components/TimelineTree/TimelineItem.vue";
import TimelineTree from "../components/TimelineTree/TimelineTree.vue";

export default {
  name: "About",
  components: {
    TimelineItem,
    TimelineTree,
  },
};
</script>

<style lang="scss" scoped>
.about {
  overflow: hidden;

  &-projects {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }

  &-profile {

  }
}
</style>