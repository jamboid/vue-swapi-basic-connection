<template>
  <div id="app" class="gd_Base">
    <SearchForm></SearchForm>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm/SearchForm"; 

export default {
  name: 'app',
  components: {
    SearchForm 
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:5%;
}
</style>
