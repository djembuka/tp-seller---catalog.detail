<template>
  <div
    class="row b-catalog-detail__subscribe-block"
    :class="{ hidden: !visibility.subscription }"
  >
    <form action="/components/catalog.detail/subscribe.json" method="GET">
      <div class="form-group">
        <input id="tpid" type="hidden" name="TPID" value="" />
        <label>Email</label>
        <input
          type="email"
          value=""
          name="EMAIL"
          required=""
          class="form-control"
        />
      </div>
      <div class="form-button">
        <button stype="submit" class="btn btn-default btn-size-M">
          Подписаться
        </button>
      </div>
    </form>
    <div class="b-message hidden"><span>Вы успешно подписались!</span></div>
  </div>

  <div
    class="row b-catalog-detail__button-block"
    :style="`display: ${visibility.button ? 'flex' : 'none'}`"
  >
    <div :class="`col-sm-${incart ? '12' : '6'}`">
      <a
        href="/personal/cart/"
        data-ajax-url="/components/catalog.detail/buy.json"
        class="btn btn-default btn-size-L btn-100"
        :class="{ 'i-gray': incart }"
      >
        <span :class="{ 'i-show': !incart }">Купить</span>
        <span :class="{ 'i-show': incart }">В корзине</span>
      </a>
    </div>
    <hr class="visible-xs" />
    <div class="col-sm-6 text-center" :class="incart ? 'hidden' : ''">
      <a
        id="catalogDetailFavLink"
        href=""
        data-ajax-url="/components/catalog.detail/fav.json"
        data-stored="N"
        ><span>Отложить</span><span class="i-stored hidden">Отложено</span></a
      ><br /><a
        href="#"
        data-ajax-url="/components/catalog.detail/oneClick.html?somedata=value"
        data-toggle="modal"
        data-target="#oneClick"
        >Купить в 1 клик</a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    incart() {
      return this.$store.getters.activeTradeOffer.incart === 'Y';
    },
    visibility() {
      let button = true,
        subscription = true,
        offer = this.$store.getters.activeTradeOffer;

      if (offer.available === 'Y') {
        button = true;
        subscription = false;
      } else {
        button = false;
      }

      if (offer.subscribe === 'Y' && offer.available !== 'Y') {
        button = false;
        subscription = true;
      } else if (offer.subscribe !== 'Y' && offer.available !== 'Y') {
        button = false;
        subscription = false;
      }

      return {
        button,
        subscription,
      };
    },
  },
};
</script>

<style>
#catalogDetailFavLink .preloader-wrapper.x-small,
position relative .preloader-wrapper.x-small {
  position: absolute;
  top: 2px;
  left: 50%;
  margin-left: -10px;
}
#catalogDetailFavLink.i-preloader,
position relative.i-preloader {
  background: none;
}
#catalogDetailFavLink.i-preloader span,
position relative.i-preloader span {
  visibility: hidden;
}
.b-catalog-detail__button-block.row {
  padding: 9px 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .b-catalog-detail__button-block.row {
    display: block;
  }
}
.b-catalog-detail__button-block.row .text-center {
  line-height: 28px;
}
.b-catalog-detail__button-block.row .btn {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.b-catalog-detail__button-block.row .btn span {
  display: none;
}
.b-catalog-detail__button-block.row .btn span.i-show {
  display: inline-block;
}
.b-catalog-detail__button-block.row .col-sm-6:first-child {
  transition: width 0.3s ease;
  -webkit-transition: width 0.3s ease;
}
</style>
