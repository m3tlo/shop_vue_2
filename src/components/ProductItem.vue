<template>
  <li class="catalog__item">
    <a
      class="catalog__pic"
      href="#"
      @click.prevent="$router.push('/product/' + product.id)">
      <img :alt="product.name" :src="product.img + '.jpg'"/>
    </a>

    <h3 class="catalog__title">
      <a href="#" @click.prevent="$router.push('/product/' + product.id)">
        {{ product.name }}
      </a>
    </h3>

    <span class="catalog__price"> {{ product.price | numberFormating }} ₽</span>

    <ul class="colors">
      <li
        v-for="color in product.colors"
        :key="color.name"
        class="colors__item">
        <label class="colors__label">
          <input
            v-model="currentColor"
            :value="color.name"
            class="colors__radio sr-only"
            type="radio"/>
          <span
            :style="{ backgroundColor: color.color }"
            class="colors__value"
            style="">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import numberFormating from '@/helpers/numberFormating'

export default {
  name: 'ProductItem',
  props: ['product'],
  data: () => ({
    currentColor: ''
  }),
  filters: {
    numberFormating
  }
}
</script>

<style scoped>
.colors__value {
  border: 1px solid gray;
}
</style>
