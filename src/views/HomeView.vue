<script>
import service from "@/util/request.js"

export default {
  data() {
    return {
      questions:{}
    };
  },
  methods:{

  },
  mounted() {
    // console.log(this.$route)
    service.get("/getQuestions").then((res) => {
      // console.log(res)
      this.questions = res.data
    })
  }
}


</script>

<template>

  <div class="main">
    <a-row>
      <a-col :span="18">
        <h2><span><a-icon type="solution" /></span> 发现 </h2>
        <hr>
        <a-list item-layout="horizontal" :data-source="this.questions.data">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
              <a-avatar
                  slot="avatar"
                  :src="item.user.avatarUrl"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>

  </div>

</template>
<style>
</style>

