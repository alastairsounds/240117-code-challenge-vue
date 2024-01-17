<script setup>
import { ref } from 'vue'
import movieService from '../services/movieService'
import MovieList from './MovieList.vue'
let search = ref('')
let movies = ref([])
const searchMovies = async () => {
  try {
    movies.value = await movieService.searchMovies(search.value)
  } catch (err) {
    console.error('error:' + err)
  }
}
</script>

<template>
  <div class="container">
    <div class="search-bar">
      <h3>Search for a movie</h3>
      <form @submit.prevent="searchMovies">
        <input v-model="search" type="text" name="search" placeholder="Search for a movie" />
        <button type="submit">Search</button>
      </form>
    </div>
    <div class="movie-list">
      <MovieList :movies="movies" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.search-bar {
  flex: 0 0 auto;
}

.movie-list {
  flex: 1 1 auto;
  overflow-y: auto;
}
</style>
