import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
const ActionTypes = Constants.ActionTypes;

module.exports = {

  clickRecord: function(record) {
    console.log("ActionDispatcher.clickRecord()");
    console.log(record);
    AppDispatcher.dispatch({
      type: ActionTypes.CLICK_RECORD,
      record: record
    });
  }
};
