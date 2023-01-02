import Axios from "axios";
import { authContext } from "context/authContext";
import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}
interface CartItem {
  id: number;
  quantity: number;
  dishPrice: number;
  dishName: string;
}
interface ShoppingCartContextProps {
  //   getItemQuantity: (id: number) => number | string;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (
    id: number,
    dishName: string,
    dishPrice: number,
    quantity: number
  ) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCard: (id: number) => void;
  endPrice: any;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// need object and children
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [endPrice, setEndPrice] = useState({});
  const getItemQuantity = (dishId: number) => {
    return cartItems.find((item) => item.id === dishId)?.quantity || 0;
  };

  const increaseCartQuantity = async (
    id: number,
    dishName: string,
    dishPrice: number,
    quantity: number
  ) => {
    console.log("hey");
    try {
      await Axios.post(
        "http://localhost:8800/api/restaurant/addQuantity",
        cartItems
      );
    } catch (err) {
      console.log(err);
    }
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        console.log(prev);
        return [...prev, { id, quantity: 1, dishName, dishPrice }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    setEndPrice({
      end: dishPrice * quantity,
    });
    console.log(endPrice);
  };
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id)?.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCard = (id: number) => {
    console.log("hey");
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseQuantity,
        removeFromCard,
        cartQuantity,
        cartItems,
        endPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
