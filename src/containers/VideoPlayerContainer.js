import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStateToProps = (store) => {
    console.log('this is the store', store)
    return {
        video: store.currentVideo
    }
}

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);



export default VideoPlayerContainer;
