<template>
  <header>
    <nav class="main-navigation">
      <div class="container">
        <div class="navbar-header">ICON</div>
        <div class="collapse">
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="site-header">
      <div class="site-branding">
        <a href="">
          <h1>LMD</h1>
          <h2>lmd.com</h2>
        </a>
      </div>
    </div>
  </header>

  <div id="content"></div>

  <footer></footer>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.main-navigation {
  background-color: yellow;
  width: 100%;
}
.container {
  width: 1170px;
  height: 50px;
  background-color: blue;
  margin-left: auto;
  margin-right: auto;
}
.navbar-header {
  float: left;
  height: 50px;
  background-color: green;
  font-size: 20px;
  font-weight: 600;
}
.collapse {
  float: right;
  background-color: pink;
}
.collapse > ul > li {
  float: right;
  height: 50px;
  width: 90px;
  text-align: center;
  padding-top: 10px;
}
.site-header {
  height: 400px;
  width: 100%;
  background: url(../assets/navPic.jpg) center no-repeat;
  background-size: cover;
  position: relative;
}
.site-branding {
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
