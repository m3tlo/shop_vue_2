<template>
  <section class="catalog">

    <product-list :products="products"/>
    <app-pagination
      v-model="page"
      :count="countProducts"
      :per-page="productsPerPage"
    />
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'ProductsCatalog',
  components: {
    ProductList
  },
  props: ['filterProducts'],
  data: () => ({
    page: 1,
    productsPerPage: 6
  }),
  computed: {
    products () {
      const offset = (this.page - 1) * this.productsPerPage
      return this.filterProducts.slice(offset, offset + this.productsPerPage)
    },
    countProducts () {
      return this.filterProducts.length
    }
  }

}
</script>

<style scoped>

</style>
