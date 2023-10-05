<template>
  <div class="row">
    <div class="col-sm-7 b-catalog-detail__props">
      <span
        class="text-muted"
        v-for="prop in this.$store.getters.activeTradeOffer.props"
        :key="prop.name"
      >
        {{ prop.name }}
        <span v-html="prop.value"></span></span
      ><span class="text-muted" v-if="this.$store.state.brand"
        >Бренд {{ this.$store.state.brand }}</span
      ><span class="b-catalog-detail__rating" v-if="this.$store.state.rating">
        <table align="center" class="bx_item_detail_rating">
          <tbody>
            <tr>
              <td>
                <div class="bx_item_rating">
                  <div class="bx_stars_container">
                    <div id="bx_vo_4_52_sBq3II_stars" class="bx_stars_bg"></div>
                    <div
                      id="bx_vo_4_52_sBq3II_progr"
                      :style="`width: ${(100 / 5) * this.$store.state.rating}%`"
                      class="bx_stars_progres"
                    ></div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  id="bx_vo_4_52_sBq3II_rating"
                  class="bx_stars_rating_votes"
                  >(
                  {{ (5 / 5) * this.$store.state.rating }}
                  )</span
                >
              </td>
            </tr>
          </tbody>
        </table></span
      >
    </div>
    <div
      style="background-image: url('/upload/etc.svg')"
      class="b-catalog-detail__props-slide"
    ></div>
    <div class="col-sm-5 b-catalog-detail__props-icons text-right">
      <div
        v-for="label in this.$store.state.labels"
        :style="`color: ${label.color}; border-color: ${label.color}`"
        class="b-prop"
        :key="label"
      >
        {{ label.value }}
      </div>
    </div>
  </div>
</template>

<style>
.col-sm-7.b-catalog-detail__props {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}
.col-sm-7.b-catalog-detail__props span {
  display: inline-block;
}
.b-catalog-detail__rating {
  display: inline-block;
  width: 79px;
  height: 12px;
}
.bx_item_detail_rating {
  margin-bottom: 10px;
}
.bx_item_detail_rating td {
  text-align: right;
  vertical-align: middle;
  padding: 0;
}
.bx_item_detail_rating .bx_item_rating {
  text-align: right;
}
.bx_item_detail_rating .bx_stars_container {
  background: #dadada;
  height: 30px;
  position: relative;
  width: 68px;
}
.bx_item_detail_rating .bx_stars_bg {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 101;
}
.bx_item_detail_rating .bx_stars_progres {
  background: #e76110;
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
}
.bx_item_detail_rating .bx_stars_rating_votes {
  color: #8d8d8d;
  font-size: 11px;
  line-height: 11px;
  vertical-align: middle;
}
.bx_stars_rating_votes {
  display: none;
}
.bx_item_detail_rating {
  margin: 0;
}
.bx_item_detail_rating td:nth-child(2) {
  display: none;
}
.bx_item_detail_rating .bx_stars_bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAaCAYAAACgjS7xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk1JREFUeNrsmzFLw0AYhtPSWouLot0EEXWy7qXqIurm7ODYxdnJP+Dm4C6Ci4P/QAR1ESkiBXVTFIuLi1ZBpLWF+samUOESL5d89y3fwbMkuT7vwXeXXNom2miOfquCXZACm6Dfsdc43eKPI0dbv7XAslubHutte43TLf6YcoQptv0eSZcTS4PkdIs/phy6xVYDUwrRgoUBcrrFH2OOpObddgfcK46felA2Trf448yhUZB3YFBR0TZmGKdb/DHn0FnZtsB7wHm3qs+IZhOnW/xx5/ApwldwCQ5AJqCiu8x5D4pV8BlxFnG6xU+YIwEaqLkjUAG34Bk8gDeDGTAAhsEkGAMToABmfd7HfDO6xW87B4ptTaNqo7LiM3s43eK3nMNd2dKouibxPT8D6orjfYxu8VvO4W4QihYeMMd9jnO6xW87B1a2ChghXD7dzy77LN+cbvFbztHdjZaJZDqD5XSL32IOh1AWZrCcbvFbyuEQyXIGg+V0i99CDtVL3XOQjSBJg2PDgXK6xU+cQ/V11QzIRtx55Az7cbrFT5xDVWzXoBZB0jR888ztFj9xDlWxfblfmUYMe2PYj9MtfuIcqmK7iiHsh2E/Trf4iXOoiq2l8UGpf84/GQbkdIufOEcy5DK86HR+t3QBlgKueyS4BVC7xU+dQ7HtLSq2snmwp7jW3d4WFNfPG265Od3iJ86hKrZST4dRT1APCNbwrsn39CsZDpLTLX7iHInfivvb3D+hboMhsAqmNZfeF3DoLZ8bTueHc2Ebp1v8xDl+BBgAhNKm4u0IDvMAAAAASUVORK5CYII=');
  background-position: center;
  background-size: cover;
}
.bx_item_detail_rating .bx_stars_container {
  width: 79px;
  height: 12px;
  margin-top: 4px;
}
.b-catalog-detail__props-icons {
  text-align: right;
}
.b-prop {
  border: 1px solid transparent;
  line-height: 23px;
  height: 23px;
  padding: 0 9px;
  font-size: 7pt;
  text-transform: uppercase;
  margin: -7px 0 3px 8px;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
}
@media (max-width: 530px) {
  .bx-touch .bx_item_detail_rating .bx_stars_container {
    height: 15px;
    margin: 4px 0;
    width: 34px;
  }
  .bx_item_detail_rating .bx_stars_rating_votes {
    font-size: 7px;
    line-height: 7px;
  }
  .bx-touch .bx_item_detail_rating .bx_stars_container {
    width: 79px;
    height: 12px;
    margin: 0;
  }
}
@media (max-width: 767px) {
  .col-sm-7.b-catalog-detail__props {
    display: none;
    text-align: center;
  }
  .col-sm-7.b-catalog-detail__props span {
    display: block;
    margin-bottom: 5px;
  }
  .col-sm-7.b-catalog-detail__props span span {
    display: inline-block;
    margin-bottom: 0;
  }
  .col-sm-7.b-catalog-detail__props span.b-catalog-detail__rating {
    margin: 15px auto 20px;
  }
  .b-catalog-detail__props-icons {
    text-align: center;
    margin-top: 10px;
  }
  .b-prop {
    margin: 0 4px 3px;
  }
}
</style>
