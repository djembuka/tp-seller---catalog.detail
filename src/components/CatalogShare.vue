<template>
  <div class="b-catalog-detail__share" ref="share">
    <h5>Поделиться</h5>
    <div
      data-services="collections,vkontakte,facebook,odnoklassniki,moimir,gplus,viber,whatsapp,skype,telegram"
      class="ya-share2"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //insert script
    let script1 = document.createElement('script');
    script1.src = '//yastatic.net/es5-shims/0.0.2/es5-shims.min.js';
    this.$refs.share.appendChild(script1);

    let script2 = document.createElement('script');
    script2.src = '//yastatic.net/share2/share.js';
    this.$refs.share.appendChild(script2);
  },
};
</script>

<style>
.b-catalog-detail__share {
  text-align: center;
}
.b-catalog-detail__share h5 {
  font-size: 0.65rem;
  font-weight: 400;
}
</style>
