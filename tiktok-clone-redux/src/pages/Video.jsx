import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { likeVideo, dislikeVideo } from "../actions";
import "./Video.css";

const tiktokHeartSVG = `<svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 9.01703C19.0025 3.74266 11.4674 3.736 6.67302 8.56049C1.77566 13.4886 1.77566 21.4735 6.67302 26.4016L22.5814 42.4098C22.9568 42.7876 23.4674 43 24 43C24.5326 43 25.0432 42.7876 25.4186 42.4098L41.327 26.4016C46.2243 21.4735 46.2243 13.4886 41.327 8.56049C36.5326 3.736 28.9975 3.74266 24 9.01703ZM21.4938 12.2118C17.9849 8.07195 12.7825 8.08727 9.51028 11.3801C6.16324 14.7481 6.16324 20.214 9.51028 23.582L24 38.1627L38.4897 23.582C41.8368 20.214 41.8368 14.7481 38.4897 11.3801C35.2175 8.08727 30.0151 8.07195 26.5062 12.2118L26.455 12.2722L25.4186 13.3151C25.0432 13.6929 24.5326 13.9053 24 13.9053C23.4674 13.9053 22.9568 13.6929 22.5814 13.3151L21.545 12.2722L21.4938 12.2118Z"></path></svg>`;
function Video({ videos }) {
  const dispatch = useDispatch();
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const videoData = JSON.parse(localStorage.getItem("videoData"));

    if (!videoData) {
      const initialData = videos.map((video) => ({
        id: video.id,
        title: video.title,
        likes: 0,
        dislikes: 0,
      }));

      localStorage.setItem("videoData", JSON.stringify(initialData));
    }
  }, [videos]);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id} className="video">
          <iframe
            className="video__player"
            title="TikTok Video"
            src={video.src}
          ></iframe>
          <div className="like-container">
            <button
              onClick={handleLike}
              className="heart-button"
              style={{ color: isLiked ? "red" : "white" }}
              checked={isLiked}
              dangerouslySetInnerHTML={{ __html: tiktokHeartSVG }}
            ></button>
            <div className="like-text">{likeCount}</div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Video;
