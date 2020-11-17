import { shallowMount } from '@vue/test-utils'
import sample1 from '@/views/sample1.vue'

describe('sample1.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {}
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
