// import Btn from"./Btn";
// import ModeToggler from "./ModeToggler";
// import './App.css';

// import { useState } from "react";



// function App() {
//   return(
//     <div>
//       <Btn/>
//       <ModeToggler/>
//     </div>
//   )
// }

// export default App;







// const data = [
//   {
//       id: "1",
//       title: "shawarma",
//       description: "The best shawarma in town",
//       price: "$50",
//   },
//   {
//       id: "2",
//       title: "lemon ice cream",
//       description: "The best lemon ice cream in town",
//       price: "$60",
//   },
//   {
//       id: "3",
//       title: "pizza",
//       description: "The best pizza in town",
//       price: "$70",
//   },
//   {
//       id: "4",
//       title: "burger",
//       description: "The best burger in town",
//       price: "$80",
//   },
// ];

// const topDesserts = data.map(dessert=>{
//   return {
//       content: `${dessert.title} - ${dessert.description}`,
//       price: dessert.price,
//   }
// })


// export default function App(){
//   console.log(topDesserts);
//   return <h1>examine the console output</h1>
// }










// How to render a list of items in React
// const topDessert = [
//   {
//       id: "1",
//       title: "shawarma",
//       description: "The best shawarma in town",
//       price: "$50",
//   },
//   {
//       id: "2",
//       title: "lemon ice cream",
//       description: "The best lemon ice cream in town",
//       price: "$60",
//   },
//   {
//       id: "3",
//       title: "pizza",
//       description: "The best pizza in town",
//       price: "$70",
//   },
//   {
//       id: "4",
//       title: "burger",
//       description: "The best burger in town",
//       price: "$80",
//   },
// ];

// function App(){
//   const listItems = topDessert.map(dessert=>{
//     const itemText = `${dessert.title} - ${dessert.price}`
//     return <li>{itemText}</li>
//   })
//   return(
//     <div>
//       <ul>
//         {listItems}
//       </ul>
//     </div>
//   );
// }


// export default App;













// import { useState } from "react";

// const Todo = props =>(
//   <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>

//     <td>
//       <input/>
//     </td>

//     <td>
//       <label>{props.createdAt}</label>
//     </td>
//   </tr>
// );

// function App(){
//   const [todos,setTodos] = useState([{
//     id: "todo1",
//     createdAt: "12:45",
//   },{
//     id: "todo2",
//     createdAt: "14:45",
//   }]);

//   const reverseOrder =()=>{
//     // Reverse is to mutative operation, so we to create a new array first
//     setTodos([...todos].reverse());
//   }

//   return(
//     <div>
//       <button onClick={reverseOrder}>Reverse</button>
//       <table>  
//         <tbody>
//           {todos.map((todo)=>(
//             <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;




// creating a controlled form using react

// import { useState } from "react";
// function App (){
//   const [name, setName] = useState("");


//   const handleSubmit =(e)=>{
//     e.preventDefault();

//     setName("");
//     console.log("form submitted")
//   }

//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={e=> setName(e.target.value)}/>
//           </div>
//           <button disabled={!name} type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }
// export default App;










// Building a feedback form with react
// import { useState } from "react";


// function App (){
//   const [score, setScore]= useState("");
//   const [comment, setComment] = useState("");
//   const [backgroundColor, setBackGroundColor] = useState("white")

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     if (Number(score) <=5 && comment.length <= 10){
//       alert("please provide a comment why the experience was poor");
//       return;
//     }
//     console.log("form submitted");
//     setComment(" ");
//     setScore("10");
//   }
//   return(
//     <div>
//       <form onSubmit={handleSubmit} style={{backgroundColor: backgroundColor}} >
//         {/* making use of inline styling so i can alter the state of the background color */}
//       <fieldset>
//         <h2>Feddback form</h2>
//         <div>
//           <label>Score:{score} </label>
//           <input type="range" min="0" max="10" onChange={e=> setScore(e.target.value)} />
//         </div>
//         <div>
//           <input type="color" onChange={e=> setBackGroundColor(e.target.value)}/>
//         </div>
//         <div className="Field">
//           <label>Comment: </label>
//           <textarea value={comment} onChange={e=> setComment(e.target.value)}></textarea>
//         </div>
//         <button type="Submit">Submit</button>
//       </fieldset>
//       </form>
      
//     </div>
//   )
// }
// export default App;










//  working with the use useReducer hook in react, this is an advance useState hook for more complex compomenents
// import { useReducer } from "react";
// the Reducer hookget a reducer function in addition to the initial state.
// const reducer = (state, action)=>{
//   if (action.type ==="buy_ingredients") return {money: state.money - 10};
//   if (action.type ==="sell_a_meal") return {money: state.money + 10};
//   if (action.type ==="celebrity_visit") return {money: state.money + 5000};
//   return state;
// }
// function App(){

//   const initialState ={money: 100};
//   const [state, dispatch] = useReducer(reducer, initialState);


//   return(
//     <div>
//       <h1>Wallet:{state.money}</h1>
//       <div>
//         <button onClick={()=>dispatch({type: "buy_ingredients"})} >Shopping for veggies!</button>
//         <button onClick={()=>dispatch({type: "sell_a_meal"})} >Serve a meal to the customer</button>
//         <button onClick={()=>dispatch({type: "celebrity_visit"})} >Celebrity Visit</button>
//       </div>
//     </div>
//   );
// }
// export default App;
// import React, { useEffect, useState } from 'react'
import Signup from './user-domain/user-signup/Signup';
// import Signup from './user-domain/user-signup/Signup'




const App = () => {
  // const [count, setCount] = useState(10);
  // const [backgroundColor,setBackgroundColor] = useState("white");
  // const clickHandler =()=>{
  //   setCount(count+2);
  // }
  // const clickhandler =()=>{
  //   setCount(count-2);
  // }
  // const clickhandler1 =()=>{
  //   setCount(0);
  // }
  // const myStyle={
  //   backgroundColor: backgroundColor
  // }
  // const colorPicker =(e)=>{
  //   setBackgroundColor(e.target.value);
  // }

  // const [data, setData] = useState(null);
  // useEffect (()=>{
  //   const fetchData = async() =>{
  //     const response = await fetch("https://api.example.com/data");
  //     const result = await response.json();
  //     setData(result);
  //   };
  //   fetchData();
  // },[]);
  return (
    
    // <div style={myStyle}>
    //   <h1>{count} this is your count</h1>
    //   <button onClick={clickHandler} >+2</button>
    //   <button onClick={clickhandler} >-2</button>
    //   <button onClick={clickhandler1} >reset</button>
    //   <input type='color' onChange={colorPicker} />
      
    // </div>
      <div>
        <Signup/>
      </div>



    // <div>
    //   {
    //     data ?(
    //       <ul>
    //         {data.map(item=> <li key={item.id} >{item.name}</li>)}
    //       </ul>
    //     ) :(
    //       <p>loading data ....</p>
    //     )
    //   }
    // </div>
  )
}; 

export default App