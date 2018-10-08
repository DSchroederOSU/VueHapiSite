<template>
  <div class="card ">
    <div id="cardContainer">
      <img  :src="'/static/'+card.image " />
    </div>
    <h3>
      {{card.title}}
    </h3>
    <p>
      {{card.description}}
    </p>
    <router-link :to="{ name: 'Card', params: { id: card._id }}" tag="button" class="btn btn-success w-25 mx-auto">view</router-link>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['card'],
}
</script>

<style>
.card {
  padding: 10%;
}
#cardContainer{
  padding: 5%;
  width: 100%;
  height: 80%;
  text-align: center;
}
img {
  max-width:100%;
  max-height:100%;
  display:block;
  margin:auto;
}
</style>
