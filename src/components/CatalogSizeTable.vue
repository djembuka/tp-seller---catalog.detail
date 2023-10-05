<template>
  <div id="sizeTable" class="b-side-nav" ref="sizeTable">
    <div class="b-side-nav__close" @click="close"></div>
    <div class="b-sizes-menu">
      <h2>Таблица размеров</h2>
      <p>Как выбрать одежду своего размера?</p>
      <p>
        Вам понадобится провести измерения с помощью сантиметровой ленты. Для
        определения подходящего размера необходимо соотнести полученные
        измерения с размерами в таблице.
      </p>
      <hr class="i-size-L" />
      <div class="b-sizes-menu__table hidden-xs">
        <div class="b-sizes-menu__th">
          <table>
            <tbody>
              <tr>
                <th>Обхват груди (см)</th>
              </tr>
              <tr>
                <th>Обхват талии (см)</th>
              </tr>
              <tr>
                <th>Обхват бедер (см)</th>
              </tr>
              <tr>
                <th>Российский размер (RUS)</th>
              </tr>
              <tr>
                <th>Европа / Германия (EUR / GER)</th>
              </tr>
              <tr>
                <th>Франция (FR)</th>
              </tr>
              <tr>
                <th>Италия (IT)</th>
              </tr>
              <tr>
                <th>США (USA)</th>
              </tr>
              <tr>
                <th>Великобритания (UK)</th>
              </tr>
              <tr>
                <th>Международный (INT)</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="b-sizes-menu__td">
          <div class="b-sizes-menu__scroll" ref="menuScroll">
            <table
              ref="table"
              @mouseenter="mouseenter($event)"
              @mouseleave="mouseleave($event)"
              @click="click($event)"
            >
              <tbody>
                <tr>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                  <td>78-82</td>
                </tr>
                <tr>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                  <td>58-62</td>
                </tr>
                <tr>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                  <td>84-108</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                  <td>XXS/XS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="b-sizes-menu__table-xs visible-xs">
        <table>
          <tbody>
            <tr>
              <th>Обхват груди (см)</th>
              <td>
                <select class="form-control">
                  <option>78-82</option>
                  <option>82-86</option>
                  <option>86-90</option>
                  <option>90-94</option>
                  <option>94-98</option>
                  <option>98-102</option>
                  <option>102-106</option>
                  <option>106-110</option>
                  <option>110-114</option>
                  <option>114-118</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Обхват талии (см)</th>
              <td>
                <select class="form-control">
                  <option>58-62</option>
                  <option>62-66</option>
                  <option>66-70</option>
                  <option>70-74</option>
                  <option>74-78</option>
                  <option>78-82</option>
                  <option>82-86</option>
                  <option>86-90</option>
                  <option>90-94</option>
                  <option>94-98</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Обхват бедер (см)</th>
              <td>
                <select class="form-control">
                  <option>84-88</option>
                  <option>88-92</option>
                  <option>92-96</option>
                  <option>96-100</option>
                  <option>100-104</option>
                  <option>104-108</option>
                  <option>108-112</option>
                  <option>112-116</option>
                  <option>116-120</option>
                  <option>120-124</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Российский размер (RUS)</th>
              <td>
                <span>40</span><span>42</span><span>44</span><span>46</span
                ><span>48</span><span>50</span><span>52</span><span>54</span
                ><span>56</span><span>58</span>
              </td>
            </tr>
            <tr>
              <th>Европа / Германия (EUR / GER)</th>
              <td>
                <span>32</span><span>34</span><span>36</span><span>38</span
                ><span>40</span><span>42</span><span>44</span><span>46</span
                ><span>48</span><span>50</span>
              </td>
            </tr>
            <tr>
              <th>Франция (FR)</th>
              <td>
                <span>34</span><span>36</span><span>38</span><span>40</span
                ><span>42</span><span>44</span><span>46</span><span>48</span
                ><span>50</span><span>52</span>
              </td>
            </tr>
            <tr>
              <th>Италия (IT)</th>
              <td>
                <span>36</span><span>38</span><span>40</span><span>42</span
                ><span>44</span><span>46</span><span>48</span><span>50</span
                ><span>52</span><span>54</span>
              </td>
            </tr>
            <tr>
              <th>США (USA)</th>
              <td>
                <span>0</span><span>2</span><span>4</span><span>6</span
                ><span>8</span><span>10</span><span>12</span><span>14</span
                ><span>16</span><span>18</span>
              </td>
            </tr>
            <tr>
              <th>Великобритания (UK)</th>
              <td>
                <span>4</span><span>6</span><span>8</span><span>10</span
                ><span>12</span><span>14</span><span>16</span><span>18</span
                ><span>20</span><span>22</span>
              </td>
            </tr>
            <tr>
              <th>Международный (INT)</th>
              <td>
                <span>XXS/XS</span><span>XS/S</span><span>S</span><span>M</span
                ><span>L</span><span>L/XL</span><span>XL</span><span>XXL</span
                ><span>XXL</span><span>XXXL</span>
              </td>
            </tr>
            <tr>
              <th>Европа (EUR2)</th>
              <td>
                <span></span><span>0</span><span>1</span><span>2</span
                ><span>3</span><span></span><span></span><span></span
                ><span></span><span></span>
              </td>
            </tr>
            <tr>
              <th>Международный (BM)</th>
              <td>
                <span>T1</span><span>T1</span><span>T2</span><span>T2</span
                ><span>T3</span><span>T3</span><span>T3</span><span></span
                ><span></span><span></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    mouseenter(e) {
      console.log(e);
    },
    mouseleave(e) {
      console.log(e);
    },
    click(e) {
      console.log(e);
    },
    open() {
      //blur the page
      document.querySelector('html').classList.add('i-blur');
    },
    close() {
      //focus the page
      document.querySelector('html').classList.remove('i-blur');
    },
    showTableBorders() {
      if (this.$refs.menuScroll.clientWidth < this.$refs.table.clientWidth) {
        this.$refs.table.classList.add('i-scrolled');
      } else {
        this.$refs.table.classList.remove('i-scrolled');
      }
    },
  },
  mounted() {
    document.querySelector('body').appendChild(this.$refs.sizeTable);
  },
};
</script>

<style>
.b-side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  transform: translateX(-100%);
  z-index: 1062;
}
#sizeTable.b-side-nav {
  background-color: #fff;
}
#sizeTable .b-side-nav__close {
  position: absolute;
  top: 65px;
  right: 65px;
  width: 32px;
  height: 32px;
  background: url('data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfOCIgZGF0YS1uYW1lPSLQodC70L7QuSA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDUxLjM0IDE0NTEuMzQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NjBweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNsb3NlPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSI2OC4xNyIgeTE9IjY4LjE3IiB4Mj0iMTM4My4xNyIgeTI9IjEzODMuMTciLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxMzgzLjE3IiB5MT0iNjguMTciIHgyPSI2OC4xNyIgeTI9IjEzODMuMTciLz48L3N2Zz4=')
    no-repeat center;
  background-size: cover;
  cursor: pointer;
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
}
@media (min-width: 768px) and (max-width: 991px) {
  #sizeTable .b-side-nav__close {
    top: 25px;
    right: 25px;
  }
}
@media (max-width: 767px) {
  #sizeTable .b-side-nav__close {
    top: 20px;
    right: 20px;
  }
}
#sizeTable .b-side-nav__close:hover {
  opacity: 0.5;
}

.b-sizes-menu {
  padding: 65px 65px 65px 120px;
}
@media (min-width: 768px) and (max-width: 991px) {
  .b-sizes-menu {
    padding: 30px;
  }
}
@media (max-width: 767px) {
  .b-sizes-menu {
    padding: 20px;
  }
}
.b-sizes-menu h2 {
  padding-bottom: 30px;
  border-bottom: 1px solid #f7f7f7;
  margin: 0 0 18px;
}
@media (max-width: 767px) {
  .b-sizes-menu h2 {
    font-size: 12pt;
    padding-bottom: 20px;
  }
}
.b-sizes-menu p {
  color: #333;
  font-size: 9.5pt;
  margin-bottom: 8px;
  line-height: 1.5;
}
.b-sizes-menu__table-xs {
  margin-left: -15px;
}
.b-sizes-menu__table-xs table {
  font-size: 9.5pt;
  color: #333;
}
.b-sizes-menu__table-xs td {
  padding: 7px 5px 7px 14px;
  white-space: nowrap;
}
.b-sizes-menu__table-xs td span {
  display: none;
}
.b-sizes-menu__table-xs th {
  font-weight: normal;
  padding: 7px 7px 7px 15px;
  white-space: nowrap;
}
.b-sizes-menu__table-xs .form-control {
  font-size: 9.5pt;
  margin-left: -14px;
}
.b-sizes-menu__table {
  margin-left: -15px;
}
.b-sizes-menu__table table {
  font-size: 8pt;
  color: #333;
}
.b-sizes-menu__table tr.i-hover td,
.b-sizes-menu__table tr.i-hover th {
  background-color: #f7f7f7;
}
.b-sizes-menu__table tr.i-hover td.i-active {
  background-color: #f3f3f3;
}
.b-sizes-menu__table.i-clicked tr.i-hover td,
.b-sizes-menu__table.i-clicked tr.i-hover th {
  background-color: transparent;
}
.b-sizes-menu__table.i-clicked tr.i-hover td.i-clicked {
  background-color: #f7f7f7;
}
.b-sizes-menu__table.i-clicked td.i-hover {
  background-color: transparent;
}
.b-sizes-menu__table.i-clicked td.i-clicked.i-hover {
  background-color: #f7f7f7;
}
.b-sizes-menu__table.i-clicked tr.i-clicked td,
.b-sizes-menu__table.i-clicked tr.i-clicked.i-hover td,
.b-sizes-menu__table.i-clicked tr.i-clicked th,
.b-sizes-menu__table.i-clicked tr.i-clicked.i-hover th {
  background-color: #f7f7f7;
}
.b-sizes-menu__table.i-clicked tr.i-clicked td.i-clicked-active,
.b-sizes-menu__table.i-clicked tr.i-clicked.i-hover td.i-clicked-active,
.b-sizes-menu__table.i-clicked tr.i-clicked td.i-clicked-active.i-hover,
.b-sizes-menu__table.i-clicked
  tr.i-clicked.i-hover
  td.i-clicked-active.i-hover {
  background-color: #f3f3f3;
}
.b-sizes-menu__table td {
  padding: 7px 5px 7px 12px;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
}
.b-sizes-menu__table td.i-hover,
.b-sizes-menu__table td.i-clicked {
  background-color: #f7f7f7;
}
.b-sizes-menu__table th {
  font-weight: normal;
  padding: 7px 7px 7px 15px;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
}
.b-sizes-menu__th {
  width: 200px;
  float: left;
}
.b-sizes-menu__td {
  margin-left: 200px;
  position: relative;
}
.b-sizes-menu__scroll {
  overflow: auto;
}
.b-sizes-menu__scroll tr td:first-child {
  padding-left: 35px;
}
.b-sizes-menu__scroll tr td:last-child {
  padding-right: 35px;
}
</style>
