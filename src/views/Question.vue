<script>
export default {
  name: "question",
  data() {
    return {
      id: 1

    };
  },
  mounted() {
    this.id = this.$route.params.id;
  }
}
</script>

<template>
<h1>Question{{id}}</h1>
</template>

<style scoped>

</style>