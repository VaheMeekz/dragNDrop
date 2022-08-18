import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IEditModalProps } from "../../constants/types/addModalTypes";
import { style } from "./../../constants/utils/utils";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { editItem } from "../../store/reducers/itemsSlice";

const EditModal = (props: IEditModalProps) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState(props.text);

  const handleAdd = () => {
    dispatch(editItem({ id: props.id, text }));
    props.handleClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Item
        </Typography>
        <Box>
          <TextField
            label="Text"
            variant="filled"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <Box
          style={{
            marginTop: "10px",
          }}
        >
          <button className="btn" onClick={handleAdd}>
            Edit
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
