import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FormComment extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  handleSubmit = (e) => {
    e.preventDefault() ;
  }

  render() {
    return (
      <>
        <h2 className="text-center mt-4">Form comment</h2>
        <hr />
        
        <form onSubmit={() => this.handleSubmit}>
            <div className="form-group mt-2">
                <p>Name</p>
                <input type="text" name="name" id="name" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <p>Content</p>
                <input type="text" name="content" id="content" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <button className="btn btn-success">Comment</button>
            </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormComment);
