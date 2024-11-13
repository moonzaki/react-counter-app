import Overlay from './layouts/Overlay/Overlay';
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
function App() {

  const [overlayState, setOverlayState] = useState(false);
  return (
    <>
      <Overlay active={overlayState}>
        <Modal overlay={setOverlayState} isOverlay={overlayState} />
      </Overlay>
      <Counter overlay={setOverlayState} />
    </>
  );
}

export default App;
