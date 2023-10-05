<template>
  <div id="propListBlock">
    <hr />

    <div
      v-for="propItem in this.$store.getters.propsArray"
      :key="propItem.prop.code"
    >
      <div
        :class="`b-catalog-detail__${propItem.prop.code}`"
        :data-prop="propItem.prop.code"
        v-if="propItem.prop.type === 'color'"
      >
        <h6 v-if="propItem.prop.name">{{ propItem.prop.name }}</h6>

        <span
          v-for="(value, index) in propItem.propsSet"
          :key="index * Math.floor(Math.random() * 100000)"
          class="b-catalog-detail__colors-item"
          :class="{
            'i-active':
              value ===
              this.$store.getters.activeTradeOffer[
                `${propItem.prop.type}-${propItem.prop.code}`
              ],
            'i-disabled': false,
          }"
          :style="`background-image: url('${value}')`"
          ><span></span
        ></span>
      </div>

      <div
        :class="`b-catalog-detail__${propItem.prop.code}`"
        :data-prop="propItem.prop.code"
        v-if="propItem.prop.type === 'list'"
      >
        <h6 v-if="propItem.prop.name">{{ propItem.prop.name }}</h6>

        <span
          v-for="(value, index) in propItem.propsSet"
          :key="index * Math.floor(Math.random() * 100000)"
          class="b-catalog-detail__sizes-item"
          :class="{
            'i-active':
              value ===
              this.$store.getters.activeTradeOffer[
                `${propItem.prop.type}-${propItem.prop.code}`
              ],
            'i-disabled': false,
          }"
          ><span>{{ value }}</span></span
        >
      </div>

      <hr />
    </div>

    <hr />
    <hr />
    <hr />
    <div class="b-catalog-detail__tyu9" data-prop="tyu9">
      <h6>Цвет</h6>
      <span
        class="b-catalog-detail__colors-item i-active i-white"
        style="background-image: url('/upload/colors/1.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/3.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/5.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item"
        style="background-image: url('/upload/colors/7.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/9.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/11.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/2.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/4.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/6.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/8.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/10.jpg')"
        ><span></span
      ></span>
    </div>
    <hr />
    <div class="b-catalog-detail__jkf87" data-prop="jkf87">
      <h6>Размер</h6>
      <span class="b-catalog-detail__sizes-item i-active"><span>45</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>46</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>47</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>49</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>50</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>48</span></span
      >
    </div>
    <hr />
    <div class="b-catalog-detail__n6" data-prop="n6">
      <h6>Качество</h6>
      <span class="b-catalog-detail__sizes-item i-active"
        ><span>свежий</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>мягкий</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>теплый</span></span
      >
    </div>
    <hr />
    <div class="b-catalog-detail__ght34" data-prop="ght34">
      <h6>Другой цвет</h6>
      <span
        class="b-catalog-detail__colors-item i-active"
        style="background-image: url('/upload/colors/2.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/4.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/6.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/10.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled i-white"
        style="background-image: url('/upload/colors/1.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/3.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/5.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/7.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/9.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/11.jpg')"
        ><span></span></span
      ><span
        class="b-catalog-detail__colors-item i-disabled"
        style="background-image: url('/upload/colors/8.jpg')"
        ><span></span
      ></span>
    </div>
    <hr />
    <div class="b-catalog-detail__b" data-prop="b">
      <h6>Материал</h6>
      <span class="b-catalog-detail__sizes-item i-active"><span>лен</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>хлопок</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>шелк</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>кожа</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>сатин</span></span
      ><span class="b-catalog-detail__sizes-item i-disabled"
        ><span>вискоза</span></span
      >
    </div>
  </div>
</template>

<style scoped>
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
</style>
