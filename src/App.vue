<template>
  <div id="app" class="gd_Base">
    <SearchForm></SearchForm>
    <CharacterList></CharacterList>
    <FormReport reportTitle="Search Results"></FormReport>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm/SearchForm";
import CharacterList from "@/components/CharacterList/CharacterList"; 
import FormReport from "@/components/FormReport/FormReport";

export default {
  name: 'app',
  components: {
    SearchForm,
    CharacterList,
    FormReport 
  }
}
</script>

<style lang="scss">
#app {
  font-family: $bodyfontfamily;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:5%;
}
</style>
