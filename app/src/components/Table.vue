<template lang="pug">
p(v-if="this.starShips.length != 0") test
</template>

<script>
export default {
  data () {
    return {
      starShips: [],
      people: []
    }
  },
  mounted () {
    this.$starshipService.getAllStartShips().then(
      (result) => {
        this.starShips = result
      }
    )
    this.$peopleService.getPeople().then(
      (result) => {
        this.people = result
      }
    )
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size: 2em
  text-align: center
</style>
