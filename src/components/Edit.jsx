import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { handleEdit } from "../redux/actions";

const Edit = ({ task }) => {
  const [editedAction, setEditedAction] = useState(task.action);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: task.id,
      action: editedAction,
      isDone: task.isDone,
    };
    dispatch(handleEdit(editedTask));
    closeModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="Edit">EDIT</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="edit">
          <input
            type="text"
            value={editedAction}
            onChange={(e) => setEditedAction(e.target.value)}
          />
          <div>
            <button type="submit" className="edit-conf">Confirme</button>
            <button onClick={closeModal} className="edit-cancel">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Edit;