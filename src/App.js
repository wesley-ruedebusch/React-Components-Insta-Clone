/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata
import Search from './components/SearchBar/SearchBarContainer'
import Posts from './components/PostsContainer/PostsPage'
import dummyData from "./dummy-data"

const App = () => {
  const [data] = useState(dummyData)
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      <Search />
      <Posts data={data} />
    </div>
  );
};
export default App;
