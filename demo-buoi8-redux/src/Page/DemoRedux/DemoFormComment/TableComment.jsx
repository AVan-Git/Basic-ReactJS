import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TableComment extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {

    let{arrComment} = this.props;
    console.log("🚀 ~ file: TableComment.jsx:13 ~ TableComment ~ render ~ arrComment:", arrComment)
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
          return <div className="row mt-2  " key={index}>
          <div className="col-2">
            <img src= {`https://i.pravatar.cc/?u=${item.name}`} lassName="rounded" alt="..." height={80} />
          </div>
          <div className="col-8 bg-secondary rounded">
            <h3>{item.name}</h3>
            <p>{item.content}</p>
          </div>
        </div>
        })}



      </>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducers.arrComment,
});

export default connect(mapStateToProps)(TableComment);
