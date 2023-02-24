import IArticle from "../models/model";

interface IModalProps {
  article: IArticle;
  show: boolean;
  closeModal: (e: React.SyntheticEvent) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  selectArticle: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  unselectArticle: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const FullArticleModal: React.FC<IModalProps> = ({
  article,
  show,
  closeModal,
  selectArticle,
  unselectArticle,
}) => {
  const { id, title, author, date, content } = article;
  return (
    <div id="articleModal" className={`modal ${show ? "modal-show" : null}`}>
      <div className="modalContent">
        <span className="close" onClick={(e) => closeModal(e)}>
          &times;
        </span>
        <p className="articleTitle">{title}</p>

        <div className="articleDetails">
          <span>
            {author} | {date}
          </span>
        </div>
        <p className="articleBody">{content}</p>

        <div className="modalFooter">
          <button
            className="headerBtn"
            id="selectBtn-2"
            onClick={(e) => selectArticle(e, id)}
          >
            Select
          </button>
          <button
            className="headerBtn"
            id="deleteBtn-2"
            onClick={(e) => unselectArticle(e, id)}
          >
            Unselect
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullArticleModal;
