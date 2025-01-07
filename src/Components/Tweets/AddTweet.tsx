import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { FaHeart, FaRetweet, FaComment, FaTrash, FaBookmark } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  margin-right: 20px;
  color: black;
  background-color: rgba(255, 255, 255, 0.96);
  // border-top: 1px solid #38444d;
  border-: 1px solid #38444d;
`;
const Wrap=styled.div`  
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Textarea = styled.textarea`
  width: 100%;
  color: black;
  background-color:rgb(255, 255, 255);
  border:1px solid black;
  padding: 10px;

  border-radius: 8px;
  resize: none;
  font-size: 1rem;
`;

const Button = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #1da1f2;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0d8ddb;
  }
`;

const TweetContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  
`;

const Tweet = styled.div`
  background-color:rgb(255, 255, 255);
  padding: 15px;
  border-radius: 12px;
  border: 1px solid black;
   background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
`;

const TweetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

const TweetContent = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  display:flex;
`;

const TweetImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  margin-top: 10px;
  // margin-left:35px;
`;

const TweetActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #38444d;
`;

const TweetAction = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  color:rgb(10, 10, 10);

  &:hover {
    color: #1da1f2;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

type FormValues = {
  tweet: string;
  image?: FileList;
};

const AddTweet = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [tweets, setTweets] = useState<{ text: string; imageUrl?: string }[]>([]);

  useEffect(() => {
    const storedTweets = localStorage.getItem('tweets');
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let imageUrl;
    if (data.image && data.image.length > 0) {
      imageUrl = URL.createObjectURL(data.image[0]);
    }
    
    const newTweet = { text: data.tweet, imageUrl };
    const updatedTweets = [newTweet, ...tweets];
    setTweets(updatedTweets);
    localStorage.setItem('tweets', JSON.stringify(updatedTweets));
    reset();
  };

  const handleDelete = (index: number) => {
    const updatedTweets = tweets.filter((_, i) => i !== index);
    setTweets(updatedTweets);
    localStorage.setItem('tweets', JSON.stringify(updatedTweets));
  };
const userName=localStorage.getItem("userName");
  return (
          <Wrap>
    <Wrapper>
      <MainContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            {...register('tweet', { required: 'Tweet content is required', maxLength: 280 })}
            placeholder="What's happening?"
          />
          {errors.tweet && <ErrorMessage>{errors.tweet.message}</ErrorMessage>}
          <input type="file" {...register('image')} />
          <Button type="submit">Tweet</Button>
        </Form>
        <TweetContainer>
          {tweets.map((tweet, index) => (
            <Tweet key={index}>
              <TweetHeader>
                <UserName>{userName}</UserName>
                <TweetAction onClick={() => handleDelete(index)}>
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
      </MainContent>
    </Wrapper>
          </Wrap>
  );
};

export default AddTweet;
