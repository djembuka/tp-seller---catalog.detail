<template>
  <div class="b-catalog-detail__num" v-html="numContent()"></div>
</template>

<script>
export default {
  methods: {
    numContent() {
      if (this.$store.getters.activeTradeOffer.num + '' === '0') {
        return 'Нет в наличии.';
      } else {
        return `В наличии:
          <span>
            ${this.$store.getters.activeTradeOffer.num}
          </span>
        шт.`;
      }
    },
  },
};
</script>

<style>
.b-catalog-detail__num {
  font-size: 0.65rem;
  font-weight: 400;
  text-align: center;
}
</style>
