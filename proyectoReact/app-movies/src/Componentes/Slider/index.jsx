import { forwardRef } from 'react'
import './slider.css'
const Slider = forwardRef((props,ref) =>{
    return(
        <div 
        ref={ref}
        className='slider'>
            {props.isMobile && props.rowLeft}
            {props.data?.map(props.render)}
            {props.isMobile && props.rowRight}
        </div>
    )
});

export { Slider }