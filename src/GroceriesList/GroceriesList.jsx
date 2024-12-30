// import GroceryItem from "../GroceryItem/GroceryItem"
// const GroceriesList = (props) => {
//     return (
//         <>
//         {
//             props.groceriesList.map((grocery, index) =>{
//                return  <GroceryItem 
//                grocery={grocery} 
//                key={index}
//                index = {index}
//                removeGrocery={props.removeGrocery}
//                toggleGrocery={props.toggleGrocery}/>
//             })
//         }
//         </>
//     )
// }

// export default GroceriesList



import GroceryItem from "../GroceryItem/GroceryItem"

const GroceriesList = (props) => {
    return (
        <>
        {
            props.groceriesList.map((grocery, index) =>{
               return  <GroceryItem 
               grocery={grocery} 
               key={index}
               index = {index}
               removeGrocery={props.removeGrocery}
               toggleGrocery={props.toggleGrocery}
               />
            })
        }
        </>
    )
}

export default GroceriesList
