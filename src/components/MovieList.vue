<script setup>
import { ref } from 'vue'

const props = defineProps({
  movies: Array
})
</script>

<template>
  <div>
    <div v-for="movie in movies" :key="movie.movie_id">
      <h2>{{ movie.title }}</h2>
      <img class="poster" :src="movie.poster_image_url" alt="Movie poster" />
      <p>{{ movie.popularity_summary }}</p>
    </div>
  </div>
</template>

<style scoped>
.poster {
  width: 200px; /* adjust as needed */
  height: 300px; /* adjust as needed */
  object-fit: cover;
}
</style>
