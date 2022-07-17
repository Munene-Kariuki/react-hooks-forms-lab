import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [itemsArray, setItemsArray] = useState(items)


  //filter.js
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;

    return item.category === selectedCategory || item.name.toLowerCase().includes(search.toLowerCase());
  });

  //Item form
  function addElement(element) {
    setItemsArray([...itemsArray, element]);
    console.log(itemsArray)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
