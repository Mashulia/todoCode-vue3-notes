<template>
<!--  <ul>-->
<!--    <li v-for="user in users" :key="user.id">-->
<!--      <p>{{user.id}}</p>-->
<!--      <p>{{user.name}}</p>-->
<!--      <p>{{user.admin ? 'Это админ' : 'Обычный пользователь'}}</p>-->
<!--    </li>-->
<!--  </ul>-->
<!--  <br>-->
<!--    <p>{{usersLength}}</p>-->
  <br>
  <br>
  <div v-if="isUserLogged"> User is Logged :{{user}}
  </div>
  <div v-else>
  <button class="btn btnPrimary" @click="handleLoginClick">Login</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userId: 3
    }
  },
  methods:{
    handleLoginClick(){
      this.$store.dispatch('setUser')
    }
  },
  computed:{
    isUserLogged(){
      return this.$store.getters.isUserLogged
    },
    user(){
      return this.$store.getters.getUser
    },
    usersLength(){
      return this.$store.getters.getUsersLength
    }
  }
}
</script>