import React,  { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodCard from '../FoodCard/FoodCard'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=> {
              // {console.log(category, item.category);
              // }
              if (category === "All" || category === item.category) {
                return <FoodCard key={index} name= {item.name} image={item.image} id={item._id} price={item.price} description={item.description} category= {item.category}/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay