<script setup lang="ts">
import { computed } from 'vue';
import type { Size } from '../../types/common';
import { COLOR } from '../../types/common';

const props = defineProps<{
  size: Size,
  disabled?: boolean,
  color: COLOR,
}>()

const classes = computed(() => {
  const sizeClass = getSizeClasses(props.size)
  const colorClass = getColorClasses(props.color)
  return `${colorClass} ${sizeClass}`
})

const getSizeClasses = (size: Size): string => {
  switch (size) {
    case 'sm':
      return 'px-3 py-2'
    case 'lg':
      return 'px-4 py-2'
  }
}

const getColorClasses = (color: COLOR): string => {
  switch (color) {
    case COLOR.RAUSCH:
      return 'btn-color-rausch'
    case COLOR.BABU:
      return 'btn-color-babu'
    case COLOR.ARCHES:
      return 'btn-color-arches'
    case COLOR.HOF:
      return 'btn-color-hof'
    case COLOR.FOGGY:
      return 'btn-color-foggy'
  }
}
</script>

<template>
  <button v-bind:class="`${classes} rounded-lg text-white`" v-bind:disabled="props.disabled"><slot/></button>
</template>

<style scoped>
.btn-color-rausch {
  background-color: var(--vt-c-rausch);
}
.btn-color-rausch:hover {
  background-color: var(--vt-c-rausch-soft);
}
.btn-color-babu {
  background-color: var(--vt-c-babu);
}
.btn-color-babu:hover {
  background-color: var(--vt-c-babu-soft);
}
.btn-color-arches {
  background-color: var(--vt-c-arches);
}
.btn-color-arches:hover {
  background-color: var(--vt-c-arches-soft);
}
.btn-color-hof {
  background-color: var(--vt-c-hof);
}
.btn-color-hof:hover {
  background-color: var(--vt-c-hof-soft);
}
.btn-color-foggy {
  background-color: var(--vt-c-foggy);
}
.btn-color-foggy:hover {
  background-color: var(--vt-c-foggy-soft);
}
</style>