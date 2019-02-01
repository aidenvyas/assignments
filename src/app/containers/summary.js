import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import RoomSummary from "../components/RoomSummary";
const mapStateToProps = state => {
  return {
    booking: state.booking
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
)(RoomSummary);
