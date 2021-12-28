<template>
  <div id="best5"> 
    <button class="btnMainMenu" @click="goToMainPage()"><span>전체메뉴</span></button>

    <swiper
      class="swiper"
      ref="swiper"
      :options="swiperOptionMain"
    >
      <swiper-slide
        v-for="(slideEl, index) in slideListData"
        :key="`slideEl${index}`"
      >
        <div :style="{ backgroundImage: `url(${require(`@/assets/img/contents/img_best5_${index+1}.png`)})` }"></div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
export default {
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
      slideListData: 8,
    };
  },
  methods: {
    goToMainPage(){
      this.$router.push(`/Main/${1}`);
    },
  },
}
</script>