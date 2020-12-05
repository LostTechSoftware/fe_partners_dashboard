import Pusher from 'pusher-js/react-native';

const pusher = new Pusher('01486d854af72256e153', {
    cluster: 'mt1',
  });

const channel = pusher.subscribe('my-channel');

export default channel