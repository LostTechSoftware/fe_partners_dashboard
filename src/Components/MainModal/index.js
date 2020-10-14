import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import './styles.css';

const MainModal = ({ children, open, setOpen }) => (
  <Modal
    open={open}
    onClose={() => setOpen(false)}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <div className='modalBox'>
        { children }
      </div>
    </Fade>
  </Modal>
)

export default MainModal;
