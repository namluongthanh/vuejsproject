<script setup lang="ts">
import CreateButton from './components/buttons/CreateButton.vue';
import FilterButton from './components/buttons/FilterButton.vue';
import SearchButton from './components/buttons/SearchButton.vue';
import LanguageButton from './components/buttons/LanguageButton.vue';
</script>

<template>
  <div class="bg-white w-full">
    <div class="flex column flex-col items-center justify-center gap-4">
      <SearchButton />
      <CreateButton />
      <FilterButton />
      <LanguageButton />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
