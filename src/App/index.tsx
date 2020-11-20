import React from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider, { AppContext } from "./AppProvider";
import Articles from "../Articles";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <AppContext.Consumer>
          {({ page, articles, setArticlesData, sortUsingDate }) => (
            <Articles
              articles={articles}
              getArticles={setArticlesData}
              sortUsingDate={sortUsingDate}
            />
          )}
        </AppContext.Consumer>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
