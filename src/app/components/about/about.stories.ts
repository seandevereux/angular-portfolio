import type { Meta, StoryObj } from '@storybook/angular';
import { About } from './about';

const meta: Meta<About> = {
  title: 'Components/About',
  component: About,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<About>;

export const Default: Story = {};
