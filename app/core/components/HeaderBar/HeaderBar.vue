<template>
  <header :class="$style.root">
    <LayoutWrapper class="flex w-full items-center justify-between">
      <div class="flex-1" />

      <nuxt-link to="/" class="block" aria-label="Начална страница">
        <SiteLogo />
      </nuxt-link>

      <div class="flex flex-1 justify-end">
        <ColorSchemeController />
      </div>
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
