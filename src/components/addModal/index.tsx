import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IAddModalProps } from "../../constants/types/addModalTypes";
import { style } from "./../../constants/utils/utils";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewItems } from "../../store/reducers/itemsSlice";

const AddModal = (props: IAddModalProps) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const handleAdd = () => {
    dispatch(addNewItems(text));
    setText("");
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
            Add
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddModal;
