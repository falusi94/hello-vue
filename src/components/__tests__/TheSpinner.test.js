import { shallowMount } from '@vue/test-utils';
import TheSpinner from '../TheSpinner.vue';

describe('TheSpinner.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TheSpinner);
    expect(wrapper).toMatchSnapshot();
  });
});
