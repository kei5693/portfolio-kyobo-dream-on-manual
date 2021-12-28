<template>
  <div id="main">
    <swiper
      class="swiper"
      ref="swiper"
      :options="swiperOptionMain"
      @slideChange="onSlideChange"
    >
      <swiper-slide><SlidePage1 /></swiper-slide>
      <swiper-slide id="siteMap">
        <div>
          <div class="title"><h2>목차</h2></div>
          <div class="contents">
            <div class="inner">
              <div @click="onClickGotoBest()">
                <h3>
                  <span>더 좋아진 교보 <em>드림on</em></span>
                  <strong>경쟁력 Best 5</strong>
                </h3>
              </div>

              <ul>
                <li
                  v-for="(detailPage, depth1Index) in $store.state.detailPageData"
                  :key="`detailPage${depth1Index}`"
                >
                  <div>
                    <h3 @click="onClickGotoManual(depth1Index)">
                      <em>{{"Chapter "+(depth1Index+1)}}</em>
                      <strong v-html="detailPage.title"></strong>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>

            <!-- <p>
              ※ 단체업무중 단체청약입력,단체청약진행현황, 단체보험 사전심사결과조회는<br>
              ‘22.1월 오픈 예정으로 활용매뉴얼은 오픈시 등재 예정임
            </p> -->
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SlidePage1 from '@/components/SlidePage1.vue'

export default {  
  name: 'Home',
  components: {
    SlidePage1,
  },
  props: {
    slideIndex: {
      type:Number,
      default:0,
    },
  },
  data() {
    return {
      swiperOptionMain: {
        slidesPerView: 1,
        direction: "vertical",
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: true,
        speed: 500,
        resistance:false,
        resistanceRatio:0,
        pagination: {
          el: ".swiper-pagination-v",
          clickable: true,
        },
      },
      currentSlideIndex: 0,
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
  mounted() {
    window.test = this;
    this.swiper.slideTo(this.slideIndex, 0);  // best5로 간 이후 메인메뉴 클릭 시 목차 슬라이드로 이동
  },
  methods: {
    // 마지막 메뉴는 페이지 이동 하지 않도록
    onClickGotoManual(mainIndex) {
      var condition = this.$store.state.detailPageData.length-1;
      if(mainIndex < condition){
        this.$router.push(`/Manual/${mainIndex}`);
      }
    },
    onClickGotoBest() {
      this.$router.push(`/Best5`);
    },
    onSlideChange(){
      this.currentSlideIndex = this.swiper.realIndex;

      // 라우터 리다이렉션 오류 방지(Avoided redundant navigation to current location)
      // 현재 주소와 이동할 주소를 비교
      if(this.$route.path!==`/Main/${this.currentSlideIndex}`) {
        this.$router.push(`/Main/${this.currentSlideIndex}`)
      }
    }
  },
}
</script>