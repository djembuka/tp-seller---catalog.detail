<template>
  <div id="buyDetailPopup" ref="popup">
    <div id="buyDetailPopupOpaco" @click="close"></div>
    <div id="buyDetailPopupWindow">
      <div class="b-catalog-detail-popup__close" @click="close"></div>
      <div class="b-catalog-detail-popup__body">
        Товар добавлен в корзину, <a href="">оформить заказ</a>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$refs.popup.removeClass('i-animate');

      //focus the page
      document.querySelector('html').classList.remove('i-blur');

      setTimeout(function () {
        this.$refs.popup.removeClass('i-show');
      }, 500);
    },
  },
};
</script>

<style></style>
