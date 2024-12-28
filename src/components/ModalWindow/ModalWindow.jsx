import s from './ModalWindow.module.css';

const ModalWindow = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={s.modal_window}>
          <p>ModalWindow</p>
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>
      )}
    </>
  );
};

export default ModalWindow;
