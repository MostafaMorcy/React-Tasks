/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
export const Shop = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState("");
  let Mounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (Mounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        Mounted = false;
      };
    };
    getProducts();
  }, []);
  const searchData = (event) => {
    let term = event.target.value;
    setSearch(term)
    let updatedData = data.filter((val) => val.title.toLowerCase().includes(search.toLowerCase()));
    console.log(data);
    setFilter([...updatedData]);
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const Filterproduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const sortPrice = () => {
    let newData = data.sort((x, y) => (x.price > y.price ? 1 : -1));
    setFilter([...newData]);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons  d-flex justify-content-center ">
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark ms-2 "
            onClick={() => Filterproduct("men's clothing")}
          >
            Men's Clothes
          </button>
          <button
            className="btn btn-outline-dark ms-2   "
            onClick={() => Filterproduct("women's clothing")}
          >
            Women Clothes
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => Filterproduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark ms-2     "
            onClick={() => Filterproduct("electronics")}
          >
            Electronics
          </button>

          <button
            className="btn btn-outline-dark ms-2 "
            onClick={() => sortPrice()}
          >
            SortByPrice
          </button>
        </div>
        <div className="container my-5 d-flex justify-content-center">
          <div className="row  ">
            <div className="col-md-12">
              <div className="searchbox">
                <input 
                  className="form-control mt-3 w-100 text-center "
                  type="search"
                  placeholder="search for product"
                  onChange={ searchData}
                  value={search}
                />
              </div>
            </div>
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4  mt-5 p-3 justify-content-center text-center">
                <img src={product.image} alt="" className="w-50" />
                <h3>{product.title.substring(0, 12)}</h3>
                <p className="price">${product.price}</p>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-2 ">
            <h1 className="display-6 fw-bolder">Lastest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Shop;

// data.filter((val) => {
//     if(search === ""){
//         return val;
//       }else if(val.title.toLowerCase().includes(search.toLowerCase())){
//         return val;
//       }
// })
