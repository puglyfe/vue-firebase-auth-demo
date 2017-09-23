<template>
  <div id="app">
    <img src="../assets/logo.png">
    <template v-if="$store.state.user">
      <div class="logout">
        <button @click="logout">Logout</button>
      </div>
      <router-view></router-view>
    </template>
    <template v-else>
      <div class="login">
        <Auth />
      </div>
    </template>
  </div>
</template>

<script>
import Auth from './Auth';

export default {
  name: 'app',
  components: {
    Auth,
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
    },
  },

  mounted() {
    this.$store.dispatch('AUTH_CHECK');
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.login {
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.logout {
  margin: 100px 0;
  text-align: center;
}
</style>
