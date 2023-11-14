<template>
  <router-link aria-label="Корзина с товарами" class="header__cart" to="/cart">
    <svg fill="currentColor" height="21" width="30">
      <use xlink:href="#icon-cart"></use>
    </svg>
    <span aria-label="Количество товаров" class="header__count">{{
      $store.state.cartProducts.length
    }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'AppCartBtn'
};
</script>

<style scoped></style>
