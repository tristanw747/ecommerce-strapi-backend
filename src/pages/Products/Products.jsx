import React from 'react';
import "./Products.scss";
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';


function Products() {

  const maxPriceRange=700
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(maxPriceRange);
  const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const { data, loading, error } = useFetch(`/sub-categories?/[filters][categories][id][$eq]=${catId}`)


  function handleChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))
  }


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={maxPriceRange} step={5} onClick={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onClick={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="asc" name="price" onClick={(e) => setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>

      </div>
    </div>
  )
}

export default Products