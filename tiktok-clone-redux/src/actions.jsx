export const likeVideo = (videoId) => {
  return {
    type: "LIKE_VIDEO",
    payload: { videoId, isLiked: true },
  };
};

export const dislikeVideo = (videoId) => {
  return {
    type: "DISLIKE_VIDEO",
    payload: { videoId, isLiked: false },
  };
};
