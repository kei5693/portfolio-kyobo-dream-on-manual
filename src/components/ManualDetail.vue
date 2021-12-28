<template>
    <div id="manualDetail" v-if="isActive">
      <swiper
        class="swiper"
        ref="swiper"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="(contentList, index) in contentList"
          :key="`contenta${index}`"
        >
          <div :style="{ backgroundImage: `url(${require(`@/assets/img/slide${mainIndex+1}_${index}.png`)})` }"></div>
        </swiper-slide>
        <div :class="{intervalBull: mainIndex == 2}" class="swiper-pagination swiper-pagination-v" slot="pagination"></div><!-- 챕터2의 슬라이드 숫자가 많아서 스타일 분리 -->
      </swiper>
    </div>
</template>
<script>
export default {
  props:{
    mainIndex: {
      type:Number,
      default:0,
    },
    nowIndex: {
      type:Number,
      default:0,
    }
  },
  computed:{
    isActive() {
      return this.nowIndex == this.mainIndex
    },
    swiper() {
      return this.$refs.swiper.$swiper;
    },
    // swiper() {
    //   return this.isActive && this.$refs.swiper && this.$refs.swiper.$swiper ? this.$refs.swiper.$swiper : undefined;
    // },
    contentList() {
      return this.$store.getters.getContentSubPage(this.mainIndex);
    },
  },
  data() {
    return {
      swiperOption: {
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
    }
  },
  watch: {
    // $route : function() {
    //   this.swiperReady();
    // }
  },
  methods: {
    // swiperReady() {
    //   this.$nextTick(()=>{
    //     if(this.isActive && this.swiper) {
    //       this.swiper.slideTo(0, 0);
    //     }
    //   })
    // },
  }
}
</script>