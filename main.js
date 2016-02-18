var id = window.location.pathname.slice(1);
var playlist = document.body.appendChild(document.createElement('div'));
var search = document.body.appendChild(document.createElement('input'));
var results = document.body.appendChild(document.createElement('ol'));
var apiKey = 'AIzaSyCk47VXnNZ5BcR1_kO84-BS7My2j0G5PAc';

function onYouTubePlayerAPIReady() {
  if (!id) return;
  var div = playlist.appendChild(document.createElement('div'));
  div.id = "player";
  div.style.height = 9 * document.documentElement.clientWidth / 16 + "px";
  var p = new YT.Player('player', {
    videoId: id,
    playerVars: {
      autoplay: 1,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0,
      controls: 0,
      origin: 'http://www.hamel.in'
    },
    events: {
      onStateChange: updateState,
      onError: playNext
    }
  });
  p.playVideo();
}

function playNext() {
  if (!results.firstChild) searchPlaylists();
  document.location.href = results.firstChild.href;
}

function updateState(event) {
  if (event.data === 1) {
    search.style.color = 'black';
  } else {
    search.style.color = 'grey';
    if (event.data === 0) playNext();
  }
}

function addResult(i, t, u) {
  if (i === id) return;
  var result = document.getElementById(i);
  if (!result) {
    var a = document.createElement('a');
    result = results.appendChild(document.createElement('ol'));
    result.appendChild(a);
    result.style.backgroundImage = 'url(' + u + ')';
    result.id = i;
    result.className = "1";
    a.href = i;
    a.innerHTML = t;
    if (results.childNodes.length > 10) {
      result.style.display = 'none';
    } else {
      result.style.display = 'block';
    }
  }
  var firstSameScore = document.getElementsByClassName(result.className)[0];
  result.className = parseInt(result.className,10) + 1;
  if (firstSameScore === result) return;
  result.style.display = firstSameScore.style.display;
  if (firstSameScore.nextSibling.style.display === 'none') {
    console.log(firstSameScore.innerHTML);
  }
  firstSameScore.style.display = firstSameScore.nextSibling.style.display;
  result = results.insertBefore(results.removeChild(result), firstSameScore);
}

function searchVideos() {
  if (!search.value) {
    Array.prototype.forEach.call(results.childNodes, function(r) {
      console.log('removing' + r.innerHTML);
      results.removeChild(r);
    });
  }
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?maxResults=50&type=videosi&key=' + apiKey + '&q=' + search.value);
//  xhr.open('GET', 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&max-results=50&q=' + search.value);
  xhr.onload = function() {
    if ((items = JSON.parse(this.responseText).data.items)) {
      items.forEach(function(i) {
        addResult(i.id, i.title, i.thumbnail.hqDefault);
      });
    }
  };
  xhr.send();
}

function searchPlaylists() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://gdata.youtube.com/feeds/api/playlists/snippets?v=2&alt=jsonc&max-results=50&q=' + search.value);
  xhr.onload = function() {
    if ((items = JSON.parse(this.responseText).data.items)) {
      items.forEach(function(item) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://gdata.youtube.com/feeds/api/playlists/' + item.id + '?v=2&alt=jsonc');
        xhr.onload = function() {
          if ((data = JSON.parse(this.responseText).data)) {
            data.items.forEach(function(i) {
              addResult(i.video.id, i.video.title)
            });
          }
        };
        xhr.send();
      });
    }
  };
  xhr.send();
}

function getTitle() {
  if (!id) return;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&max-results=1&q=' + id);
  xhr.onload = function() {
    if ((items = JSON.parse(this.responseText).data.items)) {
      search.style.color = 'grey';
      search.value = items[0].title;
      document.title = items[0].title;
      searchPlaylists();
    } else {
      search.value = 'Something went wrong';
    }
  };
  xhr.send();
}

var tag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];
var div = document.body.appendChild(document.createElement('div'));

div.id = 'player';
tag.src = 'http://www.youtube.com/player_api';
search.placeholder = 'Find your tune';
search.onkeydown = searchVideos;
search.value = "Original Music Video";
searchVideos();
search.value = "";
getTitle();
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
