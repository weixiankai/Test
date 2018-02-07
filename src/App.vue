<template>
  <div>
  	<my-header></my-header>
  	<my-nav></my-nav>
   <!-- <router-view/>-->
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myNav from './components/myNav'
export default {
  name: 'app',
  components:{
  	myHeader,
  	myNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
