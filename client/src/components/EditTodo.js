import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  // Edit
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#editid${todo.todo_id}`}>
        Edit
      </button>

      <div className="modal fade" id={`editid${todo.todo_id}`} tabIndex="-1" role="dialog" aria-labelledby="EditModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditModalLongTitle">Edit Todo</h5>
              <button type="button" className="close btn" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <textarea
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}>
              </textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(todo.description)}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={e => updateDescription(e)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default EditTodo;