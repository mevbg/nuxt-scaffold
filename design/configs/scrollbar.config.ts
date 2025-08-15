import type { ScrollbarGeneratorParams } from '@mevbg/design-essentials-vendor';

export const scrollbar: ScrollbarGeneratorParams = {
  areaWidth: 16,
  thumbSizeBase: 4,
  thumbSizeOver: 10,
  thumbMinSize: 80,
  scrollbarBackground: 'var(--ds-color-background-primary-base)',
  thumbColor: 'var(--ds-color-background-gray-weak)',
  thumbColorHover: 'var(--ds-color-background-gray-weak)',
  thumbColorActive: 'var(--ds-color-background-gray-medium)'
};
