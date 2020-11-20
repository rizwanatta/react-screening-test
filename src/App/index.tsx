import React from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider, { AppContext } from "./AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <AppContext.Consumer>
          {({ page, setPage }) => (
            <h1
            // onClick={() => setPage("test the work")}
            >
              WELCOME TO ARTICLE SORTER , {page}
            </h1>
          )}
        </AppContext.Consumer>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
