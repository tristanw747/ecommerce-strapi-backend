import "./FeaturedProducts.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
function FeaturedProducts({ type }) {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredProducts' >
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat similique eveniet, id aperiam illum ullam, quia illo rem quibusdam vero deserunt quae. Ex, voluptatum? Unde facere architecto odio cupiditate iste.</p>
      </div>
      <div className="bottom">
        {error ? "error something went wrong" : (loading ? "loading" : data?.map(item => (
          <Card item={item} key={item.id} />
        )))}
      </div>

    </div>
  )
}

export default FeaturedProducts