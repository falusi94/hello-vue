import { shallowMount, mount } from '@vue/test-utils';
import BaseSuspend from '../BaseSuspend.vue';
import TheSpinner from '../TheSpinner.vue';

const setup = (propsData = { isLoading: true }) => mount(BaseSuspend, {
  slots: {
    default: '<div>CONTENT</div>',
  },
  propsData,
});

describe('BaseSuspend.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(BaseSuspend);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when isLoading is set to false', () => {
    it('shows the content', () => {
      const wrapper = setup({ isLoading: false });

      const spinner = wrapper.findComponent(TheSpinner);
      expect(spinner.exists()).toBe(false);
      expect(wrapper.text()).toContain('CONTENT');
    });
  });

  describe('when isLoading is set to true', () => {
    it('shows the spinner', () => {
      const wrapper = setup({ isLoading: true });

      const spinner = wrapper.findComponent(TheSpinner);
      expect(spinner.exists()).toBe(true);
      expect(wrapper.text()).not.toContain('CONTENT');
    });
  });
});
