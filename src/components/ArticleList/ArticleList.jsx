const ArticleList = ({ article }) => {
  return (
    <>
      <ul>
        {article.map(({ objectID, title }) => (
          <li key={objectID}>
            <div>title: {title}</div>
          </li>
        ))}
      </ul>
      <p>from array list</p>
      {Array(10)
        .fill('')
        .map((_, index) => (
          <p key={index}>{index + 1}</p>
        ))}
    </>
  );
};
export default ArticleList;
