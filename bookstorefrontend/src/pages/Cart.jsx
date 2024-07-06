import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAll, removeItem, selectCartTotal } from "../features/cartSlice";
import { selectCartItemsCount } from "../features/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);
  const totalprice = useSelector(selectCartTotal);
  const handleClearCart = () => {
    dispatch(removeAll());
  };
  return (
    <div className="cart-container p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cart ({itemsCount} items)</h2>
      {itemsCount === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <div
              key={item.id}
              className="cart-item flex items-center justify-between mb-4 bg-gray-100 p-4 rounded"
            >
              <div className="item-details flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => dispatch(removeItem(item))}
              >
                Remove
              </button>
            </div>
          ))}
          {itemsCount > 0 && (
            <div className="total-section mt-4">
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold">Total:</h4>
                <p className="text-xl">${totalprice.toFixed(2)}</p>
              </div>
            </div>
          )}
        </div>
      )}
      {itemsCount > 0 && (
        <div className="flex justify-end mt-10">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex "
            onClick={handleClearCart}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
