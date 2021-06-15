<template>
  <div style="margin-bottom: 10%">
    <ol id="list">
      <button @click="prePage()"> ◄</button>
      <li/>
      <li v-for="item in PagePerLine" :key="item">
        <hr class="line">
      </li>
      <button @click="nextPage()"> ►</button>
    </ol>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["count"],
  data() {
    return {
      currentPage: Number(this.$route.params.page),
      countPage: this.roundingNum,
      numPerLine: 5
    }
  },
  mounted() {
    this.chosenPage()
  },
  computed: {
    PagePerLine() {
      if (this.roundingNum < 5) {
        return this.roundingNum
      } else return 4
    },
    roundingNum() {
      if (this.count > 0) {
        return Number(Math.ceil(this.count - 1))
      } else return 0
    }
  },

  methods: {
    changePage(newPage) {
      let elem = document.querySelectorAll('li')
      if (this.countPage > 5) {
        if (this.currentPage <= 3 && newPage <= 3) {
          elem[this.currentPage - 1].classList.remove('li-chosen')
          elem[newPage - 1].classList.add('li-chosen')
        }
        if (this.countPage + 1 - this.currentPage < 3 && this.countPag + 1 - newPage < 3) {
          elem[4 - this.countPage + 1 - this.currentPage].classList.remove('li-chosen')
          elem[4 - (this.countPage + 1 - newPage)].classList.add('li-chosen')
        }
      } else {
        elem[this.currentPage - 1].classList.remove('li-chosen')
        elem[newPage - 1].classList.add('li-chosen')
      }
      this.currentPage = newPage
      this.$router.push("/" + newPage).catch(err => {
        console.log(err)
      })
    },
    chosenPage() {
      let elem = document.querySelectorAll('li')
      console.log(this)
      if (this.currentPage > 3) {
        let el = document.getElementById("list")
        if (this.countPage + 1 - this.currentPage <= 2) {
          el.style.counterIncrement = `myCounter ${this.currentPage - 5}`
          elem[4 - (this.countPage + 1 - this.currentPage)].classList.add('li-chosen')
        } else {

          el.style.counterIncrement = `myCounter ${this.currentPage - 3}`
          elem[2].classList.add('li-chosen')
        }
      } else elem[this.currentPage - 1].classList.add('li-chosen')
      elem[this.currentPage - 1].classList.add('li-chosen')
    },
    prePage() {
      if (this.currentPage !== 1) {
        let el = document.getElementById("list")
        if (this.currentPage > 3 && this.currentPage < this.countPage) {
          el.style.counterIncrement = `myCounter ${this.currentPage - 4}`
        }
        this.changePage(this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.currentPage - 1 !== this.countPage) {
        if (this.currentPage >= 3 && this.currentPage < this.countPage - 1) {
          let el = document.getElementById("list")
          el.style.counterIncrement = `myCounter ${this.currentPage - 2}`
        }
        this.changePage(this.currentPage + 1)
      }
    }
  }
}
</script>

<style scoped>

ol {
  counter-reset: myCounter;
  display: inline;
  margin-bottom: 10%;
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

.li-chosen {
  opacity: 0.6;
}

.line {
  display: inline-table;
  content: "";
  position: relative;
  border-top: 1px solid black;
  width: 10px;
  height: 0;
}

ol button {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid black;
  outline: none;
}

ol button:hover {
  opacity: 0.6;
  color: red;
}

</style>
