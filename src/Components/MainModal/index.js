import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';

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
      { children }
    </Fade>
  </Modal>
)

export default MainModal;
