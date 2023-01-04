import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

const onPlayerTimeupdate = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

playerEl.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time' || 0));
