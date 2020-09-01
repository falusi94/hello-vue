import { shallowMount } from '@vue/test-utils';
import TheFooter from '../TheFooter.vue';

describe('TheFooter.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TheFooter);
    expect(wrapper).toMatchSnapshot();
  });
});
