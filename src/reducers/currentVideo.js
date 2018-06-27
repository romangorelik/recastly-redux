import Redux from 'redux';


var currentVideoReducer = (state, action) => {
  console.log('what is the state', state)
  switch (action.type) {
    case 'CHANGE_VIDEO':
        return Object.assign({}, state, action.video)
    default:
        return null;
  } 
};

export default currentVideoReducer;
