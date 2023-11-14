<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" to="/"> Каталог</router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info">
        {{ $store.state.cartProducts.length }} товара
      </span>
    </div>

    <section class="cart">
      <form action="#" class="cart__form form" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <li
              v-for="item in products"
              :key="item.productId"
              class="cart__item product">
              <div class="product__pic">
                <img
                  :src="item.product.img + '.jpg'"
                  :srcset="item.product.img + '-square-3@2x.jpg 2x'"
                  alt="Название товара"
                  height="120"
                  width="120" />
              </div>
              <h3 class="product__title">
                {{ item.product.name }}
              </h3>
              <p v-if="item.product.memory" class="product__info">
                Объем: <span>128GB</span>
              </p>
              <span class="product__code">
                Артикул: {{ item.product.id }}
              </span>

              <div class="product__counter form__counter">
                <button aria-label="Убрать один товар" type="button">
                  <svg fill="currentColor" height="10" width="10">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input
                  v-model="item.amount"
                  name="count"
                  type="text"
                  value="0" />

                <button aria-label="Добавить один товар" type="button">
                  <svg fill="currentColor" height="10" width="10">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price">
                {{ (item.product.price * item.amount) | numberFormating }}
                ₽
              </b>

              <button
                aria-label="Удалить товар из корзины"
                class="product__del button-del"
                type="button">
                <svg fill="currentColor" height="20" width="20">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы посчитаем стоимость доставки на следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ totalPrice | numberFormating }} ₽</span>
          </p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import numberFormating from '@/helpers/numberFormating';
import { mapGetters } from 'vuex';

export default {
  name: 'CartPage',

  filters: {
    numberFormating
  },
  computed: {
    ...mapGetters({
      products: 'cartDetailProduct',
      totalPrice: 'cartTotalPrice'
    })
  }
};
</script>

<style scoped></style>
