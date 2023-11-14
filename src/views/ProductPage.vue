<template>
  <div>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link to="/">
            <a class="breadcrumbs__link" href="index.html"> Каталог </a>
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link to="/">
            <a class="breadcrumbs__link" href="#">
              {{ category }}
            </a>
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            {{ product.name }}
          </a>
        </li>
      </ul>
    </div>
    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img
            :src="product.img + '.jpg'"
            alt="Название товара"
            height="570"
            width="570" />
        </div>
        <ul class="pics__list">
          <li class="pics__item">
            <a class="pics__link pics__link--current" href="">
              <img
                :src="product.img + '-square-1.jpg'"
                :srcset="product.img + '-square-1@2x.jpg 2x'"
                alt="Название товара"
                height="98"
                width="98" />
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="">
              <img
                :src="product.img + '-square-2.jpg'"
                :srcset="product.img + '-square-2@2x.jpg 2x'"
                alt="Название товара"
                height="98"
                width="98" />
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="">
              <img
                :src="product.img + '-square-3.jpg'"
                :srcset="product.img + '-square-3@2x.jpg 2x'"
                alt="Название товара"
                height="98"
                width="98" />
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="#">
              <img
                :src="product.img + '-square-4.jpg'"
                :srcset="product.img + '-square-4@2x.jpg 2x'"
                alt="Название товара"
                height="98"
                width="98" />
            </a>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">
          {{ product.name }}
        </h2>
        <div class="item__form">
          <form
            @submit.prevent="addToCart"
            action="#"
            class="form"
            method="POST">
            <b class="item__price"> {{ product.price | numberFormating }}₽ </b>

            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
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
                      type="radio" />
                    <span
                      :style="{ backgroundColor: color.color }"
                      class="colors__value"
                      style="">
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <fieldset v-if="product.memory" class="form__block">
              <legend class="form__legend">Объемб в ГБ:</legend>
              <ul class="sizes sizes--primery">
                <li
                  v-for="memory in product.memory"
                  :key="memory"
                  class="sizes__item">
                  <label class="sizes__label">
                    <input
                      :value="memory"
                      class="sizes__radio sr-only"
                      name="sizes-item"
                      type="radio" />
                    <span class="sizes__value"> {{ memory }}GB </span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button
                  aria-label="Убрать один товар"
                  type="button"
                  @click.prevent="decrementCount">
                  <svg fill="currentColor" height="12" width="12">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input
                  v-model.number="productCount"
                  min="0"
                  name="count"
                  type="text" />

                <button
                  aria-label="Добавить один товар"
                  type="button"
                  @click.prevent="incrementCount">
                  <svg fill="currentColor" height="12" width="12">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button class="button button--primery" type="submit">
                В корзину
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current"> Описание </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Характеристики </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Гарантия </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Оплата и доставка </a>
          </li>
        </ul>

        <div class="item__content">
          <p>
            {{ product.shortDescription }}
          </p>

          <a href="#"> Все характеристики </a>

          <h3>Что это?</h3>

          <p>
            {{ product.description }}
          </p>

          <h3>Дизайн</h3>

          <p>
            {{ product.design }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import products from '@/data/products';
import categories from '@/data/categories';
import numberFormating from '@/helpers/numberFormating';

export default {
  name: 'ProductPage',
  data: () => ({
    currentColor: '',
    productCount: 1
  }),
  filters: {
    numberFormating
  },
  computed: {
    product() {
      return products.find((pr) => pr.id === Number(this.$route.params.id));
    },
    category() {
      return categories.find((cat) => cat.id === this.product.categoryId).title;
    }
  },
  methods: {
    incrementCount() {
      this.productCount += 1;
      if (this.productCount < 0) {
        this.productCount = 0;
      }
    },
    decrementCount() {
      this.productCount -= 1;
      if (this.productCount < 0) {
        this.productCount = 0;
      }
    },
    addToCart() {
      this.$store.commit('addProductToCart', {
        productId: this.product.id,
        amount: this.productCount
      });
    }
  }
};
</script>

<style scoped>
.form__counter button {
  cursor: pointer;
}
</style>
