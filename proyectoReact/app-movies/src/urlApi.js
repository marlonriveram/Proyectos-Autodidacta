export const urlApi = {
    movies:[
        { 
            name:'Now Playing',
            url:function Movies (page) {return `https://api.themoviedb.org/3/movie/now_playing?language=en&page=${page}`},
            slug: 'now playing',
        },
        { 
            name:' Popular',
            url:function Movies (page) {return `https://api.themoviedb.org/3/movie/popular?language=en&page=${page}`},
            slug: 'popular',
        },
        { 
            name:'Top Rated',
            url:function Movies (page) {return `https://api.themoviedb.org/3/movie/top_rated?language=en&page=${page}`},
            slug: 'top Rated',
        },
        { 
            name:'UpComming',
            url:function Movies (page) {return `https://api.themoviedb.org/3/movie/upcoming?language=en&page=${page}`},
            slug: 'upComming',
        },
       
        // getFavorite: function Favotires(page) { return`https://api.themoviedb.org/3/account/20384868/favorite/movies?language=en&page=${page}`},
    ],
    Genres: {
        allGenres:'https://api.themoviedb.org/3/genre/movie/list?language=en',
        moviesByGenre: function moviesByGenre(page,state) {return `https://api.themoviedb.org/3/discover/movie?language=en&page=${page}&with_genres=${state.idGenero}`}
    },
    ImageFormat: 'https://api.themoviedb.org/3/configuration',
    AddFavorite:'https://api.themoviedb.org/3/account/20384868/favorite',
    creditos:function credits (movieId) {return `https://api.themoviedb.org/3/movie/ ${movieId} /credits?language=en-US`},
    videos:function credits (movieId){return`https://api.themoviedb.org/3/movie/${movieId}/videos`},
    search:function searchMovi (nameMovie){ return `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&include_adult=false&language=en-US&page=1`}
};