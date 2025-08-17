<template>
  <span :class="$style.root">
    <LogoSVG />
  </span>
</template>

<script setup>
import LogoSVG from '#core/assets/images/site-logo.svg';
</script>

<style module>
:root {
  --ds-site-logo-ratio: 1;
  --ds-site-logo-height: calc(var(--ds-dimensions-site-logo) / var(--ds-site-logo-ratio));
}

.root {
  position: relative;
  display: block;
  aspect-ratio: var(--ds-site-logo-ratio);
  width: var(--ds-dimensions-site-logo);
}

.root::after {
  content: '';

  position: absolute;
  z-index: 0;
  inset: -3px;

  border-radius: 5px;

  background-color: var(--ds-color-primitive-white);
}

.root svg {
  position: relative;
  z-index: 1;

  width: 100%;
  height: auto;

  background-color: var(--ds-color-primitive-white);
}
</style>
