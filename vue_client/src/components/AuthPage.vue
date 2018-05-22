<template>
  <div class="hello">
    <p>!! {{usLogin}} </p>
    <form>
      <div class="form-group">
        <label for="AuthPageLogin">Email address</label>
        <input 
          type="email" 
          class="form-control" 
          id="AuthPageLogin" 
          aria-describedby="emailHelp" 
          placeholder="Enter email" 
          v-model = "AuthLogin">
      </div>
      <div class="form-group">
        <label for="AuthPageLogin">Password</label>
        <input 
          type="password" 
          class="form-control" 
          id="AuthPagePass" 
          placeholder="Password" 
          v-model = "AuthPass">
      </div>
      
      <button type="submit" class="btn btn-primary" v-on:click = "TryLogon">LogIn</button>
      <button type="submit" class="btn btn-warning" >RegIn</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data () {
    return {
      AuthLogin: '',
      AuthPass : ''
    }
  },
  computed : {
    usLogin() {
      return this.$store.state.curLogin
    }
  },
  methods : {
    TryLogon () {
      this.$store.commit('tryToLogin', this.AuthLogin, this.AuthPass)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    position: absolute;
    width: 20%;
    left: 70%;
    top: 10%;
  }
  input {
    text-align: center
  }
</style>
