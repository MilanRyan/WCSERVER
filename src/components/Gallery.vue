<!---Author: Ryan Milan
    Code Name: Gallery.vue
    Section: WD-202-->

<template>
<div class="gallery">
    <h1>{{BGSD}}</h1>

    <h2>BURGER</h2>
    
     <img src="C:\Users\Joshua\Finalprj\src\assets\Cheeseburger.jpg" alt="Burger pics">
    <p>Burger King</p>
     
     <img src="C:\Users\Joshua\Finalprj\src\assets\istockphoto-496389174-612x612.jpg" alt="Burger pics">

     <p>Mcdo Burger</p>
     
     <img src="C:\Users\Joshua\Finalprj\src\assets\jollibee-champ.jpg" alt="Burger pics">

    <p>Jollibee Burger</p>

    <h2>SOFT DRINK</h2>
    
     <img src="C:\Users\Joshua\Finalprj\src\assets\can_coca_coke_238139.jpg" alt="Soft Drink pics">

    <p>Coke</p>
    
     <img src="C:\Users\Joshua\Finalprj\src\assets\royal_tru_orange___by_inamoka_d2r5c61-fullview.jpg" alt="Soft Drink pics">

    <p>Royal</p>
    
     <img src="C:\Users\Joshua\Finalprj\src\assets\depositphotos_47482713-stock-photo-bottle-of-sprite-drink-on.jpg" alt="Soft Drink pics">

     <p>Sprite</p>
</div>
</template>

<script>
export default {

  name: 'gallery',

  data () {

    return {

      BGSD: 'Burger And Soft Drink'
    }
  }
}
</script>

<style>
.gallery{
    
    margin: -50px 0px 0px 0px;
}
h1 {

  margin: 50px 0px 0px 0px;

}
h2{
  font-size: 2em;

  font-family: 'Courier New', Courier, monospace;

  text-align: center;

  margin: 4% 0% 0% 25%;

  width: 50%;
}
p{
    font-family: 'Courier New', Courier, monospace;

    text-align: center;

     margin: 0% 0% 0% 0%;
     
     
}
img{

  max-width: 20%;

  margin:  2% 0% 0% 40%;
}
</style>