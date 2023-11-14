<template>
  <ul class="colors">
    <li v-for="color in product.colors" :key="color.name" class="colors__item">
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
</template>

<script>
export default {
  name: 'ColorSelect',
  props: ['product', 'color'],
  data: () => ({
    currentColor: 'black'
  }),
  watch: {
    color(value) {
      this.$emit('update:color', this.currentColor);
      this.currentColor = value;
      console.log(this.currentColor);
    }
  }
  // methods: {
  //   test () {
  //     this.$emit('update:color', this.currentColor)
  //   }
  // }
};
</script>

<style scoped>
.colors__value {
  border: 1px solid gray;
}
</style>
