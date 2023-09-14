import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TableComment extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    let { arrComment } = this.props;

    return (
      <>
        {/* <img src=" https://i.pravatar.cc/?u=20" alt="..." height={300} /> */}

        {/* <div className="row mt-2  ">
          <div className="col-2">
            <img src=" https://i.pravatar.cc/?u=1" className="rounded" alt="..." height={80} />
          </div>
          <div className="col-8 bg-secondary rounded">
            <h3>Nguyen van </h3>
            <p>like like ...</p>
          </div>
        </div> */}

        {arrComment.map((item, index) => {
          console.log("🚀 ~ file: TableComment.jsx:28 ~ TableComment ~ {arrComment.map ~ index:", index)
          return (
            <div className="row mt-2  " key={index}>
              <div className="col-2">
                <img
                  src={`https://i.pravatar.cc/?u=${item.name}`}
                  lassName="rounded"
                  alt="..."
                  height={80}
                />
              </div>
              <div
                style={{ background: "rgba(0,0,0,0.1)", padding: "10px" }}
                className="col-8  rounded row"
              >
                <div className="col-10">
                  <h3>{item.name}</h3>
                  <p>{item.content}</p>
                </div>
                <div className="col-2 mt-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const action = {
                        type: "DELETE_COMMENT",
                        payload: index,
                      };

                      this.props.dispatch(action);
                    }}
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-success mt-2"
                    onClick={() => {
                      const action = {
                        type: "EDIT_COMMENT",
                        payload: index,
                      };

                      this.props.dispatch(action);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducers.arrComment,
});

export default connect(mapStateToProps)(TableComment);
