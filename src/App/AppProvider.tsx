import React, { Component, createContext } from "react";
const databases = require("../data/data.json");

interface Props {}

export type ArticleI = {
  title: string;
  upvotes: number;
  date: string;
};

interface State {
  page: string;
  setArticlesData: any;
  sortUsingDate: any;
  articles: ArticleI[];
}

const INITIAL_APP_STATE: State = {
  page: "initial",
  setArticlesData: () => {},
  sortUsingDate: () => {},
  articles: [],
};

export const AppContext = createContext(INITIAL_APP_STATE);

export default class AppProvider extends Component<Props, State> {
  sortUsingDate = () => {
    // TODO ASSIGNMENT ONE:  sorted by DATE CREATED by ascending

    let articleData: ArticleI[] = [];
    databases.forEach((db: ArticleI) => {
      articleData.push(db);
    });
    articleData.sort(function (a, b) {
      let dateStart: any = new Date(b.date);
      let dateEnd: any = new Date(a.date);
      return dateStart - dateEnd;
    });

    this.setState({ articles: articleData });
  };

  setArticlesData = () => {
    let articleData: ArticleI[] = [];
    databases.forEach((db: ArticleI) => {
      articleData.push(db);
    });

    // DONE ASSIGNMENT ONE:  sorted by upvotes by ascending
    articleData.sort((a, b) => b.upvotes - a.upvotes);
    this.setState({ articles: articleData });
  };

  state = {
    page: "",
    setArticlesData: this.setArticlesData,
    sortUsingDate: this.sortUsingDate,
    articles: [],
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
