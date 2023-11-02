<template>
  <li class="catalog__item">

      <a
        @click.prevent="$router.push('/product/' + product.id)"
        class="catalog__pic"
        href="#">
        <img :alt="product.name" :src="product.img + '.jpg'">
      </a>

      <h3 class="catalog__title">
        <a
          @click.prevent="$router.push('/product/' + product.id)"
          href="#"
        >
          {{ product.name }}
        </a>
      </h3>

    <span class="catalog__price"> {{ product.price }} ₽</span>

    <ul class="colors">
      <AppColorSelect
        :product="product"
        :color="color"
      />

    </ul>
  </li>
</template>

<script>
import AppColorSelect from '@/components/app/AppColorSelect'
export default {
  name: 'ProductItem',
  components: { AppColorSelect },
  props: ['product'],
  data: () => ({
    color: 'black'
  })

}
</script>

<style scoped>

</style>
