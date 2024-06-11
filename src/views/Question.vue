<script>
import service from "@/util/request";
import moment from "moment/moment";
import qs from 'qs'
export default {
  name: "question",
  data() {
    return {
      id: 1,
      question:{},
      comments:[],
      value:'',
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getQuestionInfo(this.id);
    this.getComments(this.id)

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
    },
    getComments(id) {
      service.get(`/comment/tree/${id}`)
          .then((res) => {
            this.comments  = res.data.comments
            console.log(this.comments)
          })
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }
      console.log(this.value);
      service.get(`/comment/postComment`, qs.stringify({
        "parentId": this.question.id,
        "content": this.value,
        "type": 1
      })).then((res) => {
        console.log(res)
        // this.$router.go(0);
      })

    },
    handleChange(e) {
      this.value = e.target.value;
    },
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

        <a-list
            class="comment-list"
            :header="`${comments.length} replies`"
            item-layout="horizontal"
            :data-source="comments"
        >

          <a-comment :author="item.user.name" :avatar="item.user.avatarUrl" v-for="item in comments" :key="item.id" >
            <p slot="content">
              {{ item.content }}
            </p>
            <a-tooltip slot="datetime" :title="`${convertGMT(item.gmtCreate)}`">
              <span>{{ convertGMT(item.gmtCreate) }}</span>
            </a-tooltip>

            <a-comment :author="item.user.name" :avatar="item.user.avatarUrl" v-for="item in item.children">
              <p slot="content">
                {{ item.content }}
              </p>
              <a-tooltip slot="datetime" :title="`${convertGMT(item.gmtCreate)}`">
                <span>{{ convertGMT(item.gmtCreate) }}</span>
              </a-tooltip>
            </a-comment>
          </a-comment>
<!--          <a-list-item slot="renderItem" slot-scope="item, index">-->
<!--            -->
<!--            -->
<!--          </a-list-item>-->
        </a-list>

        <div>
          <a-form-item>
            <a-textarea :rows="4" :value="value" @change="handleChange" />
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit" type="primary" @click="handleSubmit">
              Add Comment
            </a-button>
          </a-form-item>
        </div>
      </a-col>
    </a-row>

  </div>


</template>

<style scoped>

</style>