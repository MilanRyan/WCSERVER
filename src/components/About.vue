<!---Author: Ryan Milan
    Code Name: About.vue
    Section: WD-202-->

<template>
  <div class="about">
      <h1>{{BG}}<br>A hamburger (or burger for short) is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.</h1>
       
      <h1>{{SD}}<br>soft drink, any of a class of nonalcoholic beverages, usually but not necessarily carbonated, normally containing a natural or artificial sweetening agent, edible acids, natural or artificial flavours, and sometimes juice.</h1>
      
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      BG: 'About The Burger:',
      SD: 'About The Soft Drink:'
    }
  }
}
</script>

<style scoped>
.about{

   margin: -60px 0px 0px 0px;

}
h1{
  font-size: 1.5em;

  font-family: Arial, sans-serif, monospace;

  text-align: center;

  margin: 4% 0% 0% 25%;

  width: 50%;
}
p{
  font-size: 1.5em;

  font-family: Arial, sans-serif, monospace;
  
  text-align: center;

  margin: 4% 0% 0% 25%;

  width: 50%;

}
</style>