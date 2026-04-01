import type { Meta, StoryObj } from '@storybook/angular';
import { Carousel } from './carousel';

const meta: Meta<Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Carousel>;

export const Default: Story = {};

export const SecondSlide: Story = {
  play: async ({ canvasElement }) => {
    const nextButton = canvasElement.querySelector('.carousel-btn.next') as HTMLButtonElement;
    if (nextButton) {
      nextButton.click();
    }
  },
};
