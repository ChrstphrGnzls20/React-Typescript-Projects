import React from "react";

interface IArticleListHeaderProps {
  articlesCount: number;
  selectOrUnselectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedArticles: number[];
  unselectArticle: (
    e: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => void;
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ArticleListHeader: React.FC<IArticleListHeaderProps> = ({
  selectOrUnselectAll,
  articlesCount,
  selectedArticles,
  unselectArticle,
  onSearchInputChange,
}) => {
  return (
    <div className="headerCtr">
      <input
        type="checkbox"
        name="selectAll"
        id=""
        checked={selectedArticles.length === articlesCount}
        onChange={(e) => selectOrUnselectAll(e)}
      />

      <button className="headerBtn" id="selectBtn-2">
        Publish
      </button>
      <button
        className="headerBtn"
        id="deleteBtn-2"
        onClick={(e) => unselectArticle(e)}
      >
        Unselect
      </button>

      <input
        type="text"
        name="searchInp"
        id=""
        placeholder="Search ..."
        onChange={(e) => onSearchInputChange(e)}
      />
    </div>
  );
};

export default ArticleListHeader;
