<template lang="pug">
div.table
  Table(:people='people')
  div(v-if="this.starships.length != 0")
    infinite-loading(
      @infinite="infiniteHandler"
    )
</template>

<script>
import Table from '@/components/Table.vue'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'PeopleList',
  data () {
    return {
      starships: [],
      people: [],
      page: 1
    }
  },
  components: {
    Table,
    InfiniteLoading
  },
  mounted () {
    this.$starshipService.getAllStartShips().then(
      (result) => {
        this.starships = result
      }
    )
  },
  methods: {
    infiniteHandler ($state) {
      this.$peopleService.getPeopleByPage(
        this.page
      ).then((result) => {
        if (result.length) {
          this.page += 1
          result = result.map((person) => {
            this.starships.forEach(startship => {
              if (person.starships.includes(startship.url)) {
                if (person.starships_names) {
                  person.starships_names = `${person.starships_names}, ${startship.name}`
                  person.starships_models = `${person.starships_models}, ${startship.model}`
                } else {
                  person.starships_names = startship.name
                  person.starships_models = startship.model
                }
                if (person.starshipsObjectArray) {
                  person.starshipsObjectArray.push(startship)
                } else {
                  person.starshipsObjectArray = [startship]
                }
              }
            })
            return person
          })
          this.people.push(...result)
          $state.loaded()
        } else {
          $state.complete()
        }
      }).catch(() =>
        $state.complete()
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.table
  margin-left: 5%
</style>
