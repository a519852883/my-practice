<template>
  <div class="register">
    <form>
      <label for="username">用户名</label>
      <input name="username">
      <label for="password">密码</label>
      <input name="password">
      <button type="button" @click='submit()'>确定</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    submit() {
      this.$http.post("/login").then(response => {
        if(response.body.result == true) {
          alert('登录成功')
        }
        else {
          alert('密码错误')
        }
      });
      console.log("登录成功");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
