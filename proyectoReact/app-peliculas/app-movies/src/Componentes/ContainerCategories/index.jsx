function ContainerCategories (props) {
    return(
      <div className="conteiner-categories">
        {props.movies.map(props.render)}
      </div>
    )
};

export {ContainerCategories}