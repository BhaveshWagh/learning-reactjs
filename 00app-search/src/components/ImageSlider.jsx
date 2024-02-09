import { useState } from "react";

const data = [
  "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
  "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://daily.jstor.org/wp-content/uploads/2019/05/the_quantum_random_number_generator_2_alt_1050x700.jpg",
];

const ImageSlider = () => {
  const [activeIndexOfImage, SetActiveIndexOfImage] = useState(0);

  const handlePrevClick = () => {
    if (activeIndexOfImage === 0) {
      SetActiveIndexOfImage(data.length - 1);
    } else {
      SetActiveIndexOfImage(activeIndexOfImage - 1);
    }

    // The below is more optimized way we written below
    // SetActiveIndexOfImage(!activeIndexOfImage ? data.length - 1: activeIndexOfImage - 1)
    // console.log(!activeIndexOfImage, activeIndexOfImage)
  };
  const handleNextClick = () => {
    if (activeIndexOfImage === data.length - 1) {
      SetActiveIndexOfImage(0);
    } else {
      SetActiveIndexOfImage(activeIndexOfImage + 1);
    }
    // SetActiveIndexOfImage((activeIndexOfImage + 1) % data.length)
    // console.log((activeIndexOfImage + 1) % data.length)
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <p onClick={handlePrevClick}>Previous</p>

      {data.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="Image"
          style={
            activeIndexOfImage === index
              ? {
                  display: "block",
                  width: "500px",
                  height: "400px",
                  objectFit: "contain",
                }
              : { display: "none" }
          }
        />
      ))}

      <p onClick={handleNextClick}>Next</p>
    </div>
  );
};

export default ImageSlider;
