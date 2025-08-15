<template>
  <NuxtLayout>
    <Text variant="display" class="text-center">{{ $t('LOCL_SITE_TITLE') }}</Text>

    <ConditionalClientOnly :condition="!serverSideSystemScheme">
      <div class="mt-300x400 flex justify-center gap-300x400">
        <Button
          v-for="(btn, index) in colorSchemeModes"
          :key="index"
          :variant="(!btn && !colorSchemeMode) || colorSchemeMode === btn ? 'solid' : 'outlined'"
          :label="btn"
          @click="setColorSchemeMode(btn)"
        />
      </div>
    </ConditionalClientOnly>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  name: 'home',
  layout: 'basic'
});

const {
  availableModes: colorSchemeModes,
  currentMode: colorSchemeMode,
  serverSideSystemScheme,
  setColorSchemeMode
} = useColorScheme();

// TODO: remove this
// try {
//   const { data: offer, error: offerError } = await useFetch(`/api/offers/${5}`);

//   if (offerError.value) {
//     throw createError(offerError.value);
//   }

//   console.log(offer.value);
// } catch (err) {
//   throw createError(err);
// }
</script>

<style module>
/* .root {} */
</style>
