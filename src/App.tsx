import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import DragItem from "./components/dragItem/index";
import { RootState } from "./store/store";
import AddModal from "./components/addModal/index";

function App() {
  // const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <div>
        <button className="btn" onClick={handleOpen}>
          Add New
        </button>
      </div>
      <div className="dragBox">
        <div className="dragBoxTitleBox">
          <h2>Drag and Drop</h2>
        </div>
        {items.length ? (
          items.map((item) => {
            return (
              <DragItem
                id={item.id}
                order={item.order}
                text={item.text}
                key={item.id}
              />
            );
          })
        ) : (
          <h2>Nothing Here</h2>
        )}
      </div>
      <AddModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
