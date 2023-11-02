<template>
  <div>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#">
            Мобильный транспорт
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Смартфон Xiaomi Mi Mix 3 6/128GB
          </a>
        </li>
      </ul>
    </div>
    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img alt="Название товара" height="570" :src="product.img + '.jpg'"
               width="570">
        </div>
        <ul class="pics__list">
          <li class="pics__item">
            <a class="pics__link pics__link--current" href="">
              <img alt="Название товара" height="98" :src="product.img + '-square-1.jpg'"
                   :srcset="product.img + '-square-1@2x.jpg 2x'"
                   width="98">
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="">
              <img alt="Название товара" height="98" :src="product.img + '-square-2.jpg'"
                   :srcset="product.img + '-square-2@2x.jpg 2x'"
                   width="98">
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="">
              <img alt="Название товара" height="98" :src="product.img + '-square-3.jpg'"
                   :srcset="product.img + '-square-3@2x.jpg 2x'"
                   width="98">
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="#">
              <img alt="Название товара" height="98" :src="product.img + '-square-4.jpg'"
                   :srcset="product.img + '-square-4@2x.jpg 2x'"
                   width="98">
            </a>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{product.article}}</span>
        <h2 class="item__title">
          {{ product.name }}
        </h2>
        <div class="item__form">
          <form action="#" class="form" method="POST">
            <b class="item__price">
              {{ product.price }}₽
            </b>

            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <app-color-select
                :product="product"
                :color.sync="color"
              />
            </fieldset>

            <fieldset v-if="product.memory" class="form__block">
              <legend class="form__legend">Объемб в ГБ:</legend>
              <ul  class="sizes sizes--primery">
                <li v-for="memory in product.memory" :key="memory" class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" name="sizes-item" type="radio" :value="memory">
                    <span class="sizes__value">
                      {{memory}}GB
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button @click.prevent="decrementCount" aria-label="Убрать один товар" type="button">
                  <svg fill="currentColor" height="12" width="12">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input min="0" name="count" type="text" v-model="productCount">

                <button @click.prevent="incrementCount" aria-label="Добавить один товар" type="button">
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
            <a class="tabs__link tabs__link--current">
              Описание
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Характеристики
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Гарантия
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Оплата и доставка
            </a>
          </li>
        </ul>

        <div class="item__content">
          <p>
            {{product.shortDescription}}
          </p>

          <a href="#">
            Все характеристики
          </a>

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
import products from '@/data/products'
import AppColorSelect from '@/components/app/AppColorSelect'

export default {
  name: 'ProductPage',

  components: {
    AppColorSelect
  },
  data: () => ({
    color: '',
    productCount: 1
  }),
  computed: {
    product () {
      let product = products
      product = product.find(pr => pr.id === Number(this.$route.params.id))
      console.log(this.$route.params.id)

      return product
    }
  },
  methods: {
    incrementCount () {
      this.productCount += 1
      if (this.productCount < 0) {
        this.productCount = 0
      }
      console.log(this.productCount)
    },
    decrementCount () {
      this.productCount -= 1
      if (this.productCount < 0) {
        this.productCount = 0
      }
      console.log(this.productCount)
    }
  }
}

</script>

<style scoped>
.form__counter button{
  cursor: pointer;
}
</style>
