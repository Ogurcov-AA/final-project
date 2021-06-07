<template>
  <div>
    <ol>
      <li/>
      <hr class="line">
      <li/>
      <hr class="line">
      <li/>
      <hr class="line">
      <li/>
      <hr class="line">
      <li/>

    </ol>
  </div>
</template>

<script>
export default {
  name: "pagination"
}
</script>

<style scoped>

ol {
  counter-reset: myCounter;
  display: inline;

}

li {
  list-style: none;
  display: inline;
}

li:after {
  counter-increment: myCounter;
  content: counter(myCounter);
  display: inline-block;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid black;
}

li:hover {
  opacity: 0.6;
  color: red;
}

.line {
  display: inline-table;
  content: "";
  position: relative;
  border-top: 1px solid black;
  width: 10px;
  height: 0;


}

</style>
