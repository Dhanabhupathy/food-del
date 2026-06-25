import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  const popularItems = [
    food_list.find(item => item.category === "Rolls"),
    food_list.find(item => item.category === "Deserts"),
    food_list.find(item => item.category === "Sandwich"),
    food_list.find(item => item.category === "Cake"),
    food_list.find(item => item.category === "Pasta"),
    food_list.find(item => item.category === "Noodles")
  ].filter(Boolean);

  return (
    <div className='food-display'>

      <div className='food-display-list'>
        {
          food_list.map((item) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  id={item._id}
                />
              )
            }
            return null;
          })
        }
      </div>

      <h2 id="popular-dishes">Popular Dishes</h2>

      <div className='food-display-list'>
        {
          popularItems.map((item) => (
            <FoodItem
              key={item._id}
              image={item.image}
              name={item.name}
              desc={item.description}
              price={item.price}
              id={item._id}
            />
          ))
        }
      </div>

    </div>
  )
}

export default FoodDisplay