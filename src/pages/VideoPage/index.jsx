import React, { useCallback, useContext, useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import YouTube from 'react-youtube';
import { SideBarContext } from '../../context/SideBarContext';
import dayjs from 'dayjs';
import axios from '../../api/axios';
import RelatedVideos from './RelatedVideos';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const VideoPage = () => {

  const {videoId} = useParams()
  let location = useLocation();
  const {state: currentVideo} = location
  const {setIsToggled} = useContext(SideBarContext)
  const [videoComments, setVideoComments] = useState([])

  const loadComments= useCallback(async () => {
    setIsToggled(false)
    const response = axios.get(
      `/commentThreads?part=snippet&videoId=${videoId}`
    )
    setVideoComments((await response).data.items)

  }, [setIsToggled, videoId])

  useEffect(()=> {
    loadComments()
  }, [loadComments])

  useEffect(() => {
    setIsToggled(false)
  }, []);

  const opts = {
    width: '640',
    height: '390',
    playerVars: {
      autoplay: 1,
    },
  }

  const onPlayerReady = e => {
    e.target.playVideo();
  }

  const videoHeaderMarkUp = (
    <div className='video_main_info'>
      <div className='tag'>
        {
          currentVideo?.snippet?.tags?.map((tag, i) => {
            <p className='tag' key={i}>#{tag}</p>
          })
        }
      </div>
      <h1>{currentVideo.snippet.title}</h1>
      <div className='Videoplayer_metadata'>
        <span>
          {currentVideo.extraInfo.viewCount} views
        </span>
        <span className='dot_separator'> &#8226 </span>
        <span>
          {dayjs(currentVideo.snippet.publishedAt).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  )


  const videoCommentsMarkUp = videoComments?.map(item => {
    const { id, snippet } = item.snippet.topLevelComment
    return (
      <div className="comment_container" key={id}>
        <div className="comment_avatar_container">
          <img src={snippet.authorProfileImageUrl} alt="user avatar" />
        </div>
        <div className='comment_text_container'>
          <div className="comment_author">
            {snippet.authorDisplayName}
            <span>
              {dayjs(snippet.publishedAt).fromNow()}
            </span>
          </div>
          <div className='comment_text'>
            {snippet.textOriginal}
          </div>
          <div className='comment_buttons'>
            <div>
              <BiLike size={16} />
              <span className='muted'>
                100
              </span>
            </div>
            <div>
              <BiDislike size={16} />
            </div>
            <span className='muted'>REPLY</span>
          </div>
        </div>
      </div>
    )
  })
  

  return (
    <section className='videoPage'>
      <div className="columns_container">
        <div className="column column_1">
          <div className="youtube_player_container">
            <YouTube className='youtube_player' videoId={videoId} onPlay={onPlayerReady} opts={opts} autoplay />
          </div>
          <div className='videoplayer_info'>
            {/* {videoHeaderMarkUp} */}
            <div className="main_header_buttons">
              <div className='likes_container'>
                <div className="likes">
                  <BiLike size={25} />
                  <span>
                    likes
                  </span>
                </div>
                <div className="dislikes">
                  <BiDislike size={25} />
                  <span>
                    dislikes
                  </span>
                </div>
              </div>
              <div className="share">
                <RiShareForwardLine size={25} />
                <span>SHARE</span>
              </div>
              <div className="save"
              >
                <MdPlaylistAdd size={25} />
                <span>SAVE</span>
              </div>
              <div className="report">
                <RiFlagLine size={25}
                  className='sidebar_icon'
                />
              </div>
            </div>
          </div>
          <div className="channel_video_info">
            <div className='channel_data'>
              <div className='channel_avatar'>
                <img src={currentVideo.channelInfo.thumbnails.default.url} alt="avatar" />
              </div>
              <div className='channel_title'>
                <a href="/">
                  {currentVideo.channelInfo.title}
                </a>
                <span>
                  {currentVideo.channelInfo.subscriberCount} subscribers
                </span>
              </div>
              <div className='channel_subscribe'>
                <button>
                  SUBSCRIBED
                </button>
              </div>
            </div>
            <div className='video_description'>
              {currentVideo.snippet.description}
            </div>
          </div>
          <div className="video_comments_container">
            <div className='video_comments_count'>
              {currentVideo.extraInfo.commentCount} Comments
            </div>
            <div className='video_comments'>
              {/* {videoCommentsMarkUp} */}
            </div>
          </div>
        </div>
        <div className="column column_2">
          <RelatedVideos currentVideo={videoId} />
        </div>
      </div>
    </section>
  )
}

export default VideoPage