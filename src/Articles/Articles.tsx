import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { ArticleI } from "../App/AppProvider";
import {
  fontSize1,
  greenBoxShadow,
  color3,
  textAlignCenter,
  subtleBoxShadow,
} from "../shared/styles";
import { SelectableTile } from "../shared/Tile";

const SortButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  ${textAlignCenter}
  ${subtleBoxShadow}
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

interface Props {
  articles: ArticleI[];
  getArticles: any;
  sortUsingDate: any;
}

export default function Articles({
  articles,
  getArticles,
  sortUsingDate,
}: Props): ReactElement {
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div>
      <SortButtonStyled onClick={() => getArticles()}>
        SORT ARTICLES BY UPVOTES
      </SortButtonStyled>
      <SortButtonStyled onClick={() => sortUsingDate()}>
        SORT ARTICLES BY DATE
      </SortButtonStyled>
      <CoinGridStyled>
        {articles.map((article: ArticleI) => (
          <SelectableTile>
            <div>TITLE: {article.title}</div>
            <div>CREATED: {article.date}</div>
            <div>UPVOTES: {article.upvotes}</div>
          </SelectableTile>
        ))}
      </CoinGridStyled>
    </div>
  );
}
