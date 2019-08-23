<template>
  <div class="cp_CharProfile">
    <h2 class="cp_CharProfile__name">{{ data.name }}</h2> 
  </div>
</template>

<script>
export default {
  name: 'CharacterProfile',
  props: {
    data: {
      type:Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'CharacterProfile.scss';
</style>
