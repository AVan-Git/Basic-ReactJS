import React from "react";

export default function CreateProduct(props) {
  return (
    <form>
      <div className="form-group">
        <p>Id</p>
        <input type="text" name="id" id="id" className="form-control" />
      </div>

      <div className="form-group">
        <p>Name</p>
        <input type="text" name="name" id="name" className="form-control" />
      </div>

      <div className="form-group">
        <p>price</p>
        <input type="number" name="price" id="price" className="form-control" />
      </div>

      <div className="form-group mt-2">
        <button type="submit" className="btn btn-success">Create</button>
        <button type="reset" className="btn btn-secondary mx-2">Clear</button>
      </div>
    </form>
  );
}
