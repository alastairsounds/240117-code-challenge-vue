<script setup>
import { ref } from 'vue'

const props = defineProps({
  movies: Array
})
</script>

<template>
  <!-- give div a container class -->
  <div class>
    <div v-for="movie in movies" :key="movie.movie_id" class="movie-item">
      <img class="poster" :src="movie.poster_image_url" alt="Movie poster" />
      <div class="movie-info">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.popularity_summary }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* add spacing on top and bottom */
.movie-item {
  display: flex;
  margin: 20px 0;
}

.poster {
  width: 60px; /* adjust as needed */
  height: 90px; /* adjust as needed */
  object-fit: cover;
}

.movie-info {
  margin-left: 20px; /* adjust as needed */
}
</style>
