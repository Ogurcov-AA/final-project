<template>
  <div class="body">
  <div class="tab">
    <div class="newsTab">
      <news/>
    </div>
    <div class="randomNews">
    <randomNews/>
    </div>
  </div>
    <div class="nextPages">
      <pagination/>
    </div>
  </div>
</template>

<script>
import news from "@/components/news"
import randomNews from "@/components/randomNews";
import pagination from "@/components/pagination";

export default {
  name: "Home",
  components: {
    news,
    randomNews,
    pagination
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
