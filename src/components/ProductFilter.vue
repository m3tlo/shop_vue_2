<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form
      action="#"
      class="filter__form form"
      method="get"
      name=""
      @submit.prevent="submit">
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <label class="form__label form__label--price">
          <input
            v-model.number="currentPriceForm"
            class="form__input"
            name="min-price"
            type="text" />
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input
            v-model.number="currentPriceTo"
            class="form__input"
            name="max-price"
            type="text" />
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>
        <label class="form__label form__label--select">
          <select
            v-model.number="currentCategoryId"
            class="form__select"
            name="category"
            type="text">
            <option value="0">Все категории</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.title }}
            </option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li v-for="c in allColors" :key="c.name" class="colors__item">
            <label class="colors__label">
              <input
                v-model="currentColor"
                :value="c.name"
                class="colors__radio sr-only"
                name="color"
                type="radio" />
              <span :style="{ backgroundColor: c.color }" class="colors__value">
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Объемб в ГБ</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                checked=""
                class="check-list__check sr-only"
                name="volume"
                type="checkbox"
                value="8" />
              <span class="check-list__desc">
                8
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                name="volume"
                type="checkbox"
                value="16" />
              <span class="check-list__desc">
                16
                <span>(461)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                name="volume"
                type="checkbox"
                value="32" />
              <span class="check-list__desc">
                32
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                name="volume"
                type="checkbox"
                value="64" />
              <span class="check-list__desc">
                64
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                name="volume"
                type="checkbox"
                value="128" />
              <span class="check-list__desc">
                128
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                name="volume"
                type="checkbox"
                value="264" />
              <span class="check-list__desc">
                264
                <span>(313)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button
        class="filter__reset button button--second"
        type="reset"
        @click="reset">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
import categories from '@/data/categories';

export default {
  name: 'ProductFilter',
  props: ['priceFrom', 'priceTo', 'categoryId', 'color', 'allColors'],
  data: () => ({
    currentPriceForm: 0,
    currentPriceTo: 0,
    currentCategoryId: 0,
    currentColor: ''
  }),
  computed: {
    categories() {
      return categories;
    }
  },
  methods: {
    submit() {
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:priceFrom', this.currentPriceForm);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:color', this.currentColor);
      console.log(this.currentColor);
    },
    reset() {
      this.$emit('update:categoryId', (this.currentCategoryId = 0));
      this.$emit('update:priceFrom', (this.currentPriceForm = 0));
      this.$emit('update:priceTo', (this.currentPriceTo = 0));
      this.$emit('update:color', (this.currentColor = 'black'));
    }
  }
  // watch: {
  //   priceFrom (value) {
  //     this.currentPriceFrom = value
  //   },
  //   currentPriceTo (value) {
  //     this.currentPriceTo = value
  //   },
  //   currentCategoryId (value) {
  //     this.currentCategoryId = value
  //   }
  // }
};
</script>

<style scoped></style>
