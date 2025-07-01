import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { message, Input, Badge, Avatar, Button } from "antd";
import { GetProducts } from "../../../apicalls/products";
import { setLoader } from "../../../redux/loadersSlice";
import Divider from "../../../components/Divider";
import Filters from "./Filters";
import ProductsForm from "../Profile/Products/ProductsForm";

const { Search } = Input;

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [showBids, setShowBids] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const [filters, setFilters] = useState({
    status: "approved",
    category: [],
  });

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts(filters);
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };


  const fetchProducts = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts({ ...filters, search });
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const handleUserNavigation = () => {
    if (!user) return;

    console.log(" user role:", user.role);

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      // fallback: assume normal user
      navigate("/profile");
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refresh = params.get("refresh");

    if (refresh) {
      // Clear search and filters
      setSearch("");
      setFilters({
        status: "approved",
        category: [],
      });
      getData(); // Fetch all products
    }
  }, [location.search]);

  useEffect(() => {
    console.log("Fetched products:", products);
  }, [products]);

  return (
    <div className="flex flex-col gap-5 p-4">
      {user && (
        <div className="flex items-center ml-auto gap-10">
          {/* Left Side: Add Product Button */}
          <div>
            <Button
              type="default"
              className="h-10 text-white bg-blue-500 hover:bg-blue-600 transition shadow-md"
              onClick={() => {
                setSelectedProduct(null);
                setShowProductForm(true);
              }}
            >
              Add Product
            </Button>
          </div>

          {/* Right Side: User & Notifications */}
          <div className="bg-white px-3 rounded flex gap-2 items-center resposive-div">
            <i
              className="ri-user-fill cursor-pointer text-xl"
              onClick={handleUserNavigation}
            />

            <span
              className="underline cursor-pointer uppercase hidden md:inline"
              onClick={handleUserNavigation}
            >
              {user?.name}
            </span>

            <Badge
              count={
                notifications?.filter((notification) => !notification.read)
                  .length
              }
              onClick={() => {
                readNotifications();
                setShowNotifications(true);
              }}
              className="cursor-pointer"
            >
              <Avatar
                shape="circle"
                icon={<i className="ri-notification-line"></i>}
              />
            </Badge>
          </div>
        </div>
      )}

      {/* Search + Filter Icon Row */}
      <div className="flex items-center gap-1 w-full">
        {/* Filter Icon */}
        {!showFilters && (
          <i
            className="ri-equalizer-fill text-2xl cursor-pointer"
            onClick={() => setShowFilters(true)}
          ></i>
        )}

        {/* Search Box */}
        <div className="flex items-center gap-2 flex-grow px-3">
          <input
            type="text"
            placeholder="Search products here..."
            className="flex-grow outline-none rounded-md px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchProducts();
            }}
          />

          {/* Clear (X) Button */}
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                getData(); // this will fetch all products
              }}
              className="text-gray-400 hover:text-black"
              title="Clear"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          )}

          {/* Search Icon Button */}
          <button
            type="button"
            onClick={fetchProducts}
            className="text-gray-600 hover:text-black"
            title="Search"
          >
            <i className="ri-search-line text-xl"></i>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Filters */}
        {showFilters && (
          <div className="w-full lg:w-72">
            <Filters
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        )}

        {/* Products Grid */}
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products?.length === 0 ? (
            <div className="col-span-full flex flex-col justify-center items-center py-10 px-4 text-center">
              <h1 className="text-xl  sm:text-xl md:text-2xl text-gray-500 font-semibold mb-2">
                No products added yet.
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-2xl text-blue-500 font-semibold">
                Be the first one to add a product!
              </h1>
            </div>
          ) : (
            products.map((product) => (
              <div
                className="border border-gray-300 rounded flex flex-col gap-3 pb-2 cursor-pointer hover:shadow-md transition"
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  className="w-full h-64 p-2 rounded-md object-cover"
                  src={product.images[0]}
                  alt="product"
                />

                <div className="px-2 flex flex-col">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <p className="text-sm text-gray-600">
                    {product.age} {product.age === 1 ? "year" : "years"} old
                  </p>
                  <Divider />
                  <span className="text-xl font-semibold text-green-700">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {showProductForm && (
        <ProductsForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          selectedProduct={selectedProduct}
          getData={getData}
        />
      )}
    </div>
  );
}

export default Home;
