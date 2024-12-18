const Todoitem = ({ item: { id, content }, onDeleteItem }) => {
  return (
    <>
      <p>{content}</p>
      <button type="button" onClick={() => onDeleteItem(id)}>
        DELETE TODOitem
      </button>
    </>
  );
};
export default Todoitem;
