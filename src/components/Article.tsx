import IArticle from "../models/model";
import gripDot from "../assets/grip-vertical.svg";
import authorIcon from "../assets/user.svg";
import calendarIcon from "../assets/calendar.svg";
import eyeIcon from "../assets/eye.svg";

import ArticleTags from "./ArticleTags";

interface IArticleButtonsProps {
  selectedArticleIds: number[];
  onSelectArticle: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  id: number;
}

const ArticleButtons = ({
  id,
  selectedArticleIds,
  onSelectArticle,
}: IArticleButtonsProps) => {
  const isSelected = !!selectedArticleIds?.find((item) => id === item);
  return (
    <div className="settingCtr">
      <img src={gripDot} alt="grip-dot-vertical" height={25} />
      <input
        type="checkbox"
        name="select"
        id=""
        value={id}
        checked={isSelected}
        onChange={(e) => onSelectArticle?.(e, id)}
      />
    </div>
  );
};

interface IArticleProps {
  article: IArticle;
  setActiveArticleAndShowModal: (e: React.SyntheticEvent, id: number) => void;
  selectedArticleIds: number[];
  onSelectArticle: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const Article: React.FC<IArticleProps> = ({
  article,
  setActiveArticleAndShowModal,
  selectedArticleIds,
  onSelectArticle,
}) => {
  const { id, title, content, author, date } = article;

  return (
    <div className="article" data-id={id}>
      <ArticleButtons
        id={id}
        selectedArticleIds={selectedArticleIds}
        onSelectArticle={onSelectArticle}
      />
      <div className="content">
        <p className="articleTitle">{title}</p>
        <div className="articleDetails">
          <span>
            <img
              src={authorIcon}
              alt="authorIcon"
              className="icon circleIcon authorIcon"
              height={15}
            />
            {author}
          </span>
          <span>
            <img
              src={calendarIcon}
              alt="calendarIcon"
              className="icon  calendarIcon"
              height={25}
            />
            {date}
          </span>
        </div>
        <div className="articleContent">
          <span>{content}</span>
          <a href="#" onClick={(e) => setActiveArticleAndShowModal?.(e, id)}>
            <img src={eyeIcon} alt="eyeIcon" height={15} className="eyeIcon" />
            Read Full
          </a>
        </div>
      </div>
      <ArticleTags />
    </div>
  );
};

export default Article;
