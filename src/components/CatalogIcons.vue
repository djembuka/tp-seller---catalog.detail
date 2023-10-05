<template>
  <div class="col-sm-1 b-catalog-detail__icons">
    <div title="Увеличить" class="b-icon-zoom"></div>
    <div
      id="catalogDetailFavIcon"
      title="В избранное"
      data-ajax-url="/components/catalog.detail/fav.json"
      data-stored="N"
      class="b-icon-fav"
    ></div>
    <div id="commentsIcon" title="Комментарии" class="b-icon-comments"></div>
    <div id="shareIcon" title="Поделиться" class="b-icon-share"></div>
    <div
      id="sizeIcon"
      title="Размеры"
      data-activates="slide-size-table"
      class="b-icon-size"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.b-icon-zoom,
.b-icon-fav,
.b-icon-comments,
.b-icon-size {
  width: 16px;
  height: 16px;
  margin: 0 auto 30px;
  cursor: pointer;
  background-size: cover;
  opacity: 0;
}
.b-icon-zoom:hover,
.b-icon-fav:hover,
.b-icon-comments:hover,
.b-icon-size:hover {
  opacity: 0.5;
}
@media (max-width: 767px) {
  .b-icon-zoom,
  .b-icon-fav,
  .b-icon-comments,
  .b-icon-size {
    width: 24px;
    height: 24px;
  }
}
.i-load .b-icon-zoom,
.i-load .b-icon-fav,
.i-load .b-icon-comments,
.i-load .b-icon-size {
  opacity: 1;
}
.b-icon-zoom {
  background: url('~/src/assets/zoom.svg') no-repeat center;
  transition: opacity 0.5s ease 0.3s;
  -webkit-transition: opacity 0.5s ease 0.3s;
}
.b-icon-fav {
  background: url('~/src/assets/fav.svg') no-repeat center;
  transition: opacity 0.5s ease 0.5s;
  -webkit-transition: opacity 0.5s ease 0.5s;
}
.b-icon-fav.i-stored {
  background: url('~/src/assets/fav-stored.svg') no-repeat center;
}
.b-icon-comments {
  background: url('~/src/assets/comments.svg') no-repeat center;
  transition: opacity 0.5s ease 0.7s;
  -webkit-transition: opacity 0.5s ease 0.7s;
}
.b-icon-share {
  background: url('~/src/assets/share.svg') no-repeat center;
  transition: opacity 0.5s ease 0.9s;
  -webkit-transition: opacity 0.5s ease 0.9s;
}
@media (max-width: 767px) {
  .b-icon-share {
    display: none;
  }
}
.b-icon-size {
  background: url('~/src/assets/sizes.svg') no-repeat center;
  transition: opacity 0.5s ease 1.1s;
  -webkit-transition: opacity 0.5s ease 1.1s;
}
@media (max-width: 767px) {
  .col-sm-1.b-catalog-detail__icons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
