import React, { Component, createContext } from "react";

interface Props {}
interface State {
  page: string;
  setPage: any;
}

const INITIAL_APP_STATE: State = {
  page: "initial",
  setPage: (item: string) => {},
};

export const AppContext = createContext(INITIAL_APP_STATE);

export default class AppProvider extends Component<Props, State> {
  setPage = (page: string) => {
    this.setState({ page });
  };

  state = {
    page: "",
    setPage: this.setPage,
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
