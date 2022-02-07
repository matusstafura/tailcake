<template>
  <ButtonPrimary></ButtonPrimary>
  <button-warning></button-warning>
  <button-add-to-cart></button-add-to-cart>
</template>

<script>
import ButtonAddToCart from "./Buttons/ButtonAddToCart.vue";
import ButtonPrimary from "./Buttons/ButtonPrimary.vue";
import ButtonWarning from "./Buttons/ButtonWarning.vue";
export default {
  components: { ButtonWarning, ButtonPrimary, ButtonAddToCart },
};
</script>

<style scoped></style>
