<template lang="pug">
div
  p.title Additional Description
  p.name Name: {{ person.name }}
  p Hair Color:
    span {{ ' ' + person.hair_color }}
  p Skin Color:
    span {{ ' ' + person.skin_color }}
  p Eye Color:
    span {{ ' ' + person.eye_color }}
</template>

<script>
export default {
  props: {
    person: Object
  }
}
</script>

<style scoped lang="stylus">
p.title
  font-family: 'Press Start 2P', cursive
  text-transform: capitalize
  text-align: center
  font-size:20px
p.name
  font-family: 'Press Start 2P', cursive
  text-transform: capitalize
  font-size: 12px
p
  font-weight: bold
span
  font-weight: normal
  text-transform: capitalize
</style>
