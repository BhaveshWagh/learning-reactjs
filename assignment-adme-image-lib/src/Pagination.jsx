import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`);
    const data = await res.json();

    console.log(data);

    if (data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="m-5 p-0 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="h-52 p-5 " key={prod.id}>
                <img
                  className="w-full h-[95%] object-cover mb-1"
                  src={prod.download_url}
                  alt={prod.author}
                />{" "}
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="p-3 mt-4 flex justify-center gap-4">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className="cursor-pointer"
          >
            ◀ Prev
          </span>

          <span
            onClick={() => selectPageHandler(page + 1)}
            className="cursor-pointer"
          >
            Next ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
