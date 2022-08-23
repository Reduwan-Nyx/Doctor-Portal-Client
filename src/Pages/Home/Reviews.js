import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const {data, isLoading} = useQuery('reviews', ()=> fetch('http://localhost:5000/reviews').then(res => res.json()))

  if(isLoading){
    return <Loading></Loading>
  }
    return (
        <div className='my-10 '>
        <div className='text-center text-2xl'>Client Review</div>
        <div className='grid grid-cols-1 lg:grid-cols-3 px-32 '>
          {data?.map(d => <div className='card-body '>
            <div className='card border p-5  border-indigo-500 rounded-lg'>
              <h1>{d.review}</h1>
              <h2 className='mt-3 text-center'>rating: {d.rating}</h2>
              <h2 className='mt-5 text-center'>Client name: {d.name}</h2>
            </div>
          </div>)}
        </div>
        
      </div>
        
    ); 
};

export default Reviews;