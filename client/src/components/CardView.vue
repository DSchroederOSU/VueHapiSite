<template>
  <div class="posts">
    <h1>CardView</h1>

  </div>
</template>

<script>
export default {
  name: 'CardView',
  data () {
    return {
      posts: [],
      sections: []
    }
  },
  mounted () {
    console.log(this)
    console.log(this.$route)
  },
  methods: {

  }
}

</script>
