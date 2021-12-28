<template>
  <div id="manual"> 
    <div class="menuContents">
      <div class="depth1">
        <ul>
          <li
            v-for="(menu, menuIdx) in mainMenu.slice(0,7)"
            :key="`mainMenu-${menuIdx}`"
            @click="gotoMenu(menuIdx)"
            :class="{on : mainIndex == menuIdx}"
          >
            <span>{{"chapter "+(menuIdx+1)}}</span>
          </li>
        </ul>
      </div>

      <div class="depth2">
        <p>{{mainMenu[mainIndex]}}</p>
        <button class="btnMainMenu" @click="goToMainPage()"><span>전체메뉴</span></button>
      </div>
    </div>

    <ManualDetail
      v-for="(manualDetail, manualDetailIdx) in mainMenu"
      :key="`manualDetail-${manualDetailIdx}`"
      :nowIndex="manualDetailIdx"
      :mainIndex="mainIndex" 
    />
  </div>
</template>

<script>
import ManualDetail from '../components/ManualDetail';
export default {
  name: 'Manual',
  components:{
    ManualDetail
  },
  props: {
    mainIndex: {
      type:Number,
      default:0,
    },
  },
  data() {
    return {
      mainMenu:[]
    };
  },
  created() {
    this.mainMenu = this.$store.getters.getMenuMain;
  },
  methods: {
    gotoMenu(mainIndex) {
      if(this.mainIndex == mainIndex) return;

      this.$router.push(`/Manual/${mainIndex}`);
    },
    // 목차 페이지로 이동
    goToMainPage(){
      this.$router.push(`/Main/${1}`);
    },
  },
}
</script>