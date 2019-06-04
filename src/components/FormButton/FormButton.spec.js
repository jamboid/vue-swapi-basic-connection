import { shallowMount } from '@vue/test-utils'
import FormButton from '@/components/FormButton/FormButton'

const testProps = {
  label: "Send now", 
  mode: "basic"
}

describe('FormButton.vue', () => {
  it('renders props.label as button text when passed', () => {
    const button = shallowMount(FormButton, {
      propsData: testProps
    })
    expect(button.text()).toMatch(testProps.label)
  })
})

describe('FormButton.vue', () => {
  it('renders props.mode as modifying class', () => {
    const button = shallowMount(FormButton, {
      propsData: testProps
    })
    expect(button.classes()).toContain('ob_FormButton--' + testProps.mode);
  })
})
