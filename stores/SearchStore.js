import React from 'react';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

let _value = '';

function updateValue(value) {
  _value = value;
  SearchStore.emitChange();
}

const SearchStore = assign({}, EventEmitter.prototype, {
  getValue: function() {
    return _value;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case 'update-search-value':
      updateValue(action.value);
      break;

  }
});

export default SearchStore;

