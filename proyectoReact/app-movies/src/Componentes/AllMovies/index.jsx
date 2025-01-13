import './allMovies.css'
const AllMovies = ({movies,render}) =>{
    return(
        <section className="all-movies">
            {movies?.map(render)}
        </section>
    )
};

export { AllMovies }