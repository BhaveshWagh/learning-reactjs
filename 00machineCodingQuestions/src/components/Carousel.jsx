import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

const Carousel = () => {
  const [currItem, setCurrItem] = useState(0);

  const handlePrev = () => {
    if (currItem === 0 ) {
      setCurrItem(items.length - 1);
    } else {
      setCurrItem((curr) => curr - 1);
    }
  };
  const handleNext = () => {
    if (currItem === items.length - 1) {
        setCurrItem(0);
      } else {
        setCurrItem((curr) => curr + 1);
      }
  };
  
  useEffect(()=>{
    const timer = setInterval(()=>{
        handleNext();
    },2000);
    return () => clearInterval(timer)
  },[currItem])

  return (
    <div className="carousel">
      <button onClick={handlePrev} style={{ margin: "30px" }}>
        Prev
      </button>
      <div className="carousel-item">
        <img
          height="200"
          width="200"
          src={items[currItem].imageUrl}
          alt={items[currItem].title}
        />
        <h2>{items[currItem].title}</h2>
        <p>{items[currItem].description}</p>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
