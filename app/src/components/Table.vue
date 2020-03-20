<template lang="pug">
div
  p character list
  div(v-if="this.people.length != 0")
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
      el-table-column(
        prop='eye_color',
        label='Eye Color',
        width='110'
      )
      el-table-column(
        prop='starships_names',
        label='Starships Names'
      )
      el-table-column(
        prop='starships_models',
        label='Starships Models'
      )
</template>

<script>
export default {
  props: {
    people: Array
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size: 2em
  text-align: center
  font-family: 'Press Start 2P', cursive
  text-transform: capitalize
</style>
