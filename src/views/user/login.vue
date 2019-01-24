<template>
    <div>
        <input v-model="userName"/>
        <input type="password" v-model="password"/>
        <button @click="submit()">登陆</button>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'
import md5 from 'js-md5';
export default {
  name: 'login-page',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods:{
    submit(){
      console.log(this.$data.userName);
      console.log(md5(this.$data.password));
    }
  }
}
</script>

<style scoped>

</style>
