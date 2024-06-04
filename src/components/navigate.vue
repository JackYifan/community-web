<script>
export default {
  mounted() {
    console.log("mount")
    console.log(this.$store.state.isLogin)
  }
}

</script>

<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Community</span>
          </button>
          <a class="navbar-brand" href="/">Community</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-left" action="/" method="get">
            <div class="form-group">
              <input type="text" class="form-control" name="search" placeholder="搜索问题">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="this.$store.state.isLogin">
              <a href="/publish">提问</a>
            </li>
            <li><a href="/profile/replies">通知 <span class="badge" v-text="this.$store.state.isLogin"></span></a>
            </li>
            <li class="dropdown" v-if="this.$store.state.isLogin">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">
                <span v-text="this.$store.state.isLogin"></span>
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="/profile/questions">我的问题</a></li>
                <li><a href="/userinfo">个人信息</a></li>
                <li><a href="/logout">退出登录</a></li>
              </ul>
            </li>
            <li v-if="this.$store.state.isLogin" class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">
                <span>登录</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="https://github.com/login/oauth/authorize?client_id=541bf8d226524d44930a&redirect_uri=http://localhost:8887/callback&scope=user&state=1">
                    Github登录
                  </a>
                </li>
                <li>
                  <a href="/loginpage">
                    账号密码登录
                  </a>
                </li>
              </ul>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>

</template>

<style scoped>

</style>