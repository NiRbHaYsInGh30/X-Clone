import { useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FaHeart, FaRetweet, FaComment, FaTrash, FaBookmark } from 'react-icons/fa';
import { Buttonnn, ErrorMessage, Form, InputFieldStyle, MainContent, Textarea, Tweet, TweetAction, TweetActions, TweetContainer, TweetContent, TweetHeader, TweetImage, UserName, Wrap, Wrapper } from '../Styles/Styles';
import { Button } from '../ui/button';

type FormValues = {
  tweet: string;
  image?: FileList;
};

const AddTweet = () => {
  const userName=localStorage.getItem("userName");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [tweets, setTweets] = useState<{ text: string; imageUrl?: string }[]>([]);

 

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
          <InputFieldStyle type="file" {...register('image')} />
          <Buttonnn type="submit">Tweet</Buttonnn >
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
