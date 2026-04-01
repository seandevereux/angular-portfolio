import type { Meta, StoryObj } from '@storybook/angular';
import { Wave } from './wave';

const meta: Meta<Wave> = {
  title: 'Components/Wave',
  component: Wave,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['header', 'about-top', 'about-bottom', 'footer'],
    },
    fillColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<Wave>;

export const Header: Story = {
  args: {
    type: 'header',
    fillColor: '#182A47',
  },
};

export const AboutTop: Story = {
  args: {
    type: 'about-top',
    fillColor: '#FF4F4F',
  },
};

export const AboutBottom: Story = {
  args: {
    type: 'about-bottom',
    fillColor: '#FF4F4F',
  },
};

export const Footer: Story = {
  args: {
    type: 'footer',
    fillColor: '#131313',
  },
};
