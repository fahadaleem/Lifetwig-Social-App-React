import logo from './logo.svg';
import './App.css';
import CustomAppBar from "./Components/AppBar"
import ResponsiveDrawer from "./Components/Drawer"
import PrimarySearchAppBar from "./Components/NewAppBar"
import Navbar from "./Components/SimpleAppBar"
import Post from "./Components/Posts"
import PublishedPost from "./Components/PublishedPosts"
function App() {
  return (
   <div>
    <CustomAppBar />
    <Post />
    <PublishedPost />
    <PublishedPost />

   </div>
  );
}

export default App;
