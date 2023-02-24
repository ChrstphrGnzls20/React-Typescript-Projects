import { useState } from "react";
import "./App.css";

// IMPORT DUMMY DATA
import data from "./assets/MOCK_DATA";

// IMPORT TYPES
import IArticle from "./models/model";

// IMPORT COMPNENTS
import ArticleList from "./components/ArticleList";
import ArticleListHeader from "./components/ArticleListHeader";
import FullArticleModal from "./components/FullArticleModal";

function App() {
  const [articles, _] = useState<IArticle[]>(data);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<IArticle>(articles[0]);
  const [selectedArticleIds, setSelectedArticlesIds] = useState<number[]>([]);
  const [filteredArticles, setFilteredArticles] =
    useState<IArticle[]>(articles);
  const articlesCount: number = articles.length;

  const selectOrUnselectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedArticlesIds(
        articles.map((article) => {
          return article.id;
        })
      );
    } else {
      setSelectedArticlesIds([]);
    }
  };

  const onSelectArticle = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedArticlesIds((prevState) => {
        return [...prevState, id];
      });
    } else {
      const newSelectedArticles = selectedArticleIds.filter(
        (item) => item !== id
      );
      setSelectedArticlesIds(newSelectedArticles);
    }
  };

  const selectArticle = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setSelectedArticlesIds((prevState) => [...prevState, id]);
    setShowModal(false);
  };

  const unselectArticle = (
    e: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => {
    if (id) {
      const newSelectedArticles = selectedArticleIds.filter(
        (item) => item !== id
      );
      setSelectedArticlesIds(newSelectedArticles);
    } else {
      setSelectedArticlesIds([]);
    }
    setShowModal(false);
  };

  const setActiveArticleAndShowModal = (
    e: React.SyntheticEvent,
    id: number
  ) => {
    e.preventDefault();
    const selectedArticle = articles.filter((article) => article.id === id)[0];

    setActiveArticle(selectedArticle);
    setShowModal(true);
  };

  const closeModal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowModal(false);
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const toSearch = e.target.value;

    console.log(toSearch);

    const newFilteredArticles = articles.filter((article) => {
      console.log(article, toSearch);
      return article.author.toLowerCase().includes(toSearch.toLowerCase());
    });

    setFilteredArticles(newFilteredArticles);
  };

  return (
    <>
      <div className="App">
        <h3>News Articles</h3>
        <ArticleListHeader
          articlesCount={articlesCount}
          selectedArticles={selectedArticleIds}
          selectOrUnselectAll={selectOrUnselectAll}
          unselectArticle={unselectArticle}
          onSearchInputChange={onSearchInputChange}
        />
        <ArticleList
          articles={filteredArticles}
          setActiveArticleAndShowModal={setActiveArticleAndShowModal}
          onSelectArticle={onSelectArticle}
          selectedArticleIds={selectedArticleIds}
        />
      </div>
      <FullArticleModal
        article={activeArticle}
        show={showModal}
        closeModal={closeModal}
        onChangeHandler={onSelectArticle}
        selectArticle={selectArticle}
        unselectArticle={unselectArticle}
      />
    </>
  );
}

export default App;
