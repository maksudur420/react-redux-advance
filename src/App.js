import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Posts</h1>
      <AddPostForm></AddPostForm>
      <PostsList></PostsList>
    </div>
  );
}

export default App;
