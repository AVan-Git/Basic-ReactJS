import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FormComment extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const action = {
      type: 'HANDLE_SUBMIT',
      payload:this.props.commentInfo
    }

    this.props.dispatch(action)
  };

  //
  handleChange = (e) => {
    let {id,value} = e.target;
    
    const action = {
      type: 'HANDLE_CHANGE',
      payload: {
        id: id,
        value: value
      }
    }

    this.props.dispatch(action);
    
  }

  render() {
    // console.log(this.props);
    let { name, content } = this.props.commentInfo;
    return (
      <>
        <h2 className="text-center mt-4">Form comment</h2>
        <hr />

        <form onSubmit={this.handleSubmit}>
          <div className="form-group mt-2">
            <p>Name</p>
            <input
              name="name"
              id="name"
              value={name}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mt-2">
            <p>Content</p>
            <input
              name="content"
              id="content"
              value={content}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-success">Comment</button>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  commentInfo: state.commentReducers.commentInfo,
});

export default connect(mapStateToProps)(FormComment);
