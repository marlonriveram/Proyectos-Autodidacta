import './layout.css'
function Layout (prop) {
    return(
        <div className='layout '>
            {prop.children}
        </div>
    )
}

export {Layout}