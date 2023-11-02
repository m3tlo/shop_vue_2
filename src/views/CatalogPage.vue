<template>
  <div class="home">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        {{ filterProducts.length }} товар
      </span>
    </div>

    <div class="content__catalog">
      <product-filter
        :category-id.sync="filterCategoryId"
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :color.sync="filterColor"
        :all-colors="colors"
      />
      <product-catalog
        :filterProducts="filterProducts"
      />
    </div>
  </div>
</template>

<script>
import ProductCatalog from '@/components/ProductCatalog'
import ProductFilter from '@/components/ProductFilter'
import colors from '@/data/colors'
import products from '@/data/products'

export default {
  components: {
    ProductFilter,
    ProductCatalog
  },
  data: () => ({
    colors,
    filterPriceFrom: 0,
    filterPriceTo: 0,
    filterCategoryId: 0,
    filterColor: ''

  }),
  computed: {
    filterProducts () {
      let filteredProducts = products
      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price >= this.filterPriceFrom)
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price <= this.filterPriceTo)
      }
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === this.filterCategoryId)
      }
      if (this.filterColor) {
        filteredProducts = filteredProducts.filter(product => product.colors.find(color => color.name === this.filterColor))
      }
      return filteredProducts
    }
  }
}
</script>
