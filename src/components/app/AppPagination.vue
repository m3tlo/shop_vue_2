<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        :class="{'pagination__link--disabled': page === 1}"
        aria-label="Предыдущая страница"
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="paginateArrow('down')"
      >
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>

    <li
      v-for="pageNum in pages"
      :key="pageNum"
      class="pagination__item"
    >
      <a
        :class="{'pagination__link--current': pageNum === page}"
        class="pagination__link"
        href="#"
        @click.prevent="paginate(pageNum)"
      >
        {{ pageNum }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        :class="{'pagination__link--disabled': page === pages}"
        aria-label="Следующая страница"
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="paginateArrow('up')">
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MyPagination',
  model: {
    prop: 'page',
    event: 'paginate'
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages () {
      console.log()
      return Math.ceil(this.count / this.perPage)
    }
  },
  methods: {
    paginate (page) {
      this.$emit('paginate', page)
    },
    paginateArrow (event) {
      let page = this.page

      if (event === 'up' && page !== this.pages) {
        page += 1
        console.log(page)
      } else if (event === 'down' && page !== 1) {
        // eslint-disable-next-line no-unused-vars
        page -= 1
        console.log(page)
      }
      this.$emit('paginate', page)
    }
  }
}
</script>

<style scoped>

</style>
