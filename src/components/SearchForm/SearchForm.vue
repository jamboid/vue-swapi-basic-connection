<template>
  <form class="cp_SearchForm" v-on:submit.prevent=handleFormSubmit>
    <TextField id="term" v-model="term" label="Who are you looking for?" placeholder="e.g. Kyle Katarn" :status="$v.term.$error ? 'error' : null" @blur="$v.term.$touch()" @input="$v.term.$touch()"></TextField>
    <Button label="Search" mode="basic"></Button>
  </form>
</template> 

<script>
import { required } from 'vuelidate/lib/validators';

import { CONSTANTS } from "@/config";

import FormMixin from '@/mixins/formValidation';
import Button from "@/components/FormButton/FormButton.vue";
import TextField from "@/components/FormTextField/FormTextField.vue"; 

import { getJSON } from "@/modules/Ajax";

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
      
      // Check validation for the whole form and return out of this
      // function if there are any errors..
      this.$v.$touch();
      if(this.$v.$anyError) {
        return
      }

      if(this.$v.$anyError || !this.isActive) {
        const endpoint = CONSTANTS.API.BASE_URL + CONSTANTS.API.PEOPLE_SEARCH_URL + this.term;

        console.log(endpoint);
        
        getJSON(endpoint)
        .then(data => {
          this.$store.commit("updateSearchResults", data);
        });
      }
    }
  }  
}

</script>

<style lang="scss" scoped>
  @import 'SearchForm.scss';
</style>
