<template>
  <div>test</div>
</template>

<script>
import { GETTREEDATA, three } from '../api/nav'

export default {
  mounted () {
    this.load()
  },
  methods: {
    load () {
      GETTREEDATA(123) // 函数名以及传参
        .then(res => {
          console.log(res) // 成功后返回的数据
        })
      three(123) // 函数名以及传参
        .then(res => {
          console.log(res) // 成功后返回的数据
        })
    }
  }
}
</script>
<style></style>
