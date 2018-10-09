<template>
  <div class="posts">
    <h1>CardView</h1>
    <div class="p-0">
      <div id="cardContainer p-0">
        <img class="w-25" :src="'/static/'+card.image " />
      </div>
      <h3>
        {{card.title}}
      </h3>
      <p>
        {{card.description}}
      </p>
      <router-link :to="{ name: 'Card', params: { id: card._id }}" tag="button" class="btn btn-success w-25 mx-auto">view</router-link>
    </div>
  </div>
</template>

<script>
import {getCardById} from '@/services/PostService'

export default {
  name: 'CardView',
  data () {
    return {
      card: []
    }
  },
  mounted () {
    this.getCard(this.$route.params.id)
  },
  methods: {
    async getCard (id) {
      let response = await getCardById(id)
      console.log(response.data[0]);
      this.card = response.data[0];
    }
  }
}

</script>
