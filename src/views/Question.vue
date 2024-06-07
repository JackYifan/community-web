<script>
import service from "@/util/request";
import moment from "moment/moment";

export default {
  name: "question",
  data() {
    return {
      id: 1,
      question:{},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getQuestionInfo(this.id);

  },
  methods:{
    getQuestionInfo(id) {
      service.get(`/question/${id}`)
          .then((res) => {
            this.question = res.data
            console.log(this.question)
          })
    },
    convertGMT(val){
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<template>
  <div class="main profile">
    <h4 class="question-title"><span v-text="question.title"></span></h4>
    <span class="text-desc">
      作者：<span v-text="question.user.name"></span> |
      发布时间：<span v-text="`${convertGMT(question.gmtCreate)}`"></span> |
      阅读数： <span v-text="question.viewCount"></span>
    </span>
    <a-row>
      <a-col :span="18">
        <div>
          <mavon-editor
              :value="question.description"
              :subfield="false"
              defaultOpen="preview"
              :toolbarsFlag="false"
              previewBackground="#fff"
              codeStyle="github"
              :xssOptions=false></mavon-editor>
        </div>
      </a-col>
    </a-row>

  </div>


</template>

<style scoped>

</style>