<template>
  <div class="cp_TextField" :class="{ [`cp_TextField--${status}`]: status }">
    <label class="cp_TextField__label" :for="id" >{{ label }}</label>
    <input
      type="text"
      :id="id"
      class="cp_TextField__input"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-on:blur="$emit('blur', $event.target.value)"
      >
  </div>
</template>

<script>
import BaseFormField from '@/mixins/baseFormField';

export default {
  name: "FormTextField",
  mixins: [BaseFormField]  
}
</script>

<style lang="scss" scoped>
  @import "FormTextField.scss";
</style>

