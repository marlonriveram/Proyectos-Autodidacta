export const urls = {
    movieCategory:[
        {name:'Now Playing',url:`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, slug:'now_playing'},
        {name:'Popular',url:`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, slug:'popular'},
        {name:'Top Rated',url:`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, slug:'top_rated'},
        {name:'UpComing',url:`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, slug:'upcoming'},
    ],
    tvSeriesCategory:[
      {name:'Airing Tv',url:`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`, slug:'airing_today'},
      {name:'On The Air',url:`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`, slug:'on_the_air'},
      {name:'Popular',url:`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`, slug:'popular'},
      {name:'Top Rated',url:`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, slug:'top_rated'},
    ]
  }