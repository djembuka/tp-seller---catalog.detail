<template>
  <div class="b-catalog-tags">
    <a :href="tag.href" v-for="tag in $store.state.tags" :key="tag.href">{{
      tag.name
    }}</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.b-catalog-tags {
  font-size: 0.85rem;
  margin: 12px 0;
  text-align: right;
}
.b-catalog-tags a {
  margin-left: 22px;
}
@media (max-width: 767px) {
  .b-catalog-detail .b-catalog-tags {
    margin-top: 5px;
  }
}
</style>
