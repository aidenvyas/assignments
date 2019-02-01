import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Checkout from "../components/Checkout";
const mapStateToProps = state => {
  return {
    checkindate: state.booking.checkindate,
    checkoutdate: state.booking.checkoutdate,
    difference: state.booking.difference,
    occupants: state.booking.occupants,
    roomType: state.booking.roomType,
    roomSummary: state.booking.roomsummary
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
)(Checkout);
// dateHandler: function() {
//   const action = actions.changeDate;
//   dispatch(action);
// }
