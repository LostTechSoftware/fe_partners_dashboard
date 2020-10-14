import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';

export default function MainModal({ children, open, setOpen }) {
  <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <RejectionReason />
    </Fade>
  </Modal>
}
