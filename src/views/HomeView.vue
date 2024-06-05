<script>
import service from "@/util/request.js"
import moment from 'moment';
export default {
  data() {
    return {
      questions:{},
      current: 1,
      total: 10,
      pageSize: 10,
      pageSizeOptions: ['5', '10', '30', '40', '50'],

    };
  },
  methods:{
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      this.getQuestions();
    },
    onChange(page, pageSize){
      this.page = page;
      this.pageSize = pageSize;
      this.getQuestions();
    },
    getQuestions() {
      service.get("/question/list", {
        params: {
          page: this.current,
          size: this.pageSize
        }
      }).then((res) => {
        // console.log(res)
        this.questions = res.data
        this.current = res.data.current
        this.total = res.data.total
        this.pageSize = res.data.size
        console.log(res.data)
      })
    },
    convertGMT(val){
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }

  },
  mounted() {
    this.getQuestions();
  }
}


</script>

<template>

  <div class="main">
    <a-row>
      <a-col :span="18">
        <h2><span><a-icon type="solution" /></span> 发现 </h2>
        <hr>
        <a-list item-layout="horizontal" :data-source="this.questions.records">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta
                :description='`${item.commentCount}个回复 • ${item.viewCount}次浏览 • ${convertGMT(item.gmtCreate)}`'
            >
<!--              <a slot="title" :href="`/question/${item.id}`">{{ item.title }}</a>-->
              <router-link slot="title" :to="`/question/${item.id}`">{{ item.title }}</router-link>
              <a-avatar
                  slot="avatar"
                  :src="item.user.avatarUrl"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
    <a-pagination
        v-model="current"
        :page-size-options="pageSizeOptions"
        :total="total"
        show-size-changer
        :page-size="pageSize"
        @showSizeChange="onShowSizeChange"
        @change="onChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      </template>
    </a-pagination>

  </div>

</template>
<style>
</style>

