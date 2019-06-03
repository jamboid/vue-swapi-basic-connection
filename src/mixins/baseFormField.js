// Base Form Field Mixin

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: false
    }
  }
}