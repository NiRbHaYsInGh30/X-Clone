import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaHeart, FaRetweet, FaComment, FaTrash, FaBookmark } from 'react-icons/fa';
import { Buttonnn, ErrorMessage, Form, InputFieldStyle, MainContent, Textarea, Tweet, TweetAction, TweetActions, TweetContainer, TweetContent, TweetHeader, TweetImage, UserName, Wrap, Wrapper } from '../Styles/Styles';
import axios from 'axios';

type FormValues = {
  tweet: string;
  image?: FileList;
};

const AddTweet = () => {
  const userName = localStorage.getItem("userName");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [tweets, setTweets] = useState<{ text: string; imageUrl?: string }[]>([]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    const token = localStorage.getItem('token');
    if(!token){
      alert("Session timeout");
      return;
    }
    try {
      const formData = new FormData();
      formData.append('content', data.tweet);
      if (data.image && data.image.length > 0) {
        console.log('data.image', data.image)
        formData.append('image', data.image[0]);
      }
      const response = await axios.post('https://8631-112-196-2-205.ngrok-free.app/api/tweets', formData, {
        headers: {
           'Content-Type': 'multipart/form-data',
           'Authorization': token
        },
      });
      const newTweet = {
        text: data.tweet,
        imageUrl: response.data.imageUrl ? response.data.imageUrl : null,
      };

      setTweets((prevTweets) => {
        const updatedTweets = [newTweet, ...prevTweets];
        console.log(updatedTweets);
        return updatedTweets;
      });

      reset();
    }catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
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
            <Buttonnn type="submit">Tweet</Buttonnn>
          </Form>
          <TweetContainer>
            {tweets.map((tweet, index) => (
              <Tweet key={index}>
                <TweetHeader>
                  <UserName>{userName}</UserName>
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
        </MainContent>
      </Wrapper>
    </Wrap>
  );
};

export default AddTweet;
