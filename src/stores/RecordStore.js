import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
//import {EventEmitter} from 'events';
var EventEmitter = require('events').EventEmitter;
import assign from 'object-assign';

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _records = {
  "1": {
    team: "1",
    name: "Bob",
    christian_name: "bitch tits",
    birthday: "1960/09/11"
  },
  "2": {
    team:"1",
    name:"Cinema",
    christian_name:"Big Cock",
    birthday:"1960/03/11"
  },
  "3": {
    team:"1",
    name:"Officer",
    christian_name:"dildo",
    birthday:"1960/03/11"
  }
};

var RecordStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    console.log("emitChange()");
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    console.log("addChangeListener()");
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    console.log("removeChangeListener()");
    this.removeChangeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _records[id];
  },

  getAll: function() {
    return _records;
  }
});

RecordStore.dispatchToken = AppDispatcher.register(function(action){

  console.log("RecordStore.dispatchToken");
  console.log("AppDispatcher.register(function(action){}");
  
  switch(action.type) {
    case ActionTypes.CLICK_RECORD:
      RecordStore.emitChange();
      console.log("ActionTypes.CLICK_RECORD");
      break;
    case ActionTypes.MODIFY_RECORD:
      console.log("ActionTypes.MODIFY_RECORD");
      RecordStore.emitChange();
      break;
    case ActionTypes.SORT_RECORD:
      console.log("ActionTypes.SORT_RECORD");
      RecordStore.emitChange();
      break;
    case ActionTypes.SEND_NEW_RECORD:
      console.log("ActionTypes.SEND_NEW_RECORD");
      RecordStore.emitChange();
      break;
    case ActionTypes.SEND_MODIFIED_RECORD:
      console.log("ActionTypes.SEND_MODIFIED_RECORD");
      RecordStore.emitChange();
      break;
    default:
      console.log("RecordStore.dispatchToken noop");
      // noop
  }
});

module.exports = RecordStore;
