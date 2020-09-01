import { shallowMount } from '@vue/test-utils';
import TheHeaderButton from '../TheHeaderButton.vue';

describe('TheHeaderButton.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TheHeaderButton);
    expect(wrapper).toMatchSnapshot();
  });
});
