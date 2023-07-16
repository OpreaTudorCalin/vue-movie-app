<template>
    <div class="home">
        <div class="feature-card">
            <router-link to="/movie/tt0409591">
                <img src="https://cultureofgaming.com/wp-content/uploads/2022/12/naruto_auto_x2.jpg" 
                     alt="Naruto Poster" class="featured-img">
                     <div class="detail">
                        <h3>Naruto</h3>
                        <p>Naruto is a beloved Japanese anime that follows the journey of a young ninja named Naruto Uzumaki as he strives to become the strongest ninja in his village. Alongside his friends and teammates, Naruto faces various challenges, battles powerful enemies, and learns important life lessons about friendship, perseverance, and personal growth. With its captivating action, compelling characters, and rich storytelling, Naruto has become a global phenomenon, captivating audiences worldwide and leaving a lasting impact on the world of anime.</p>
                     </div>
            </router-link>
        </div>
        <form @submit.prevent="searchMovies" action="" class="search-box">
            <input type="text" placeholder="What are you looking for?" 
                   class="textInput" v-model="search">
            <input type="submit" value="Search" class="submitInput">
        </form>

        <div class="movies-list" >
            <div class="movie" v-for="movie in movies" :key="movie.imdbID">
                <router-link :to="'/movie/' + movie.imdbID">
                    <div class="product-image">
                        <img :src="movie.Poster" alt="Movie Poster" width="270" height="480">
                        <!--<div class="type">{{ movie.Type }}</div>-->
                    </div>
                    <div class="detail">
                        <p class="year">{{ movie.Year }}</p>
                        <h3 class="title">{{ movie.Title }}</h3>
                    </div>
                </router-link>

            </div>
        </div>
    </div>

    
</template>

<script>
import { ref } from 'vue';
import env from '@/env.js';
export default{
    setup(){
        const search = ref("");
        const movies = ref([]);

        const searchMovies = () => {
            if(search.value != ""){
                fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
                .then(response => response.json())
                .then(data => {
                    movies.value = data.Search;
                    search.value = "";
                    console.log(movies.value);
                    console.log(data);
                });
            }
        }

        return {
            search,
            movies,
            searchMovies,
        }
    }
}
</script>

<style>
.home .feature-card{
        position: relative;
    }

.home .feature-card .featured-img{
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;
        position: relative;
        z-index: 0;
}

.home .feature-card .detail{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    padding: 16px;
    z-index: 1;
}

.home .feature-card .detail h3{
    color:#FFF;
    margin-bottom: 16px;
}

.home .feature-card .detail p{
    color: #FFF;
}

.search-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
}

.home .search-box input{
    display: block;
    appearance: none;
    border: none;
    outline: none;
    
}

.textInput{
    width: 100%;
    color: #FFF;
    background-color: #496583;
    font-size: 20px;
    padding: 10px 16px;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: 0.4s;
    
}

.home .textInput::placeholder{
    color: #f3f3f3;
}

.home .textInput:focus{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
}

.home .submitInput{
    width: 100%;
    max-width: 300px;
    background-color: #42B883;
    padding: 16px;
    border-radius: 8px;
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
    transition: 0.4s;
}

.home .submitInput:active{
    background-color: #3B8070;
}

.movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
}

.movies-list .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
}

.movies-list .movie .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
}

.movies-list .movie .movie-link .product-image {
        position: relative;
        display: block;
}

.movies-list .movie .movie-link .product-image img {
        display: block;
        width: 100%;
        height: 275px;
        object-fit: cover;
}

.movies-list .movie .movie-link .product-image .type {
        position: absolute;
        padding: 8px 16px;
        background-color: #42B883;
        color: #FFF;
        bottom: 16px;
        left: 0px;
        text-transform: capitalize;
}

.movies-list .movie .detail {
  background-color: #496583;
  padding: 16px 8px;
  flex: 1 1 100%;
  border-radius: 0 0 8px 8px;
}

.movies-list .movie .detail .year {
  color: #aaa;
  font-size: 14px;
}

.movies-list .movie .detail h3 {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
}
</style>