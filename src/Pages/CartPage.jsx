import { CartButton } from "./ProductPaga";
import { useContext, useEffect } from "react";
import CartContext from "../ContextApi/CartContext";

const CartPage = () => {
  const { productList } = useContext(CartContext);

  function getTotalPrice() {
    return productList.reduce((total, product) => total + parseInt(product.price), 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex gap-4 my-12">
        {/* Left product list */}
        <div className="flex-1 bg-white text-[#0F1111] p-4">
          <h2 className="font-normal text-[28px] leading-9 mb-3">
            {productList.length > 0 ? 'Shopping Cart' : 'Your Amazon Cart is empty.'}
          </h2>
          <div className="w-full h-px bg-[#DDD]"></div>

          {productList.map((product) => (
            <Cart
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              status={product.status}
            />
          ))}

          <div className="w-full h-px bg-[#DDD] mt-4"></div>
          <p className="text-right text-lg leading-6 p-4">
            Subtotal ({productList.length} items): <b>$ {getTotalPrice()}</b>
          </p>
        </div>

        {/* Right cart summary */}
        <div className="w-1/4 bg-white text-[#0F1111] p-4">
          <span className="text-[12px] leading-4">
            <span className="text-[#067D62]">Your order is eligible for FREE Delivery.</span> Select this option at checkout. Details
          </span>
          <p className="text-lg leading-6 py-4">
            Subtotal ({productList.length} items): <b>$ {getTotalPrice()}</b>
          </p>
          <CartButton name="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

const Cart = ({ id, name, price, status, image }) => {
  const { removeCart, handleQytChange } = useContext(CartContext);

  return (
    <div className="flex gap-4 p-4">
      <div className="w-40">
        <img src={image} alt={name} className="w-full max-w-[10rem]" />
      </div>

      <div className="flex-grow">
        <div className="flex flex-col gap-1">
          <p className="text-[18px] leading-[1.3em] break-words">{name}</p>
          <span className="text-[#007600] text-[12px]">In {status}</span>
          <span className="text-[12px]">Eligible for FREE Shipping</span>
          <span className="text-[12px]"><b>Colour:</b> Midnight Blue</span>
          <span className="text-[12px]"><b>Size:</b> 4GB + 64GB</span>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <select
              className="text-[12px] bg-[#F0F2F2ed] rounded-md px-2 py-1 shadow-md"
              onChange={handleQytChange}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
              <option value="10">+10</option>
            </select>

            {['Delete', 'Save for later', 'See more like this', 'Share'].map((label) => (
              <span
                key={label}
                onClick={() => label === 'Delete' && removeCart(id)}
                className="text-[#007185] text-[12px] px-2 border-r border-[#ddd] cursor-pointer last:border-none"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-right text-[1.2rem] font-bold w-max">
        <span>$ {price}</span>
      </div>
    </div>
  );
};



// import "./CartPage.css";
// import { CartButton } from "./ProductPaga";
// import { useContext, useEffect, useState } from "react";
// import CartContext from "../ContextApi/CartContext";

// const CartPage = () => {
//   const { productList } = useContext(CartContext);

//   function getTotalPrice() {
//     let totalPrice = 0;
//     for (let i = 0; i < productList.length; i++) {
//       totalPrice += parseInt(productList[i].price);
//     }
//     return totalPrice;
//   }

//   return (
//     <div id="container">
//       <div className="product-cart-section">
//         <div className="product-list">
//           <h2>{productList.length > 0 ? ('Shopping Cart') : ('Your Amazon Cart is empty.')}</h2>
//           <div className="divider"></div>
//           {productList.map((product) => (
//             <Cart
//               id={product.id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               status={product.status}
//             />
//           ))}
//           <div className="divider"></div>
//           <p className="cart-total">
//             Subtotal ({productList.length} items):$ <b>{getTotalPrice()}</b>
//           </p>
//         </div>
//         <div className="product-cart">
//           <span>
//             <span className="green">
//               Your order is eligible for FREE Delivery.
//             </span>{" "}
//             Select this option at checkout. Details
//           </span>
//           <p className="cart-total">
//             Subtotal ({productList.length} items):$ <b>{getTotalPrice()}</b>
//           </p>
//           <CartButton name="Add to Cart" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// const Cart = (props) => {
//   const { id, name, price, status, image } = props;
//   const { removeCart, handleQytChange } = useContext(CartContext);

//   return (
//     <div className="cart" key={id}>
//       <div className="cart-img">
//         <img src={`../image/ProductImage/${image}`} alt="" />
//       </div>
//       <div style={{ flexGrow: "1" }}>
//         <div className="cart-detail">
//           <p className="cart-title">{name}</p>
//           <span className="cart-stock">in {status}</span>
//           <span className="cart-shipping">Eligible for FREE Shipping</span>
//           <span>
//             <b>Colour</b> : Midnight Blue
//           </span>
//           <span>
//             <b>Size:</b> 4GB + 64GB
//           </span>
//           <div className="cart-quntity">
//             <span className="cart-Qts">
//               <select className="Qts" onChange={handleQytChange}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">+10</option>
//               </select>
//             </span>
//             <span className="cart-Qts" onClick={() => removeCart(id)}>
//               Delete
//             </span>
//             <span className="cart-Qts">Save for later</span>
//             <span className="cart-Qts">See more like this</span>
//             <span className="cart-Qts">Share</span>
//           </div>
//         </div>
//       </div>
//       <div className="cart-price">
//         <span>$ {price}</span>
//       </div>
//     </div>
//   );
// };
