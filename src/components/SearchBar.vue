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
  <div>
    <div class="greetings">
      <h3>Search for a movie</h3>
      <form @submit.prevent="searchMovies">
        <input v-model="search" type="text" name="search" placeholder="Search for a movie" />
        <button type="submit">Search</button>
      </form>
    </div>
    <MovieList :movies="movies" />
  </div>
</template>
