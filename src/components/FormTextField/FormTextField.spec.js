import { shallowMount } from '@vue/test-utils';
import FormTextField from '@/components/FormTextField/FormTextField';

const testProps = {
  id: "name",
  label: "Your Name",
  value: "Jamie",
  placeholder: "e.g. Text",
  status: "error"
}

describe('FormTextField.vue', () => {
  it('renders props.label as field label', () => {
    const textField = shallowMount(FormTextField, {
      propsData: testProps
    }) 
    expect(textField.find('label').text()).toMatch(testProps.label)
  })
})

describe('FormTextField.vue', () => {
  it('renders props.id as id attribute on the input element', () => {
    const textField = shallowMount(FormTextField, {
      propsData: testProps
    })
    expect(textField.find('input').attributes().id).toMatch(testProps.id)
  })
})

describe('FormTextField.vue', () => {
  it('renders props.placeholder as placeholder attribute on the input element', () => {
    const textField = shallowMount(FormTextField, {
      propsData: testProps
    })
    expect(textField.find('input').attributes().placeholder).toMatch(testProps.placeholder)
  })
})

describe('FormTextField.vue', () => {
  it('sets props.value correctly', () => {
    const textField = shallowMount(FormTextField, {
      propsData: testProps 
    })
    expect(textField.props('value')).toBe(testProps.value)
  })
})

describe('FormTextField.vue', () => {
  it('renders props.id as for attribute on the label element', () => {
    const textField = shallowMount(FormTextField, {
      propsData: testProps
    })
    expect(textField.find('label').attributes().for).toMatch(testProps.id)
  })
})

describe('FormTextField.vue', () => {
  it('renders props.status as modifying class on root element', () => {
    const textField = shallowMount(FormTextField, {
      propsData: testProps
    })
    expect(textField.classes()).toContain('cp_TextField--' + testProps.status);
  })
})