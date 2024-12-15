import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);
  useEffect(() => {
    const onScroll = () => {
      // if scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        // update the state
        setCount(count + 50);
      }
    };
    // scroll event
    window.addEventListener("scroll", onScroll);
    // memory cleanup, remove listener
    return () => window.removeEventListener("scroll", onscroll);
  }, [count]);
  // generate items
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }
  return <div>{elements}</div>;
};

export default InfiniteScroll;
