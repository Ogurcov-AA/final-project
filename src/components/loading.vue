<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "loading"
}
</script>

<style scoped>
.loader {
  margin: 5% auto;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #000000;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
