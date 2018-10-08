<template>
  <div class="mt-4">
    <h1>Gallery</h1>
    <div v-for="section in sections" class="row p-3 ml-5 mr-5">
         <div v-for="post in section" class="col-md-4">
            <Card :card = "post"/>
         </div>
    </div>
  </div>
</template>
<script>
import Card from './Card'
import PostsService from '@/services/PostService'
export default {
  name: 'posts',
  components: {
    Card
  },
  data () {
    return {
      posts: [],
      sections: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.sections = response;
    },
    getSection (val) {
      console.log(val)
    }
  }
}
</script>
<style>

.post {

}
</style>
