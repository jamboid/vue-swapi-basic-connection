<template>
  <div class="cp_TextArea" :class="{ [`cp_TextArea--${status}`]: status }">
    <label class="cp_TextArea__label" :for="id" >{{ label }}</label>
    <textarea
      type="text"
      :id="id"
      class="cp_TextArea__input"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      ></textarea>
  </div>
</template>

<script>
import BaseFormField from '@/mixins/baseFormField';

export default {
  name: "FormTextArea",
  mixins: [BaseFormField]  
}
</script>

<style lang="scss" scoped>
  @import "FormTextArea.scss";
</style>

