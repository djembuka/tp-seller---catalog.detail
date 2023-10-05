<template>
  <div class="b-catalog-detail__properties" ref="description">
    <div
      v-for="description in $store.state.description"
      :key="description.title"
      class="b-catalog-detail__collapse"
    >
      <a
        class="b-catalog-detail__collapse-title"
        @click.prevent="clickTitle($event)"
        >{{ description.title }}</a
      >
      <div
        class="b-catalog-detail__collapse-body"
        v-html="description.body"
      ></div>
    </div>

    <hr class="i-size-S i-line" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickTitle(e) {
      const title = e.target;
      const block = title.closest('.b-catalog-detail__collapse');
      const wrapper = block.querySelector('.b-catalog-detail__collapse-body');

      block.classList.toggle('b-catalog-detail__collapse--show');

      console.log(
        wrapper.classList.contains('b-catalog-detail__collapse-body--show')
      );

      if (
        !wrapper.classList.contains('b-catalog-detail__collapse-body--show')
      ) {
        wrapper.classList.add('b-catalog-detail__collapse-body--show');
        wrapper.style.height = 'auto';

        let height = wrapper.clientHeight + 'px';

        wrapper.style.height = '0px';

        setTimeout(() => {
          wrapper.style.height = height;
        }, 0);
      } else {
        wrapper.style.height = '0px';

        wrapper.addEventListener(
          'transitionend',
          () => {
            wrapper.classList.remove('b-catalog-detail__collapse-body--show');
          },
          {
            once: true,
          }
        );
      }
    },
  },
  mounted() {
    this.$store.state.description.forEach((d, index) => {
      if (d.open) {
        const block = this.$refs.description.querySelectorAll(
          '.b-catalog-detail__collapse'
        )[index];
        const wrapper = block.querySelector('.b-catalog-detail__collapse-body');

        block.classList.add('b-catalog-detail__collapse--show');
        wrapper.classList.add('b-catalog-detail__collapse-body--show');

        let height = wrapper.clientHeight + 'px';

        setTimeout(() => {
          wrapper.style.height = height;
        });
      }
    });
  },
};
</script>

<style>
.b-catalog-detail__properties {
  margin-top: -10px;
}
.b-catalog-detail__collapse-title {
  display: block;
  position: relative;
  padding: 10px 0;
}
.b-catalog-detail__collapse-title:after {
  content: '';
  display: block;
  width: 20px;
  height: 14px;
  position: absolute;
  top: 15px;
  right: 10px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  background: url('data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMjIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm1vcmUtb3Blbi1ibGFjazwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNy42NCA4Ljc0IDEwIDEzLjg4IDIuMzYgOC43NCIvPjwvc3ZnPg==')
    no-repeat center;
  background-size: cover;
}
.b-catalog-detail__collapse-title:hover {
  text-decoration: none;
}
.b-catalog-detail__collapse--show .b-catalog-detail__collapse-title:after {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.b-catalog-detail__collapse-body {
  display: block;
  opacity: 1;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  overflow: hidden;
  margin-bottom: 15px;
}
.b-catalog-detail__collapse-body:not(.b-catalog-detail__collapse-body--show) {
  opacity: 0;
  display: none;
}
</style>
