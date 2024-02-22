import { useState } from "react";

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [show, setShow] = useState(false)
  return (
    <div>
      <h2>Accordian</h2>
      <Panel/>
    </div>
  );
};

export default Accordian;

const Panel = (setShow) => {
  return (
    <section>
      <h1>About</h1>
      <p>
        With a population of about 2 million, Almaty is Kazakhstans largest
        city. From 1929 to 1997, it was its capital city.
      </p>
      <button onClick={()=>setShow(true)}>Show</button>
    </section>
  );
};
