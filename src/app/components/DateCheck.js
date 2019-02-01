import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import InputDate from "./dateInput";
import * as actions from "../state/actions";
class DateChecker extends Component {
  render() {
    console.log("re render");
    return (
      <div>
        <h3>select dates</h3>
        <p>{this.props.checkindate}</p>
        <InputDate
          type="date"
          name="checkindate"
          onchange={this.props.dateHandler.changeDate}
        />
        <InputDate
          type="date"
          name="checkoutdate"
          onchange={this.props.dateHandler.changeDate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { checkindate, checkoutdate } = state.booking;

  return {
    checkindate: checkindate,
    checkoutdate: checkoutdate
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    dateHandler: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateChecker);
