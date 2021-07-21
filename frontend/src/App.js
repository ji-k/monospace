import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PostsContainer from "./components/PostsContainer";
import * as postsActions from "./store/posts"
import PostPage from "./components/PostPage";
import PostCreate from "./components/PostCreate";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(postsActions.getPosts())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route path="/posts/new">
        <PostCreate />
      </Route>
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <PostsContainer />
          </Route>
          <Route path="/posts/:id">
            <PostPage />
          </Route>
          {/* <Route path="/posts/new">
            <PostCreate />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
