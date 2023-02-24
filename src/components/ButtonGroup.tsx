export default function ButtonGroup(props: {
  buttonTexts: string[];
  variation: number;
}) {
  const buttonTexts = props.buttonTexts;
  const variation = props.variation;
  return (
    <span className="buttonGroup">
      {buttonTexts.map((text) => (
        <button
          key={text}
          className="headerBtn"
          id={`${text.toLowerCase()}Btn-${variation}`}
        >
          {text}
        </button>
      ))}
    </span>
  );
}
