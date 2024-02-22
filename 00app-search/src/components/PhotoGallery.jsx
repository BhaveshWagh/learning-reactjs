import { useEffect, useState } from "react";

// import React from "react";
const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      const response = await data.json();

      setData((prevItems) => [...prevItems, ...response]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.offsetHeight ||
      isLoading
    ) {
      return;
    }
    getData();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div>
      <h1>Infinite ScrollBar</h1>
      {data.map((item) => (
        <div className="gallery" key={item.id}>
          <img src={item.url} />
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
    </div>
  );
};

export default PhotoGallery;
