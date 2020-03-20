<template lang="pug">
div
  p.title Starship Information
  div(v-for="starship in starships")
    p Name:
      span {{ ' ' + starship.name }}
    p Model:
      span {{ ' ' + starship.model }}
    p Manufacturer:
      span {{ ' ' + starship.manufacturer }}
    p Cost in credits:
      span {{ ' ' + starship.cost_in_credits }}
    p Length:
      span {{ ' ' + starship.length }}
    p Max atmosphering speed:
      span {{ ' ' + starship.max_atmosphering_speed }}
    p Crew:
      span {{ ' ' + starship.crew }}
    p Passengers:
      span {{ ' ' + starship.passengers }}
    p Cargo capacity:
      span {{ ' ' + starship.cargo_capacity }}
    p Consumables:
      span {{ ' ' + starship.consumables }}
    p Hyperdrive rating:
      span {{ ' ' + starship.hyperdrive_rating }}
    p MGLT:
      span {{ ' ' + starship.MGLT }}
    p Starship class:
      span {{ ' ' + starship.starship_class }}
    hr.solid(v-if="starships[starships.length - 1] != starship")
</template>

<script>
export default {
  props: {
    starships: Array
  }
}
</script>

<style scoped lang="stylus">
p.title
  font-family: 'Press Start 2P', cursive
  text-transform: capitalize
  text-align: center
  font-size:20px
p
  font-weight: bold
span
  font-weight: normal
  text-transform: capitalize

hr.solid
  border-top: 3px solid #bbb

</style>
