<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      Message: "Hello Word"
    };
  }
};
</script>

<style>
html,
body,
div,
ul,
li,
ol,
dl,
h1,
h2,
h3,
h4,
h5,
h6,
p,
header,
aside,
section,
footer {
  margin: 0px;
  padding: 0px;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>