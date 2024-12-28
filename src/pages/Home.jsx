const food = [
  {
    id: '1',
    name: 'Lime',
    imgUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
    price: 10.99,
  },
  {
    id: '2',
    name: 'Limerrr',
    imgUrl:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640',
    price: 10.22,
  },
  {
    id: '3',
    name: 'IIIIILime',
    imgUrl:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640',
    price: 12.99,
  },
];

const alertStyle = {
  color: 'red',
  backgroundColor: 'green',
  fontSize: '20',
};

const alertStyle2 = {
  color: 'green',
  backgroundColor: 'yellow',
  fontSize: '30',
};

const Test = ({ children }) => {
  return <div style={alertStyle2}>{children}</div>;
};

import Alert from '../components/Alert';
import Product from '../components/Product';
import './Home.module.css';
import Testemetet from '../components/Testemet/Testemet';
import { useEffect, useState, useRef } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Clicker from '../components/Clicker/Clicker';
import Usetwoeff from '../components/Usetwoeff/Usetwoeff';
import Form from '../components/Form/Form';
import Select from '../components/Select/Select';
import Radio from '../components/Radio/Radio';
import Checkbox from '../components/Checkbox/Checkbox';
import Controlform from '../components/Controlform/Controlform';
import todolistBase from '../components/data/todolist.json';
import Todolist from '../components/Todolist/Todolist';
import FormFormik from '../components/FormFormik/FormFormik';
// import axios from 'axios';
import ArticleList from '../components/ArticleList/ArticleList';
import { articleFuncAxios } from '../article-api';
import SearchFormArticle from '../components/SearchFormArticle/SearchFormArticle';
import ComponentUseMemo from '../components/ComponentUseMemo/ComponentUseMemo';
import Player from '../components/Player/Player';
import ForwardRef from '../components/ForwardRef/ForwardRef';
import { useToggle } from '../hooks/useToggle';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import UserMenu from '../components/UserMenu/UserMenu';
// import { useUser, userContext } from '../userContext';

export default function Home() {
  const [clicker, setClicker] = useState(0);
  const handleClicker = () => {
    setClicker(clicker + 1);
  };
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleCoordX = () => {
    setCoord({ ...coord, x: coord.x + 1 });
  };
  const handleCoordY = () => {
    setCoord({ ...coord, y: coord.y + 1 });
  };
  useEffect(() => {
    document.title = `clicker: ${clicker}`;
    console.log('clicker', clicker);
    return;
  }, [clicker]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const Modal = () => {
    useEffect(() => {
      const intID = setInterval(() => {
        console.log(`modal count: ${Date.now()}`);
      }, 2000);
      return () => {
        clearInterval(intID);
      };
    }, []);
    return <div>MODAL WINDOW</div>;
  };
  const onLogin = user => {
    console.log('user name', user.names);
    console.log('user pass', user.passwords);
  };
  const [onSelect, setOnSelect] = useState('uk');
  const onChangeSelect = value => {
    setOnSelect(value);
  };
  const [onRadio, setOnRadio] = useState('sm');
  const onChangeRadio = value => {
    setOnRadio(value);
  };
  const [onCheckbox, setOnCheckbox] = useState(false);
  const onChangeCheckbox = value => {
    setOnCheckbox(value);
  };
  const [controlForm, setControlForm] = useState({
    text: '',
    password: '',
  });
  const onChangeControlForm = event => {
    setControlForm({
      ...controlForm,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitControlForm = event => {
    event.preventDefault();
    console.log('controlForm', controlForm);
    setControlForm({
      text: '',
      password: '',
    });
  };

  const [todolist, setTodolist] = useState(todolistBase);
  const addTodoItem = event => {
    event.preventDefault();
    setTodolist([
      ...todolist,
      {
        id: crypto.randomUUID(),
        content: event.target.elements.newTodoText.value,
      },
    ]);
    event.target.reset();
  };
  const onDeleteItem = deleteId => {
    setTodolist(prev => {
      return prev.filter(item => item.id !== deleteId);
    });
  };
  const [searchTodoValue, setSearchTodoValue] = useState('');
  const searchTodoList = todolist.filter(item =>
    item.content.toLowerCase().includes(searchTodoValue.toLowerCase())
  );
  const onChangeSearchTodoList = event => {
    setSearchTodoValue(event.target.value);
  };
  const [loader, setLoader] = useState(false);
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getArticle() {
      try {
        setLoader(true);
        const res = await articleFuncAxios('react');

        setArticle(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    }
    getArticle();
  }, []);

  const [loader1, setLoader1] = useState(false);
  const [article1, setArticle1] = useState([]);
  const [error1, setError1] = useState(false);
  const handleSearchArticle = async value => {
    try {
      setArticle1([]);
      setError1(false);
      setLoader1(true);
      const response = await articleFuncAxios(value);
      setArticle1(response);
    } catch (error) {
      setError1(error);
    } finally {
      setLoader1(false);
    }
  };

  const btnRef = useRef();
  const btn2Ref = useRef();
  useEffect(() => btn2Ref.current.focus(), []);

  const { isOpen, open, close } = useToggle();

  return (
    <div>
      <hr></hr>
      <h3>UserMenu with context:</h3>
      <UserMenu />

      <hr></hr>
      <h3>use own useToggle</h3>
      <button type="button" onClick={open}>
        open modal
      </button>
      <ModalWindow isOpen={isOpen} onClose={close} />

      <hr></hr>
      <h3>ForwardRef</h3>
      <ForwardRef ref={btn2Ref}>
        <div>child div of forwardRef</div>
      </ForwardRef>

      <hr></hr>
      <h3>video useRef</h3>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <hr></hr>
      <h3>btn useRef</h3>
      <button
        type="button"
        ref={btnRef}
        onClick={() => console.log(btnRef.current)}
      >
        btnRef
      </button>
      <hr></hr>
      <h3>ComponentUseMemo</h3>
      <ComponentUseMemo />
      <hr></hr>
      <h3>ArticleList with searchform</h3>
      <SearchFormArticle handleSearchArticle={handleSearchArticle} />
      {loader1 && <p>loading...</p>}
      {error1 && <p>serch error...</p>}
      <ArticleList article={article1} />
      <hr></hr>
      <h3>ArticleList with axios</h3>
      <div className="loader">
        <PropagateLoader
          loading={loader}
          cssOverride={{}}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      {loader && <p>Loading...</p>}
      {article.length > 0 && <ArticleList article={article} />}
      {error && <p>Something wrong</p>}
      <hr></hr>
      <h3>FormFormik</h3>
      <FormFormik />
      <hr></hr>
      <h3>Todolist</h3>
      <Todolist
        todolist={searchTodoList}
        addTodoItem={addTodoItem}
        onDeleteItem={onDeleteItem}
        searchTodoValue={searchTodoValue}
        onChangeSearchTodoList={onChangeSearchTodoList}
      />
      <hr></hr>
      <Controlform
        controlForm={controlForm}
        onChangeControlForm={onChangeControlForm}
        onSubmitControlForm={onSubmitControlForm}
      >
        <h3>This is control form!</h3>
      </Controlform>
      <hr></hr>
      <Checkbox onCheckbox={onCheckbox} onChangeCheckbox={onChangeCheckbox} />
      <Radio onRadio={onRadio} onChangeRadio={onChangeRadio} />
      <Select onSelect={onSelect} onChangeSelect={onChangeSelect} />
      <Form onLogin={onLogin} />
      <h1 style={alertStyle}>Best selling</h1>
      <Usetwoeff />
      <button type="button" onClick={handleShowModal}>
        Modal, {showModal ? 'hide' : 'show'}, {showModal && <Modal />}
      </button>
      <p>
        x: {coord.x} y: {coord.y}
      </p>
      <button onClick={handleCoordX}>click x+1</button>
      <button onClick={handleCoordY}>click y+1</button>
      <Product items={food} />
      <Test>
        RRRRRRRRRR <span>gggggggggg</span>
      </Test>
      {/* <Rest></Rest> */}
      {/* <Alert valuer="error">error</Alert>
      <Alert valuer="info" bordered>
        info
      </Alert>
      <Alert valuer="success" bordered shadowed>
        success
      </Alert> */}
      <Alert valuer="error">FFFFFFFFFFFFF</Alert>
      <Alert valuer="success" bordered>
        FFFFFyyyFFFFF
      </Alert>
      <Alert valuer="info" shadowed>
        FFFFFFFoooFFFF
      </Alert>
      <Testemetet message={'first'}>First test</Testemetet>
      <Testemetet message={'second'}>second test</Testemetet>
      <Clicker value={clicker} onHandle={handleClicker} />
      <Clicker value={clicker} onHandle={handleClicker} />
    </div>
  );
}
