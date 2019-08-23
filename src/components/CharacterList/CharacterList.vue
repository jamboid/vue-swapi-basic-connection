<template>
  <div class="cp_CharList">
    <CharacterProfile v-for="character in characters" :data="character" :key="character.url"></CharacterProfile>
  </div>
</template>

<script>

import CharacterProfile from "@/components/CharacterProfile/CharacterProfile"; 

export default {
  name: 'CharacterList',
  components: {
    CharacterProfile
  },
  computed: {
    characters () {
      let characterResults = this.$store.getters.searchResults;

      if(characterResults.results) {
        return characterResults.results;
      } else {
        return [];
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'CharacterList.scss';
</style>
