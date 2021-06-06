<template>
  <div id="app">
    <div class="container">
      <div class="btn" v-bind:class="{active: active === item}" v-for="item in list" :key="item" v-on:click="focus(item)">{{item}}</div>
    </div>
    <component v-bind:is="active"></component>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
 margin-top: 50px;
 display: flex;
 justify-content: center;
 .btn {
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    font-weight: 700;
    text-transform: capitalize;
 }
 .active {
    background-color: #42b983;
    color: white;
 }
}
</style>

<script>
import home from '@/components/Home/Home.vue';
import contact from '@/components/Contact/Contact.vue';
import blog from '@/components/Blog/Blog.vue';
export default {
  components: {
    'home': home,
    'contact': contact,
    'blog': blog
  },
  data: () => {
       return {
           list: ["home","blog","contact"],
           active: "home",
       }
    },
    methods: {
        focus(item) {
          this.active=item;
        }
    }
}
</script>
