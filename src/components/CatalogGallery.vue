<template>
  <div
    data-magnifier="true"
    data-magnifier-ratio="2"
    class="b-catalog-detail__gallery"
  >
    <!-- data-magnifier показывает нужно ли применять лупу-->
    <!-- data-magnifier-ratio это настраиваемый параметр, задаёт коэффициент увеличения картинки внутри лупы. Устанавливается пользователем через настройки Битрикс-->

    <link rel="stylesheet" href="/template/magnify.css" />
    <!--styles for the magifying lense-->
    <div
      data-width="100%"
      data-ratio="2/3"
      data-nav="thumbs"
      data-thumbwidth="65"
      data-thumbheight="65"
      data-allowfullscreen="true"
      class="fotorama"
      v-if="$store.getters.activeTradeOffer['big-photo']"
    >
      <div
        v-for="(photo, index) in $store.getters.activeTradeOffer.photo"
        :data-thumb="photo"
        :key="photo"
      >
        <a :href="$store.getters.activeTradeOffer['big-photo'][index]"
          ><img
            :src="photo"
            alt=""
            :data-magnify-src="
              $store.getters.activeTradeOffer['big-photo'][index]
            "
        /></a>
      </div>
      <div
        v-if="$store.getters.activeTradeOffer.video"
        v-html="$store.getters.activeTradeOffer.video"
      ></div>
    </div>
    <div
      data-width="100%"
      :data-maxheight="dataObject.maxheight"
      :data-ratio="dataObject.ratio"
      data-nav="thumbs"
      data-thumbwidth="65"
      data-thumbheight="65"
      data-allowfullscreen="true"
      class="fotorama"
      v-else
    >
      <img
        v-for="photo in $store.getters.activeTradeOffer.photo"
        :src="photo"
        alt=""
        :key="photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    dataObject() {
      let ratio = 100;
      let maxheight = 100000;
      this.$store.getters.activeTradeOffer.dimensions.forEach(function (val) {
        var r = val.width / val.height;
        if (r < ratio && r > 0.25) {
          ratio = r;
          maxheight = val.height;
        }
      });
      return { ratio, maxheight };
    },
  },
  methods: {
    restart() {
      const $ = window.jQuery;
      if (!$) {
        return;
      }
      if ($('.b-catalog-detail__gallery .fotorama').length && $.fn.fotorama) {
        $('.b-catalog-detail__gallery .fotorama').data('fotorama').destroy();
        $('.b-catalog-detail__gallery .fotorama')
          .on('fotorama:showend', function (e, fotorama) {
            if (window.matchMedia('(min-width: 768px)').matches) {
              fotorama.activeFrame.$stageFrame
                .find('img[data-magnify-src]')
                .magnify();
            }
          })
          .fotorama();
      } else if ($.fn.magnify) {
        $('.b-catalog-detail__gallery img[data-magnify-src]').magnify();
      }
    },
  },
};
</script>

<style>
.b-catalog-detail__gallery {
  position: relative;
}
.b-catalog-detail__gallery .fotorama__html a {
  display: block !important;
  line-height: 0;
}
.b-catalog-detail__gallery .fotorama__html a:hover {
  opacity: 1;
}
.b-catalog-detail__gallery .fotorama__html a img {
  margin: 0 auto;
  max-width: 100%;
}
.b-catalog-detail__gallery .fotorama__wrap--css3 .fotorama__html,
.b-catalog-detail__gallery
  .fotorama__wrap--css3
  .fotorama__stage
  .fotorama__img {
  text-align: center;
}
.b-catalog-detail__gallery .fotorama__wrap--css3 .fotorama__html {
  display: flex;
  justify-content: center;
  align-items: center;
}
.b-catalog-detail__gallery
  .fotorama__wrap--css3
  .fotorama__html
  div[data-thumb] {
  width: 100%;
}
.b-catalog-detail__gallery .magnify {
  width: 100%;
  vertical-align: top;
}
.b-catalog-detail__gallery .magnify a {
  pointer-events: none;
}
.b-catalog-detail__gallery .magnify img {
  margin: 0 auto;
  max-width: 100%;
}
.b-catalog-detail__gallery-icons {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}
.fotorama__stage__frame img {
  width: 100%;
}
.fotorama__wrap--no-controls.fotorama__wrap--toggle-arrows
  .fotorama__fullscreen-icon {
  opacity: 1 !important;
}
.fotorama--fullscreen .fotorama__html a {
  display: block !important;
  pointer-events: none;
}
.fotorama--fullscreen .magnify {
  width: 100%;
}
.fotorama--fullscreen .magnify a {
  pointer-events: none;
}
.fotorama--fullscreen .magnify img {
  margin: 0 auto;
  max-width: 100%;
}
.fotorama--fullscreen .magnify > .magnify-lens {
  display: none !important;
}
.magnify > .magnify-lens {
  width: 500px;
  height: 500px;
}
</style>
