<script>
// import {onMounted, ref} from "vue";
import service from "@/util/request.js"
import navigate from "@/components/navigate.vue"

export default {
  data() {
    return {
      questions:{}
    };
  },
  methods:{

  },
  mounted() {
    console.log(this.$route)
    service.get("/getQuestions").then((res) => {
      console.log(res)
      this.questions = res.data
    })
  },
  components: {
    navigate
  },
}


</script>

<template>
  <div>
    <navigate></navigate>
    <div class="container-fluid main">
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <h2><span class="glyphicon glyphicon-list" aria-hidden="true"></span> 发现 </h2>
          <hr>
          <div class="media" v-for="question in questions.data">
            <div class="media-left">
              <a :href="'/user/'+question.user.id">
                <img class="media-object img-rounded" :src="question.user.avatarUrl">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">
                <a :href="'question/'+question.id" v-text="question.title"></a>
              </h4>
              <span class="text-desc"><span v-text="question.commentCount"></span>个回复 • <span
                  v-text="question.viewCount"></span>次浏览 • <span
                  v-text="question.gmtCreate"></span>
            </span>

            </div>
          </div>

        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
