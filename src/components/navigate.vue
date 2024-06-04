<script>
export default {
  mounted() {
    // console.log("mount")
    // console.log(this.$store.state.isLogin)
  }
}

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Community</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">通知</a>
            </li>
            <li class="nav-item dropdown" v-if="this.$store.state.isLogin">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{this.$store.state.user.name}}
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">我的问题</a></li>
                <li><a class="dropdown-item" href="#">个人信息</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">退出登录</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown" v-if="!this.$store.state.isLogin">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span>登录</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="https://github.com/login/oauth/authorize?client_id=541bf8d226524d44930a&redirect_uri=http://localhost:8887/callback&scope=user&state=1">Github登录</a></li>
                <li><a class="dropdown-item" href="#">账号密码登录</a></li>
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