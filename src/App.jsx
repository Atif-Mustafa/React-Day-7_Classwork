
import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form/Form'
import GroceriesList from './GroceriesList/GroceriesList'

function App() {
  const [groceriesList, setGroceriesList] = useState(() => {
    try{
    const savedGroceries = localStorage.getItem('groceriesList');
    return savedGroceries ? JSON.parse(savedGroceries) : [];
    }catch(error){
      console.error("Error parsing localStorage data:", error);
      return []
    }
  });

  let inputBoxRef = useRef(null);

  useEffect(() => {
    inputBoxRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('groceriesList', JSON.stringify(groceriesList));
  }, [groceriesList]);

  function formSubmitted(e) {
    e.preventDefault();
    let grocery = inputBoxRef.current.value.trim();
    if (grocery !== "") {
      const groceriesListCopy = [...groceriesList];
      groceriesListCopy.push({ name: grocery, completed: false });
      setGroceriesList(groceriesListCopy);
      e.target.reset();
    }
  }

  function removeGrocery(index) {
    const groceriesListCopy = [...groceriesList];
    groceriesListCopy.splice(index, 1);
    setGroceriesList(groceriesListCopy);
  }

  function toggleGrocery(index) {
    const groceriesListCopy = [...groceriesList];
    groceriesListCopy[index].completed = !groceriesListCopy[index].completed;
    setGroceriesList(groceriesListCopy);
  }

  return (
    <>
      <h1>Grocery Bud</h1>
      <Form
        formSubmitted={formSubmitted}
        inputBoxRef={inputBoxRef}
      />
      <GroceriesList
        groceriesList={groceriesList}
        removeGrocery={removeGrocery}
        toggleGrocery={toggleGrocery}
      />
    </>
  );
}

export default App;
