import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteUser } from '../../actions/userAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Delete = ({ id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const deleteHandler = () => {
		dispatch(deleteUser(id, navigate));
		setOpen(true)
	}

	return (
		<div>
			<Button variant='outlined'
				onClick={handleClickOpen}
				sx={{
					borderColor: "#880ED4",
					borderRadius: '2em',
					textTransform: 'initial',
					color: '#880ED4'
				}}>
				<DeleteOutlineIcon sx={{
					color: '#880ED4'
				}} />
				Delete Profile
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Are you sure you want to delete your profile"}
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color='success' autoFocus>Disagree</Button>
					<Button onClick={deleteHandler} color='error'>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Delete;
