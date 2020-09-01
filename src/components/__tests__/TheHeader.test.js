import { shallowMount } from '@vue/test-utils';
import TheHeader from '../TheHeader.vue';

describe('TheHeader.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TheHeader);
    expect(wrapper).toMatchSnapshot();
  });
});
