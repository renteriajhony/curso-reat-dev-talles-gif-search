import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {
  const [categories, setCategorie] = useState(['One Punch Man']);

  const onAddCategory = (category) => {
    categories.find(
      (item) => item.toLowerCase().trim() === category.toLowerCase().trim(),
    )
      ? alert('Category already exists!')
      : setCategorie([category, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
