<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-color: #ffffff;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  line-height: 1.4444444444rem;
}

h1 {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  letter-spacing: -0.049375rem;
  font-size: 5rem;
  line-height: 5.0555555556rem;
  margin-top: 4.3333333333rem;
  margin-bottom: 1.4444444444rem;
  font-weight: 700;
  color: #6d6d6d;
}
h2 {
  font-size: 3rem;
  line-height: 2.5277777778rem;
  font-weight: 300;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  background: rgba(10, 19, 29, 0.98);
}
p {
  font-size: 20px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: -0.05em;
  color: #6d6d6d;
}
hr {
  height: 0.5rem;
  background-size: 100% 1.4444444444rem;
  background-image: linear-gradient(135deg, #90f1ee 0%, #67d5d1 100%);
  width: 100px;
  border-style: none;
  margin-left: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
button {
  color: #ffffff;
  padding: 10px 0;
  min-width: 300px;
  margin-bottom: 15px;
  font-size: 20px;
  background: linear-gradient(135deg, #90f1ee 0%, #84d4d2 80%);
  border: none;
  border-radius: 8px;
  height: 45px;
  transition: all 0.3s;
}
button:hover {
  box-shadow: 0px 7px 26px 0px rgba(0, 0, 0, 0.23);
  transform: scale3d(1.03, 1.03, 1.03);
}
button:focus {
  outline: 0;
}
li {
  display: inline-block;
  position: relative;
}

a {
  color: #42b983;
}
</style>
