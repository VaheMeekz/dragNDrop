import React from "react";
import { IDragItemProps } from "./../../constants/types/DragItemType";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/reducers/itemsSlice";
import EditModal from "./../editModal/index";

const DragItem = React.memo((props: IDragItemProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDelete = React.useCallback(() => {
    dispatch(deleteItem(props.id));
  }, []);
  
  return (
    <div className="drag-item">
      <h2>{props.text}</h2>
      <div>
        <div className="controller" onClick={handleDelete}>
          D
        </div>
        <div className="controller" onClick={handleOpen}>
          E
        </div>
      </div>
      <EditModal
        open={open}
        handleClose={handleClose}
        id={props.id}
        text={props.text}
      />
    </div>
  );
});

export default DragItem;
