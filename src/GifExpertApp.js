
import React, {useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

    // const categories = [ 'one Punch','Samurai X', 'Dragon Ball']
    const[Categories,setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () =>{
    //     setCategories([...Categories,'HunterXHunter']);
    // }



    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            <ol>
                {
                    Categories.map( category =>( 
                        <GifGrid 
                        key={category} 
                        category={category} 
                        />
                    ))           

                }

            </ol>


        </>
    )
}




