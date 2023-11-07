const initialState = {
  videos: [],
};

const rootReducer = (state = initialState, action) => {
  const video = state.videos.find(
    (video) => video.id === action.payload.videoId
  );
  let updatedVideos;

  switch (action.type) {
    case "LIKE_VIDEO":
      if (!video) {
        return state;
      }

      updatedVideos = state.videos.map((video) => {
        if (video.id === action.payload.videoId) {
          return {
            ...video,
            isLiked: action.payload.isLiked,
          };
        }
        return video;
      });

      return {
        ...state,
        videos: updatedVideos,
      };
    case "DISLIKE_VIDEO":
      if (!video) {
        return state;
      }

      updatedVideos = state.videos.map((video) => {
        if (video.id === action.payload.videoId) {
          return {
            ...video,
            isLiked: false,
          };
        }
        return video;
      });

      return {
        ...state,
        videos: updatedVideos,
      };
    default:
      return state;
  }
};

export default rootReducer;
