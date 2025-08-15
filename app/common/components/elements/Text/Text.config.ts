import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Text component
const TextStyles = {
  base: null,
  variant: {
    display: 'text-display font-ibmplexsans-medium leading-120',
    head: 'text-head font-ibmplexsans-medium leading-120',
    title: 'text-title font-ibmplexsans-medium leading-120',
    subtitle: 'text-subtitle font-ibmplexsans-medium leading-120',
    accent: 'text-accent font-ibmplexsans-medium leading-120',
    body: 'text-body font-ibmplexsans-regular leading-140',
    label: 'text-label font-ibmplexsans-medium leading-100',
    note: 'text-note font-ibmplexsans-regular leading-100',
    button: 'text-button font-ibmplexsans-medium leading-100 uppercase tracking-bit',
    script: 'text-script font-ibmplexsans-regular leading-100'
  }
};

// Define default variants for the Text component
const TextDefaultVariants = {
  variant: 'body',
  as: null
} as const;

// Setup CVA for the Text component
const { base: TextBaseStyles, ...TextVariantsStyles } = TextStyles;
const TextVariants = cva(TextBaseStyles, {
  defaultVariants: TextDefaultVariants,
  variants: { ...TextVariantsStyles },
  compoundVariants: []
});

// Define type for the Text component
type TextVariantProps = VariantProps<typeof TextVariants>;

// Define Text tag options
const TextTagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'strong', 'label', 'p'] as const;
type TextTag = (typeof TextTagList)[number];
enum TextTypeDefaultTag {
  Display = 'h1',
  Head = 'h2',
  Title = 'h3',
  Subtitle = 'h4',
  Body = 'p',
  Label = 'label',
  Button = 'span'
}

// Export Text styles and variants
export { TextDefaultVariants, TextStyles, TextVariants, type TextVariantProps };

// Export Text tag options
export { TextTagList, TextTypeDefaultTag, type TextTag };
