import { shallowMount } from '@vue/test-utils'
import PersonDescription from '@/components/PersonDescription.vue'

describe('PersonDescription.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(PersonDescription, {
      person: { 
        name: "Luke Skywalker",
        hair_color: "blond",
        eye_color: "blue",
        skin_color: "fair"
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
