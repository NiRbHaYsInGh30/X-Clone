import { useState } from "react";
import { FaTrash, FaComment, FaRetweet, FaHeart, FaBookmark } from "react-icons/fa";
import { Tweet, TweetAction, TweetActions, TweetContainer, TweetContent, TweetHeader, TweetImage, UserName } from "../Styles/Styles";

 const AddPost = () => {
     const [tweets, setTweets] = useState<{ text: string; imageUrl?: string }[]>([]);
  return (
    <>
    <TweetContainer>
          {tweets.map((tweet, index) => (
            <Tweet key={index}>
              <TweetHeader>
                <UserName>Name</UserName>
                <TweetAction>
                  <FaTrash />
                </TweetAction>
              </TweetHeader>
              <TweetContent>{tweet.text}</TweetContent>
              {tweet.imageUrl && <TweetImage src={tweet.imageUrl} alt="Tweet" />}
              <TweetActions>
                <TweetAction>
                  <FaComment />
                </TweetAction>
                <TweetAction>
                  <FaRetweet />
                </TweetAction>
                <TweetAction>
                  <FaHeart />
                </TweetAction>
                <TweetAction>
                  <FaBookmark />
                </TweetAction>
              </TweetActions>
            </Tweet>
          ))}
        </TweetContainer>
    </>
  )
}
export default AddPost;