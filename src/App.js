import CheckPropTypes from 'prop-types';

function Food({name, picture, rating}){
  //console.log(props)
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  
  );
}

const foodILike = [
  {
    id : 1,
    name : 'Kimchi',
    image : 'https://img-cf.kurly.com/shop/data/goodsview/20201214/gv40000142772_1.jpg',
    rating : 5,
  },
  {
    id : 2,
    name : 'Samgiopsal',
    image : 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating : 4.9,
  },
  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg',
    rating : 3.8,
  },
  {
    id : 4,
    name : 'Kimbap',
    image : 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating : 4.1,
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />;
// }

function App() {
  // return <div className="App" />;
  return (
  <div>
    <h1>Hello</h1>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

Food.CheckPropTypes = {
  name: CheckPropTypes.string.isRequired,
  picture: CheckPropTypes.string.isRequired,
  rating: CheckPropTypes.number.isRequired,
};

export default App;
