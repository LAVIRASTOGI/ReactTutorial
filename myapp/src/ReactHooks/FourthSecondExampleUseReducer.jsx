import { useReducer } from "react";
import React from "react";

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      const newPayLoad = { ...action.payload, quantity: 1 };
      return {
        ...state,
        cart: [...state.cart, newPayLoad],
        total: state.total + action.payload.price,
      };
    }

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
        total: state.total - action.payload.price,
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total: state.total - action.payload.price,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};
function FourthSecondExampleUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const increaseQuantity = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded mt-2"
        onClick={clearCart}
      >
        Clear Cart
      </button>

      <div className="mt-4">
        {state.cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          state.cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>
                {item.name} (₹{item.price})
              </span>
              <div>
                <button
                  className="bg-blue-500 text-white px-2 mx-1"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
                {item.quantity}
                <button
                  className="bg-gray-500 text-white px-2 mx-1"
                  onClick={() => decreaseQuantity(item)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  className="bg-red-500 text-white px-3 ml-2"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <h3 className="text-lg font-bold mt-4">Total Price: ₹{state.total}</h3>

      <button
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => addToCart({ id: 1, name: "Laptop", price: 50000 })}
      >
        Add Laptop ₹50,000
      </button>

      <button
        className="bg-green-500 text-white px-4 py-2 mt-4 ml-2 rounded"
        onClick={() => addToCart({ id: 2, name: "Phone", price: 20000 })}
      >
        Add Phone ₹20,000
      </button>
    </div>
  );
}

export default FourthSecondExampleUseReducer;
