import React from "react";

import Feed from "./Feed";

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="Home">
      {isLoading && <p className="statusMessage">Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMessage" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}

      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMessage">No Posts to display!</p>
        ))}
    </main>
  );
};

export default Home;
