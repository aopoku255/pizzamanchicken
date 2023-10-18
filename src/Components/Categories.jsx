
import React, { useState , useEffect} from 'react';
import MenuData from '../Data/Menu';

const Categories = ({ filterItems }) => {
  const [isactive, setIsActive] = useState('pizza');
  const [menuItem, setMenuItems] = useState(MenuData);

  const handleFilter = (category) => {
    console.log(`Filtering by category: ${category}`);
    filterItems(category)
    if(category) {
      setIsActive(category);
     return;
    }
}

useEffect(() => {
  filterItems(isactive); // Initially filter by the default active category (Pizza)
}, []);
  return (
    <div className='flex flex-row md:mt-0 mt-5 flex-wrap overflow-x-auto'>
                  
      <button
        className={`text-white md:px-4 px-2 py-1 ml-4 hover:bg-red-700 hover:text-white ${isactive === 'pizza' ? 'bg-red-700' : ''}`}
        onClick={() => handleFilter('pizza')}
      >
        Pizza
      </button>
    
      <button
        className={`text-white md:px-4 px-2 py-1 ml-3 hover:bg-red-700 hover:text-white ${isactive === 'noodle' ? 'bg-red-700' : ''}`}
        onClick={() => handleFilter('noodles')}
      >
        Noodles
      </button>
      <button
        className={`text-white md:px-4 px-2 py-1 ml-3 hover:bg-red-700 hover:text-white ${isactive === 'wings' ? 'bg-red-700' : ''}`}
        onClick={() => handleFilter('wings')}
      >
        Chicken Wings
      </button> 
      <button
        className={`text-white md:px-4 px-2 py-1 ml-3 hover:bg-red-700 hover:text-white ${isactive === 'chicken' ? 'bg-red-700' : ''}`}
        onClick={() => handleFilter('chicken')}
      >
        FriedRice Special
      </button>
      <button
        className={`text-white md:px-4 px-2 py-1 ml-3 hover:bg-red-700 hover:text-white ${isactive === 'jollof' ? 'bg-red-700' : ''}`}
        onClick={() => handleFilter('jollof')}
      >
        Jollof Special
      </button>
     
      
    </div>
  );
}

export default Categories;
