// import './GroceryItem.css'
// const GroceryItem = (props) => {

//   return (
//     <>
     
//       <div className="grocery_container">
//         <div className='gg'>
//           <input type="checkbox" id={props.grocery}
//           checked={props.grocery.completed} 
//           onChange={() => props.toggleGrocery(props.index)}/>
//           <label htmlFor={props.grocery} className={props.grocery.completed?'completed': ''}>
//             {props.grocery.name}
//           </label>
//         </div>
//         <div>
//           <button onClick={() => props.removeGrocery(props.index)}>Delete</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default GroceryItem



import './GroceryItem.css'

const GroceryItem = (props) => {
  return (
    <>
      <div className="grocery_container">
        <div className='gg'>
          <input 
            type="checkbox" 
            id={props.grocery} 
            checked={props.grocery.completed} 
            onChange={() => props.toggleGrocery(props.index)} 
          />
          <label 
            htmlFor={props.grocery} 
            className={props.grocery.completed ? 'completed' : ''}
          >
            {props.grocery.name}
          </label>
        </div>
        <div>
          <button onClick={() => props.removeGrocery(props.index)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default GroceryItem
