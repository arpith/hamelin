import React from 'react';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';
const API_KEY = 'AIzaSyCk47VXnNZ5BcR1_kO84-BS7My2j0G5PAc';

let _query = '';
let _results = [];

function searchVideos(query) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=videos&key=' + API_KEY + '&q=' + _query);
  xhr.onload = () => {
    let response = {};

    try {
      response = JSON.parse(this.responseText);
    } catch (e) {
      response = null;
    }

    if (response && response.items) {
      _results = response.items.map((result) => {
        return {
          id: result.id.videoId,
          title: result.snippet.title,
          thumbnail: result.snippet.thumbnails.high.url
        };
      });
    }

    SearchStore.emitChange();
  };

  xhr.send();
}

function search(query) {
  _query = query;
  SearchStore.emitChange();
  searchVideos(query);
}

const SearchStore = assign({}, EventEmitter.prototype, {
  getQuery: function() {
    return _query;
  },

  getResults: function() {
    return _results;
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
    case 'search':
      search(action.query);
      break;
  }
});

export default SearchStore;
