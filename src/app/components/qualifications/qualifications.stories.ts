import type { Meta, StoryObj } from '@storybook/angular';
import { Qualifications } from './qualifications';

const meta: Meta<Qualifications> = {
  title: 'Components/Qualifications',
  component: Qualifications,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Qualifications>;

export const Default: Story = {};
