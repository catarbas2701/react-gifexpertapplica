import {React} from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "../components/GifGridItem";

export const GifGrid = ({category}) => {

    const {data: images,loading} = useFetchGifs( category );


    // getGifs();

    return(
        <>
        
        <h3 className="card animate__animated animate__swing">{category} </h3>
        {loading && <p className="animate__animated animate__flash">loading</p> }
        <div className="card-grid"></div>
        {
            images.map( img=> (
                <GifGridItem 
                key = {img.id}
                {...img} 
                />
                ))
        }
                    
        </>
    )
}










