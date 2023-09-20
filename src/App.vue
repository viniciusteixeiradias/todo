<script lang="ts" setup>
import { ref } from 'vue';

const right = ref<boolean>(true);
</script>

<template>
  <div>TODO</div>
  <q-checkbox v-model="right" label="Label on Right" />
</template>
