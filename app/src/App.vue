<template lang="pug">
#app
  p StarWars
  router-view
</template>

<style lang="stylus" scoped>
@font-face
    font-family: DistantGalaxy
    src: url('assets/fonts/SfDistantGalaxyOutline-xoeO.ttf')
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
p
  font-family: DistantGalaxy
  font-size: 50px
</style>
