<template>
  <form class="cp_SearchForm" v-on:submit.prevent=handleFormSubmit>
    <TextField id="term" v-model="term" label="What are you looking for?" placeholder="e.g. Kyle Katarn" :status="$v.term.$error ? 'error' : null" @blur="$v.term.$touch()" @input="$v.term.$touch()"></TextField>
    <Button label="Search" mode="basic"></Button>
  </form>
</template> 

<script>
import { required } from 'vuelidate/lib/validators';

import FormMixin from '@/mixins/formValidation';

import Button from "@/components/FormButton/FormButton.vue";
import TextField from "@/components/FormTextField/FormTextField.vue"; 

export default {
  name: "SearchForm",
  mixins: [FormMixin],
  data: function () {
    return {
      term:''
    }
  },
  components: {
    TextField,
    Button
  },
  validations: {
    term: {
      required 
    }
  },
  methods: {
    handleFormSubmit: function () {
      if(this.$v.$anyError || !this.isActive) {
        return;
      }
    }
  }  
}

</script>

<style lang="scss" scoped>
  @import 'SearchForm.scss';
</style>
