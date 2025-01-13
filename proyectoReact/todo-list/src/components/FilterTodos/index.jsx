import './filterTodos.css'
const FilterTodos = () =>{
    return(
        <div className="filter">
            <div className="filter__all">All</div>
            <div className="filter__active">Active</div>
            <div className="filter__pending">Pending</div>
        </div>
    )

};

export { FilterTodos }