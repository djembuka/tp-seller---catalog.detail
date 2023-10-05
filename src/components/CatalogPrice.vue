<template>
  <div class="b-catalog-detail__price-block">
    <div
      class="b-catalog-detail__price i-sale text-center"
      v-if="this.$store.getters.activeTradeOffer.price"
    >
      {{ this.$store.getters.activeTradeOffer.price }}
    </div>
    <div class="row">
      <div class="col-xs-6">
        <div
          class="b-catalog-detail__old-price text-left"
          v-if="this.$store.getters.activeTradeOffer['old-price']"
        >
          <s>{{ this.$store.getters.activeTradeOffer['old-price'] }}</s
          ><span>Старая цена</span>
        </div>
      </div>
      <div class="col-xs-6">
        <div
          class="b-catalog-detail__benefit text-right"
          v-if="this.$store.getters.activeTradeOffer['discount-diff']"
        >
          {{ this.$store.getters.activeTradeOffer['discount-diff']
          }}<span>Ваша выгода</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.b-catalog-detail__price-block {
  padding: 0 0 2px;
}
.b-catalog-detail__price-block .row {
  margin-bottom: 0;
}
.b-catalog-detail__price {
  font-size: 27pt;
  margin-bottom: 3px;
}
.b-catalog-detail__price.i-sale {
  color: #c33;
}
.b-catalog-detail__old-price,
.b-catalog-detail__benefit {
  font-size: 10.5pt;
}
.b-catalog-detail__old-price span,
.b-catalog-detail__benefit span {
  display: block;
  font-size: 7pt;
}
</style>
