<template lang="pug">
div
  p character list
  div(v-if="this.people.length != 0")
    el-table(:data='people', style='width: 90%')
      el-table-column(type='expand')
        template(slot-scope='props')
          PersonDescription(:person='props.row')
          StarshipsDescription(:starships='props.row.starshipsObjectArray')
      el-table-column(
        label='Name',
        width='160'
      )
        template(slot-scope='props')
          p.name {{ props.row.name }}
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
        prop='starships_names',
        label='Starships Names'
      )
      el-table-column(
        prop='starships_models',
        label='Starships Models'
      )
</template>

<script>
import PersonDescription from '@/components/PersonDescription.vue'
import StarshipsDescription from '@/components/StarshipsDescription.vue'

export default {
  props: {
    people: Array
  },
  components: {
    PersonDescription,
    StarshipsDescription
  }
}
</script>

<style lang="stylus" scoped>
p
  font-size: 2em
  text-align: center
  font-family: 'Press Start 2P', cursive
  text-transform: capitalize
p.name
  font-size: 12px
p.expander
  text-align: center
</style>
