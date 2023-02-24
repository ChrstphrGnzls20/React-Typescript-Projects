import IArticle from "../models/model";
import Article from "./Article";

interface IArticleListProps {
  articles: IArticle[];
  setActiveArticleAndShowModal: (e: React.SyntheticEvent, id: number) => void;
  selectedArticleIds: number[];
  onSelectArticle: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const ArticleList: React.FC<IArticleListProps> = ({
  articles,
  setActiveArticleAndShowModal,
  selectedArticleIds,
  onSelectArticle,
}) => {
  return (
    <div className="articlesCtr">
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          setActiveArticleAndShowModal={setActiveArticleAndShowModal}
          selectedArticleIds={selectedArticleIds}
          onSelectArticle={onSelectArticle}
        />
      ))}
    </div>
  );
};

export default ArticleList;
