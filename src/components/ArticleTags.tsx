const ArticleTags: React.FC = () => {
  const tags = ["Sports", "WorldWide", "Local"];
  return (
    <span className="tagsCtr">
      {tags.map((tag) => (
        <span key={tag}>#{tag}</span>
      ))}
    </span>
  );
};

export default ArticleTags;
