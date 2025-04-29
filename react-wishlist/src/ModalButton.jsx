import React, { useState } from "react";
function ModalButton(props) {
  const [title, setWishName] = useState("");
  const [description, setWishDescription] = useState("");
  const [link, setWishLink] = useState("");
  const [category, setSelected] = useState("");
  function addInfoInInput(data) {
    setWishName(data.title);
    setWishDescription(data.body);
  }
  function handleClick(event) {
    event.preventDefault();

    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        addInfoInInput(data);
        // {title: "foo", body: "bar", userId: 1, id: 101}
      });
  }
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              className="create-element-form"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                props.addWish(description, title, link, category);
                setSelected("");
                setWishLink("");
                setWishName("");
                setWishDescription("");
              }}
            >
              <div className="form-wrap mb-3">
                <label htmlFor="link" className="form-label">
                  Add a link
                </label>
                <div className="input-and-button inpButt">
                  <input
                    value={link}
                    onChange={(e) => setWishLink(e.target.value)}
                    className="link-input form-control"
                    type="text"
                    id="link"
                    placeholder="Add a link"
                  />
                  <button
                    onClick={handleClick}
                    className="fetch btn btn-primary fetch-button"
                  >
                    for Fetch
                  </button>
                </div>
              </div>
              <div className="form-wrap mb-3">
                <label htmlFor="name" className="form-label">
                  {" "}
                  Write a title{" "}
                </label>
                <input
                  value={title}
                  onChange={(e) => setWishName(e.target.value)}
                  className="form-control title-input"
                  type="text"
                  id="name"
                  placeholder="Напишите название"
                  required
                />
              </div>
              <div className="form-wrap mb-3 category-filter">
                <label htmlFor="filter-select">Choose a category</label>
                <select
                  value={category}
                  onChange={(e) => setSelected(e.target.value)}
                  className="category-choice filter-choice form-select"
                  name="filter"
                  id="filter-select"
                >
                  <option value="">Add a category</option>
                  <option className="category-1" value="category-1">
                    Category 1
                  </option>
                  <option className="category-2" value="category-2">
                    Category 2
                  </option>
                  <option className="category-3" value="category-3">
                    Category 3
                  </option>
                </select>
              </div>

              <div className="form-wrap mb-3">
                <label htmlFor="description" className="form-label">
                  Print a description
                </label>
                <input
                  value={description}
                  onChange={(e) => setWishDescription(e.target.value)}
                  className="description-input form-control"
                  type="text"
                  id="description"
                  placeholder="Print a description"
                />
              </div>

              <div className="buttons-form-container modal-footer">
                <button className="send-button btn btn-primary">
                  <span>Отправить</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalButton;
