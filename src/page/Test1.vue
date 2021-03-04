<template>
  <div>test1</div>
</template>

<script>
import { apiAddress } from '../request/api'

export default {
  mounted () {
    this.load()
  },
  methods: {
    load () {
      apiAddress({
        type: 0,
        sort: 1
      }).then(res => {
        // 获取数据成功后的其他操作
      })
    }
  }
}
</script>
<style></style>
