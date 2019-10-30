import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#607d8b',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="w3-bar-item w3-button" title="Tasks" type="button" onClick={handleOpen}>
        <AssignmentIcon fontSize="large" />
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Property Name</h2>
            <hr/>
            <h4 className="w3-center">Tasks:</h4>
            <p id="transition-modal-description">Details go here...</p>
      
            <div className="w3-responsive">
             <table className="w3-table-all w3-card-4 w3-hoverable w3-centered">
              <tr className="w3-pale-yellow">
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Person responsible</th>
                <th>Task Complete</th>
                <th>Reminder</th>
              </tr>
      
             {
                /* Dummy rows below!!! */
              
             }
              <tr>
                <td>01</td>
                <td>Feed Chicken</td>
                <td>Feed chickens within the coup</td>
                <td>Bob McPhelman</td>
                <td> <button className="w3-button" title="Task complete"> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>
      
              <tr>
                <td>02</td>
                <td>Finish paperwork</td>
                <td>Complete tax papers</td>
                <td>Marianne Sandersson</td>
                <td> <button className="w3-button" title="Task complete"> <DoneOutlineIcon /> </button> </td>
                <td><button className="w3-button" title="Task reminder"> <NotificationsActiveIcon /> </button> </td>
              </tr>
                
      
             </table>
            </div>
      
          </div>
        </Fade>
      </Modal>
    </div>
  );
}