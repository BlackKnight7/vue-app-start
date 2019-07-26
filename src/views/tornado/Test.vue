<template>
  <div class="body">
    <h1>{{ hello }}</h1>
    <p>test</p>
    <button v-on:click='goBack'>Go back</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hello: 'world!',
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>

<style lang="less" scoped>
.body {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  .title {
    margin-top: .5rem;
    color: #aad290;
    font-size: .5rem;
  }
}
</style>