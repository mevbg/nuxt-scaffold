<template>
  <header :class="[$style.root, 'flex items-center justify-between']">
    <LayoutWrapper class="flex w-full items-center justify-center">
      <nuxt-link to="/" class="block" aria-label="Начало – VARNAME.bg">
        <SiteLogo />
      </nuxt-link>
    </LayoutWrapper>
  </header>
</template>

<style module>
:root {
  --ds-header-offset: var(--ds-top-offset);
  /* prettier-ignore */
  --ds-header-height: calc(var(--ds-site-logo-height) + var(--ds-header-offset) * 2);
}

.root {
  padding-block: var(--ds-header-offset);
  background: linear-gradient(0deg, transparent 0%, var(--ds-color-background-primary-base) 99%);
  backdrop-filter: blur(10px);
}
</style>
