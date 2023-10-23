import { useState } from 'react';

export default function StarRating(props) {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);
  function handleClick(e) {
    setRating(+e.target.getAttribute('data'));
  }
  return (
    <div onClick={handleClick}>
      {[...new Array(limit).keys()].map((i) => (
        <span
          key={i}
          data={i + 1}
          className={i < rating ? 'star rated' : 'star'}
        >
          {/* {i < rating ? '😊' : '😔'} */}
        </span>
      ))}
    </div>
  );
}
