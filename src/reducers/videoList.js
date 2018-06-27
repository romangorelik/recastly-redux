import Redux from 'redux';

const sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
    case "CHANGE_VIDEO_LIST":
      return Object.assign([], state, action.videos);
     default:
      return state;
  }
};

export default videoListReducer;
