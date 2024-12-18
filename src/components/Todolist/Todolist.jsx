import Todoitem from '../Todoitem/Todoitem';
import css from './Todolist.module.css';

const Todolist = ({
  todolist,
  addTodoItem,
  onDeleteItem,
  searchTodoValue,
  onChangeSearchTodoList,
}) => {
  console.log('searchTodoList', todolist);

  return (
    <>
      <form name="newTodoForm" onSubmit={addTodoItem}>
        <label>
          <input
            type="text"
            name="newTodoText"
            // value={ } onChange={ }
          />
          Enter your new TODOitem
        </label>
        <button type="submit">ADD new TODOitem</button>
      </form>

      <label>
        <input
          type="text"
          //   name="searchTodo"
          value={searchTodoValue}
          onChange={onChangeSearchTodoList}
        />
        enter your Search TODOitem
      </label>

      <h3>TODO list:</h3>
      <ul className={css.todolist}>
        {todolist.map(item => (
          <li key={item.id}>
            <Todoitem
              item={item}
              onDeleteItem={onDeleteItem}
              className={css.todolist_item}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todolist;
