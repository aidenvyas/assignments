import * as actionTypes from "../action-types";

const INITIAL_STATE = {
  checkindate: "",
  checkoutdate: "",
  difference: 0,
  roomType: "",
  occupants: 0,
  roomCharge: 0,
  occupantCharges: 0,
  totalRoomCharges: 0,
  totalOccupantCharges: 0,
  discount: 0,
  grandTotal: 0,
  afterTax: 0,
  total: 0,
  gst: 0
};

const bookingReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload, " in booking reducer");
  switch (action.type) {
    case actionTypes.DATE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case actionTypes.GET_DIFF:
      return {
        ...state,
        difference: action.payload
      };
    case actionTypes.GET_SUMMARY:
      return {
        ...state,
        roomCharge: action.payload.roomCharge,
        occupantCharges: action.payload.occupantCharges,
        totalRoomCharges: action.payload.totalRoomCharges,
        totalOccupantCharges: action.payload.totalOccupantCharges,
        discount: action.payload.discount,
        grandTotal: action.payload.grandTotal,
        afterTax: action.payload.afterTax,
        total: action.payload.total,
        gst: action.payload.gst
      };
    default:
      return state;
  }
};

export default bookingReducer;
