import keyMirror from 'keymirror';

module.exports = {
  ActionTypes: keyMirror({
    CLICK_RECORD: null,
    MODIFY_RECORD: null,
    SORT_RECORD: null,
    SEND_NEW_RECORD: null,
    SEND_MODIFIED_RECORD: null,
  })
};
