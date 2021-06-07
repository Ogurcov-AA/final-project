<template>
  <div class="body">
  <div class="tab">
    <div class="newsTab">
      <news/>
      <news/>
    </div>
    <div class="randomNews">
    <randomNews/>
    </div>
  </div>
    <div class="nextPages">
      wad
    </div>
  </div>
</template>

<script>
import news from "@/components/news"
import randomNews from "@/components/randomNews";

export default {
  name: "Home",
  components: {
    news,
    randomNews
  },
}
</script>

<style scoped>
.tab {
  display: flex;
}

.newsTab {
  display: inline-block;
}
.randomNews {
  width: 60%;
}

</style>
