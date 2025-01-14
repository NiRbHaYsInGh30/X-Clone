import { useForm, SubmitHandler } from 'react-hook-form';
import { FaHeart, FaRetweet, FaComment, FaTrash, FaBookmark } from 'react-icons/fa';
import {
  Buttonnn,
  ErrorMessage,
  Form,
  InputFieldStyle,
  MainContent,
  Textarea,
  Tweet,
  TweetAction,
  TweetActions,
  TweetContainer,
  TweetContent,
  TweetHeader,
  TweetImage,
  UserName,
  Wrap,
  Wrapper,
} from '../Styles/Styles';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

type FormValues = {
  tweet: string;
  image?: FileList;
};

const AddTweet = () => {
  const userName = localStorage.getItem('userName');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const queryClient = useQueryClient();


  const { data: tweetData, error, isLoading } = useQuery({
    queryKey: ['tweets'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://8631-112-196-2-205.ngrok-free.app/api/tweets', {
        headers: {
          Authorization: token,
          'ngrok-skip-browser-warning': 'any',
        },
      });
      return response.data;
    },
  });
  
  const postTweetMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('content', data.tweet);
      if (data.image && data.image.length > 0) {
        formData.append('image', data.image[0]);
      }

      const response = await axios.post('https://8631-112-196-2-205.ngrok-free.app/api/tweets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tweets'] });
      reset(); 
    },
    onError: (error) => {
      console.error('Error posting tweet:', error);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postTweetMutation.mutate(data);
    console.log(data);
  };

  if (isLoading) return <p>Loading tweets...</p>;
  if (error instanceof Error) return <p>An error occurred: {error.message}</p>;

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
            <Buttonnn type="submit">
              Post
            </Buttonnn>
          </Form>
          <TweetContainer>
            {tweetData.map((tweet: { content: string; imageUrl?: string }, index: number) => (
              <Tweet key={index}>
                <TweetHeader>
                  <UserName>{userName}</UserName>
                  <TweetAction>
                    <FaTrash />
                  </TweetAction>
                </TweetHeader>
                <TweetContent>{tweet.content}</TweetContent>
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
