import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const App = () => {

const [categories, setCategories] = useState(['Dragon Ball'])

  return (
    
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={ setCategories }/>
        
        <hr />
        
        <ol>
          {
            categories.map( category => (
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
