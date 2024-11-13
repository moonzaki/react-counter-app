import Button from '../Button/Button';
import Text from '../Text/Text';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.scss';

function Modal({ ...props }) {
  const { overlay, isOverlay } = props;

  return (
    <div className={`modal${isOverlay ? ' active' : ''}`}>
      <Text tag="h2" className="modal__title">Modal
        <Button className="button" onClick={() => overlay(false)}>
          <CloseIcon style={{ color: '#313131' }} />
        </Button>
      </Text>
    </div>
  );
}

export default Modal;
