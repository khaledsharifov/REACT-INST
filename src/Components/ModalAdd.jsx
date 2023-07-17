import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";


import { openModal, closeModal } from "../reducers/modal";
import { useDispatch, useSelector } from "react-redux";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;



  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalAdd() {

    const modal = useSelector(({ modal }) => modal.modal1);
    const dispatch = useDispatch();
  


  const handleClickOpen = () => {
    dispatch(openModal(true));
  };
  const handleClose = () => {
    dispatch(closeModal(false))
  };

  return (
    <div>
        
        <li  onClick={handleClickOpen} className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <AddBoxOutlinedIcon sx={{ fontSize: "30px" }} />
              Create
            </li>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modal}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Create a new post
        </BootstrapDialogTitle>
        <DialogContent dividers>

            <div className='py-[20px] lg:px-[120px]'>
                <input type="file" className='text-center' />
                <textarea className='border p-2 my-4' name="" id="" cols="35" rows="4" placeholder='Add description... '></textarea>
            </div>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}