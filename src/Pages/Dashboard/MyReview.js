import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = (e) =>{
        e.preventDefault();
        const reviewValue = e.target.review?.value;
        const rating = e.target.rating.value
        const review = {
            name: user?.displayName,
            review: reviewValue,
            rating: rating
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(review),
            })
            .then((res) => res.json())
             .then((data) => {
            console.log(data);
        })
    }
    return (
        <div className="h-screen mt-16">
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl bold text-center">SHARE YOUR OPINION</h2>
          <form onSubmit={handleReview} className="grid gap-5">
            <input
              type="text"
              value={user?.displayName}
              class="input input-bordered w-full max-w-xs"
            />
            <textarea
              type="text"
              name="Review"
              placeholder="Write your Opinion"
              class="textarea input-bordered w-full max-w-xs"
              required
            ></textarea>
            <select
              name="rating"
              className="select w-full max-w-xs select-bordered"
            >
              <option disabled selected>
                Rate Us
              </option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
            <input type="submit" className="input btn btn-outline input-bordered w-full max-wxs" />
          </form>
        </div>
      </div>
    </div>
    );
};

export default MyReview;