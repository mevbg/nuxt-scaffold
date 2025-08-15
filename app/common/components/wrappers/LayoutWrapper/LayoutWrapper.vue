<template>
  <div :class="[$style.root, 'w-full', 'px-200x600', 'mx-auto']">
    <slot />
  </div>
</template>

<style module>
.root {
  max-width: var(--ds-breakpoint-layout-maximum);
}
</style>
