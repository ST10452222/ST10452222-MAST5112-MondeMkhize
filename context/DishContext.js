import React, { createContext, useContext, useState } from 'react';

const DishContext = createContext();

export const DishProvider = ({ children }) => {
  const [dishes, setDishes] = useState([
    { id: '1', name: 'Caesar Salad', course: 'Starter', description: 'A classic Caesar salad.' },
    { id: '2', name: 'Grilled Chicken', course: 'Main', description: 'Juicy grilled chicken served with sides.' },
    { id: '3', name: 'Chocolate Mousse', course: 'Dessert', description: 'Rich and creamy chocolate mousse.' }
  ]);

  return (
    <DishContext.Provider value={{ dishes, setDishes }}>
      {children}
    </DishContext.Provider>
  );
};

export const useDishes = () => useContext(DishContext);
