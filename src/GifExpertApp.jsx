import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Shinkegi no Kyojin']);
    const onAddCategory = (newCategory) => {
        if(!categories.includes(newCategory))
            setCategories(cat => [newCategory, ...cat]);
    }

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />


            { 
                categories.map( category => 
                    (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}