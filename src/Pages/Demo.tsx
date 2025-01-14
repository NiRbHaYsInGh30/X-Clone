
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios';
const Query=new QueryClient;
const FetchData=()=>{
    const{isPending, error, data, isFetching }=useQuery({
        queryKey:['data'],
        queryFn:async()=>{
            const response =axios.get('',)
            return  (await response).data;
        },
        
        
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    
  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}


 const Demo = () => {
  return (
    <>
    <QueryClientProvider client={Query}>
        <FetchData/>
    </QueryClientProvider>
    </>
  )
}
export default Demo;