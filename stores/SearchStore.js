import React from 'react';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';
const API_KEY = 'AIzaSyCk47VXnNZ5BcR1_kO84-BS7My2j0G5PAc';

let _query = '';
let _resultIDs = [];
let _results = {};

function parseResult(result) {
  return {
    id: result.id.videoId,
    title: result.snippet.title,
    thumbnail: result.snippet.thumbnails.medium.url,
    score: 1
  };
}

function addResult(result) {
  if (result.id in _results) {
    _results[result.id].score += 1;
  } else {
    _resultIDs.push(result.id);
    _results[result.id] = result;
  }
}

function API(query, type) {
  const baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50';
  const url = baseURL + '&key=' + API_KEY + '&q=' + query + '&type=' + type;
  return fetch(url).then(res => res.json()).then((res) => {
    return res.items.map(parseResult);
  });
}

function searchPlaylists(query) {
  _query = query;
  API(query, 'playlists').then((results) => {
    results.forEach(addResult);
    _resultIDs.sort((a, b) => a.score - b.score);
    SearchStore.emitChange();
  });
}

function searchVideos(query) {
  _query = query;
  API(query, 'videos').then((results) => {
    _resultIDs = results.map(res => res.id);
    _results = {};
    results.forEach((res) => {
      _results[res.id] = res;
    });
    SearchStore.emitChange();
  });
}

const SearchStore = assign({}, EventEmitter.prototype, {
  getQuery: function() {
    return _query;
  },

  getResults: function() {
    return _resultIDs.map(id => _results[id]);
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
    case 'search-videos':
      searchVideos(action.query);
      break;

    case 'search-playlists':
      searchPlaylists(action.query);
      break;
  }
});

export default SearchStore;
