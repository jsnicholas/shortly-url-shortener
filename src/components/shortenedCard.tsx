function ShortenedCard(props) {
  return (
    <div className="linkBox">
      <h1>{props.originalLink}</h1>
      <p>{props.shortLink}</p>
    </div>
  );
}

export default ShortenedCard;
