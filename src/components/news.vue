<template>
  <div class="news">
    <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""
         class="news-icon">
    <div class="news-info">
      <h4>Amazon reportedly has an Alexa-powered AirPods competitor in the works</h4>
      <p>Apple's new AirPods give you hands-free access to Siri</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "news"
}
</script>

<style scoped>
.news {
  display: flex;
  margin: 0 0 2% 2%;
  border: 1px solid black;
}

.news-icon {
  width: 50%;
  margin: 2%;
}
.news-info{
  flex-direction: column;
}
</style>
