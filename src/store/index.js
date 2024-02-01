import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/data/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: [
      {
        productId: 1,
        amount: 3
      },
      {
        productId: 2,
        amount: 3
      }
    ]
  },
  getters: {
    cartDetailProduct (state) {
      return state.cartProducts.map((item) => {
        return {
          ...item,
          product: products.find((p) => p.id === item.productId)
        }
      })
    },
    cartTotalPrice (state, getters) {
      return getters.cartDetailProduct.reduce(
        (acc, item) => item.product.price * item.amount + acc,
        0
      )
    }
  },
  mutations: {
    addProductToCart (state, {
      productId,
      amount
    }) {
      const item = state.cartProducts.find(
        (item) => item.productId === productId
      )
      if (item) {
        item.amount += amount
      } else {
        state.cartProducts.push({
          productId,
          amount
        })
      }
    }
  },
  actions: {},
  modules: {}
})
