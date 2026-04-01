import type { Meta, StoryObj } from '@storybook/angular';
import { Header } from './header';

const meta: Meta<Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Header>;

export const Default: Story = {};

export const Sticky: Story = {
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('app-header');
    if (component) {
      window.scrollTo(0, 150);
    }
  },
};
