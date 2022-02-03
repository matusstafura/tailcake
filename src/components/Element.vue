<template>
  <div>
    <div v-html="code" v-show="!mode"></div>
    <div v-show="mode">
      <pre>
        {{ code }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode", "code"],
};
</script>

<style></style>
