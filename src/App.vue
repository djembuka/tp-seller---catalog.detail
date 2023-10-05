<template>
  <div
    class="b-catalog-detail"
    :class="{ 'i-load': isLoaded }"
    :data-id="$store.getters.activeTradeOffer.id"
  >
    <div class="row">
      <div class="col-sm-8">
        <catalog-h1 />
      </div>
      <div class="col-sm-4">
        <catalog-tags />
      </div>
    </div>

    <catalog-button-go-back />
    <catalog-popup-buy />
    <catalog-props />

    <hr class="i-size-M" />

    <div class="b-catalog-detail__ill">
      <div class="row">
        <div class="col-md-7 col-sm-11 b-catalog-detail__animation-left">
          <catalog-gallery />
          <hr class="i-size-L" />
          <catalog-share />
        </div>
        <hr class="i-size-M visible-xs" />
        <catalog-icons />
        <div class="col-md-4 col-sm-12 b-catalog-detail__animation-right">
          <catalog-price />
          <hr class="i-size-M i-line" />
          <catalog-properties />
          <catalog-size-table />
          <hr class="i-size-M i-line" />
          <catalog-button />
          <hr class="i-size-S" />
          <catalog-num />
          <hr class="i-size-M i-line" />
          <catalog-description></catalog-description>
        </div>
      </div>
    </div>
    <!--on click popup-->
    <!--schema org data-->
    <hr class="i-size-L" />
    <hr class="i-size-L" />
    <!-- advantages -->
    <hr />
    <!--tabs-->
  </div>
</template>

<script>
import CatalogGallery from './components/CatalogGallery.vue';
import CatalogShare from './components/CatalogShare.vue';
import CatalogIcons from './components/CatalogIcons.vue';
import CatalogProps from './components/CatalogProps.vue';
import CatalogPrice from './components/CatalogPrice.vue';
import CatalogProperties from './components/CatalogProperties.vue';
import CatalogSizeTable from './components/CatalogSizeTable.vue';
import CatalogNum from './components/CatalogNum.vue';
import CatalogDescription from './components/CatalogDescription.vue';
import CatalogButton from './components/CatalogButton.vue';
import CatalogH1 from './components/CatalogH1.vue';
import CatalogTags from './components/CatalogTags.vue';
import CatalogButtonGoBack from './components/CatalogButtonGoBack.vue';
import CatalogPopupBuy from './components/CatalogPopupBuy.vue';

export default {
  name: 'App',
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    CatalogGallery,
    CatalogShare,
    CatalogIcons,
    CatalogProps,
    CatalogPrice,
    CatalogProperties,
    CatalogSizeTable,
    CatalogNum,
    CatalogDescription,
    CatalogButton,
    CatalogH1,
    CatalogTags,
    CatalogButtonGoBack,
    CatalogPopupBuy,
  },
  methods: {
    parseQuery(queryString) {
      var query = {};
      var pairs = (
        queryString[0] === '?' ? queryString.substr(1) : queryString
      ).split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    },
    setURL() {
      let query = window.location.search
        ? this.parseQuery(window.location.search)
        : {};

      let locationSearch = '?';

      if (this.$store.state.tradeOffers.length > 1) {
        query.product_id = this.$store.getters.activeTradeOffer.id;
      }

      this.$store.commit('setQuery', query);

      Object.keys(this.$store.state.query).forEach((k) => {
        locationSearch += `${k}=${query[k]}&`;
      });

      locationSearch = String(locationSearch).substring(
        0,
        locationSearch.length - 1
      );

      if (window.history) {
        history.replaceState({}, '', locationSearch);
      }
    },
  },
  created() {
    this.setURL();
    this.$store.dispatch('sendStatistics');
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  },
};
</script>

<style>
#buyDetailPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1000;
}
#buyDetailPopup.i-show {
  display: block;
}
#buyDetailPopupOpaco {
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
  z-index: 1001;
}
#buyDetailPopup.i-animate #buyDetailPopupOpaco {
  opacity: 1;
}
#buyDetailPopupWindow {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 300px);
  background-color: #00f;
  width: 600px;
  padding: 25px 25px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transform: scale(0.9);
  -webkit-transform: scale(0.9);
  opacity: 0;
  z-index: 1002;
}
#buyDetailPopup.i-animate #buyDetailPopupWindow {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
}
#buyDetailPopupWindow a {
  color: #fff;
  text-decoration: underline;
  white-space: nowrap;
}
@media (max-width: 767px) {
  #buyDetailPopupWindow {
    width: 300px;
    top: calc(50% - 40px);
    left: calc(50% - 150px);
    height: auto;
  }
}
#buyDetailPopup .b-catalog-detail-popup__close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
}
#buyDetailPopup .b-catalog-detail-popup__close:before {
  content: '';
  display: block;
  border-right: 1px solid #fff;
  position: absolute;
  top: 0;
  left: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  height: 100%;
  z-index: 1;
}
#buyDetailPopup .b-catalog-detail-popup__close:after {
  content: '';
  display: block;
  border-right: 1px solid #fff;
  position: absolute;
  top: 0;
  left: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  height: 100%;
  z-index: 1;
}
#buyDetailPopup .b-catalog-detail-popup__body {
  color: #fff;
  line-height: normal;
}
.b-catalog-detail__go-back {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  z-index: 1000;
}
@media (max-width: 767px) {
  .b-catalog-detail__go-back {
    top: 40px;
    bottom: auto;
    right: auto;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    pointer-events: none;
  }
  .b-catalog-detail__go-back.show {
    left: 20px;
    opacity: 1;
    pointer-events: auto;
  }
}
@media (max-width: 767px) {
  .b-catalog-detail h1 {
    margin-bottom: 0;
  }
}

.b-catalog-detail__props-slide {
  display: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 10px;
  width: 20px;
  margin: 0 auto;
  cursor: pointer;
}
@media (max-width: 767px) {
  .b-catalog-detail__props-slide {
    display: block;
  }
}
.b-catalog-detail .col-sm-4 hr.i-line:first-child {
  margin-top: 0;
}
.b-catalog-detail__ill {
  border: 1px solid #f2f2f2;
}
.b-catalog-detail__ill > .row {
  margin-bottom: 0;
}
.b-catalog-detail #propListBlock h6 {
  font-size: 1em;
  margin: 0 0 1em;
  line-height: normal;
}
.b-catalog-detail #propListBlock > div {
  text-align: center;
}
.b-catalog-detail__colors-block {
  text-align: center;
  padding: 9px 0 0;
}
.b-catalog-detail__colors-item {
  display: inline-block;
  vertical-align: top;
  width: 24px;
  height: 24px;
  border-radius: 51%;
  margin: 0 9px 9px;
  cursor: pointer;
  transition: transform 0.3s ease;
  -webkit-transition: transform 0.3s ease;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.b-catalog-detail__colors-item.i-white {
  border: 1px solid #eee;
}
.b-catalog-detail__colors-item:hover {
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
}
.b-catalog-detail__colors-item span {
  display: none;
  width: 14px;
  height: 7px;
  margin-top: 6px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.b-catalog-detail__colors-item.i-white span {
  border-color: #ddd;
}
.b-catalog-detail__colors-item.i-active {
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
  cursor: default;
}
.b-catalog-detail__colors-item.i-active span {
  display: inline-block;
  vertical-align: top;
}
.b-catalog-detail__colors-item.i-disabled {
  opacity: 0.5;
  text-decoration: line-through;
}
.modal .b-catalog-detail__colors-item {
  cursor: default;
}
.b-catalog-detail__sizes-block {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.b-catalog-detail__sizes-item {
  font-size: 0.95rem;
  min-width: 50px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  border-bottom: 2px solid transparent;
  padding-bottom: 3px;
  margin: 0 5px 16px;
}
.b-catalog-detail__sizes-item.i-active {
  color: #2f3154;
  border-bottom: 2px solid #2f3154;
  cursor: default;
}
.b-catalog-detail__sizes-item.i-disabled,
.b-catalog-detail__sizes-item.i-subscribe {
  opacity: 0.5;
}
.b-catalog-detail__size-table-link {
  text-align: center;
  font-size: 0.65rem;
  font-weight: 400;
}

.b-catalog-detail__animation-left {
  padding-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-right: 1px solid #f2f2f2;
  transform: translateX(-50px);
  -webkit-transform: translateX(-50px);
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  opacity: 0;
}
.i-load .b-catalog-detail__animation-left {
  transform: translateX(0);
  -webkit-transform: translateX(0);
  opacity: 1;
}
@media (max-width: 991px) {
  .b-catalog-detail__animation-left {
    padding-left: 25px !important;
    padding-right: 25px !important;
    border: none;
  }
}
.b-catalog-detail__icons {
  margin-top: 38px;
  margin-bottom: 20px;
}
.b-catalog-detail__animation-right {
  padding-right: 60px !important;
  margin-top: 20px;
  margin-bottom: 20px;
  transform: translateX(50px);
  -webkit-transform: translateX(50px);
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  opacity: 0;
}
.i-load .b-catalog-detail__animation-right {
  transform: translateX(0);
  -webkit-transform: translateX(0);
  opacity: 1;
}
@media (max-width: 991px) {
  .b-catalog-detail__animation-right {
    padding-right: 25px !important;
    padding-left: 25px !important;
    border: none;
  }
}
.b-catalog-detail__subscribe-block {
  padding: 1px 15px 0;
}
.b-catalog-detail__subscribe-block .form-group {
  float: left;
  width: 55%;
}
.b-catalog-detail__subscribe-block .form-group .form-control {
  width: 100%;
}
.b-catalog-detail__subscribe-block .form-group input[type='email'] {
  background-image: none;
}
.b-catalog-detail__subscribe-block .form-button {
  float: left;
  width: 45%;
  padding-left: 13px;
  margin-top: 23px;
}
.b-catalog-detail__subscribe-block .btn {
  width: 100%;
  min-width: auto;
  line-height: 35px;
}
.b-catalog-detail__subscribe-block .b-message {
  background-color: #f2f2f2;
  display: flex;
  font-size: 10.5pt;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 77px;
}
.b-catalog-detail__subscribe-block .b-message.i-warning {
  background-color: #d65561;
  color: #fff;
}

.b-icon-discount {
  width: 32px;
  height: 32px;
  border-radius: 51%;
  color: #fff;
  line-height: 32px;
  text-align: center;
  margin-top: -7px;
  background-color: #f33;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 9.5pt;
  display: inline-block;
  vertical-align: top;
}
@media (max-width: 767px) {
  .b-icon-discount {
    margin-top: 0;
  }
}
.b-icon-recommend,
.b-icon-hit,
.b-icon-action,
.b-icon-new {
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 9.5pt;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-top: -7px;
}

#oneClick p {
  font-size: 9pt;
  margin-bottom: 20px;
}
#oneClick p:last-child {
  margin-bottom: 0;
}
#oneClick .modal-body {
  padding: 30px 60px;
  line-height: 14px;
  transition: height 0.5s ease;
  -webkit-transition: height 0.5s ease;
}
@media (max-width: 767px) {
  #oneClick .modal-body {
    padding: 20px 40px;
  }
}
#oneClick label {
  margin-bottom: 6px;
  color: #333;
  vertical-align: top;
  font-size: 8pt;
}
#oneClick .form-control {
  height: 29pt;
  padding: 6px 10px;
  font-size: 10.5pt;
  line-height: 1.72857143;
}
#oneClick textarea.form-control {
  height: 83px;
}
#oneClick .form-group {
  margin-bottom: 21px;
  opacity: 0;
}
#oneClick .form-group:last-child {
  margin-bottom: 11px;
}
#oneClick.in .form-group {
  animation: form-opacity 0.3s;
  animation-fill-mode: forwards;
}
#oneClick.in .form-group:nth-of-type(2) {
  animation-delay: 0.15s;
}
#oneClick.in .form-group:nth-of-type(3) {
  animation-delay: 0.3s;
}
#oneClick.in .form-group:nth-of-type(4) {
  animation-delay: 0.453s;
}
#oneClick.in .form-group:nth-of-type(5) {
  animation-delay: 0.6s;
}
#oneClick .btn {
  line-height: 1.72857143;
  padding: 6px 14px;
  min-width: 141px;
}
#oneClick .btn.i-gray {
  background-color: #ececec;
  border-color: #ececec;
  display: none;
}
#oneClick .btn.i-gray:hover {
  color: inherit;
}

.b-buy-modal-img img {
  max-width: 100%;
  margin: 0 auto;
}
.b-buy-modal-text {
  padding-top: 50px;
}
.b-buy-modal-text h2 {
  font-size: 21pt;
  margin: 0 0 45px;
}
#consentModal .modal-body {
  max-height: 250px;
  overflow: auto;
  padding-right: 50px;
  padding-left: 50px;
}
textarea.form-control {
  resize: none !important;
}
.b-catalog-detail__sizes-block
  .b-catalog-detail__sizes-item:not(.i-disabled):hover {
  opacity: 0.7;
}
#catalogDetailVideo {
  display: none;
}

#catalogDetailFavIcon {
  position: relative;
}
#catalogDetailFavIcon .preloader-wrapper.x-small {
  position: absolute;
  top: -1px;
  left: 1px;
  margin-left: 0;
}
#catalogDetailFavIcon.i-preloader {
  background: none;
}
#oneClick p {
  font-size: 9pt;
  margin-bottom: 20px;
}
#oneClick p:last-child {
  margin-bottom: 0;
}
#oneClick .modal-body {
  padding: 30px 60px;
  line-height: 14px;
  transition: height 0.5s ease;
  -webkit-transition: height 0.5s ease;
}
@media (max-width: 767px) {
  #oneClick .modal-body {
    padding: 20px 40px;
  }
}
#oneClick label {
  margin-bottom: 6px;
  color: #333;
  vertical-align: top;
  font-size: 8pt;
}
#oneClick .form-control {
  height: 29pt;
  padding: 6px 10px;
  font-size: 10.5pt;
  line-height: 1.72857143;
}
#oneClick textarea.form-control {
  height: 83px;
}
#oneClick .form-group {
  margin-bottom: 21px;
  opacity: 0;
}
#oneClick .form-group:last-child {
  margin-bottom: 11px;
}
#oneClick.in .form-group {
  animation: form-opacity 0.3s;
  animation-fill-mode: forwards;
}
#oneClick.in .form-group:nth-of-type(2) {
  animation-delay: 0.15s;
}
#oneClick.in .form-group:nth-of-type(3) {
  animation-delay: 0.3s;
}
#oneClick.in .form-group:nth-of-type(4) {
  animation-delay: 0.453s;
}
#oneClick.in .form-group:nth-of-type(5) {
  animation-delay: 0.6s;
}
#oneClick .btn {
  line-height: 1.72857143;
  padding: 6px 14px;
  min-width: 141px;
}
#oneClick .btn.i-gray {
  background-color: #ececec;
  border-color: #ececec;
  display: none;
}
#oneClick .btn.i-gray:hover {
  color: inherit;
}
@-moz-keyframes form-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes form-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes form-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes form-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
