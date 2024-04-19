import { createContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    setCartItems((prevCartItems) => [...prevCartItems, course]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
  };

  const saveCartToDatabase = async () => {
    try {
      const firestore = firebase.firestore();
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        throw new Error('No user signed in.');
      }
      const userCartRef = firestore.collection('userCarts').doc(currentUser.uid);
      await userCartRef.set({ cartItems });
      console.log('Cart data saved to the database successfully!');
    } catch (error) {
      console.error('Error saving cart data to the database:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, saveCartToDatabase }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };

