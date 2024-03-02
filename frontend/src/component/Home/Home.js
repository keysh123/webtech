import React, { Fragment, useEffect } from "react";
import "./home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Video from "../video/Video.js"
import FAQs from '../../component/FAQs'
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className="Main">
            <div className="homeHeading1">
              <Video />
            </div>

            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
              {products &&
                products.slice(0, 8).map((product, index) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    delay={index * 200} 
                  />
                ))}
            </div>
<div>

<FAQs/>
</div>
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

