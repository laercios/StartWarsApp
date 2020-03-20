<template lang="pug">
div
  p(v-if="this.starships.length != 0") test
  p(v-if="this.people.length != 0")
    el-table(:data='people', style='width: 100%')
      el-table-column(
        prop='name',
        label='Name',
        width='160'
      )
      el-table-column(
        prop='gender',
        label='Gender',
        width='80'
      )
      el-table-column(
        prop='height',
        label='Height',
        width='80'
      )
      el-table-column(
        prop='mass',
        label='Mass',
        width='60'
      )
      el-table-column(
        prop='birth_year',
        label='Birth Year',
        width='85'
      )
      el-table-column(
        prop='hair_color',
        label='Hair Color',
        width='110'
      )
      el-table-column(
        prop='skin_color',
        label='Skin Color',
        width='110'
      )
      el-table-column(
        prop='eye_color',
        label='Eye Color',
        width='110'
      )
      //- el-table-column(prop='address', label='Address')
</template>

<script>
export default {
  data () {
    return {
      starships: [],
      people: []
    }
  },
  mounted () {
    this.$starshipService.getAllStartShips().then(
      (result) => {
        this.starships = result
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
