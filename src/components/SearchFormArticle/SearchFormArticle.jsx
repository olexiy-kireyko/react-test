const SearchFormArticle = ({ handleSearchArticle }) => {
  const onSearchArticle = e => {
    e.preventDefault();
    const form = e.target;
    if (form.article_topic.value.trim() === '') {
      alert('wrong search value!');
      return;
    }
    handleSearchArticle(form.article_topic.value.trim());
    form.reset();
  };
  return (
    <>
      <form onSubmit={onSearchArticle}>
        <label>
          <input type="text" name="article_topic" />- input search article topic
        </label>
        <button type="submit">search article</button>
      </form>
    </>
  );
};
export default SearchFormArticle;
