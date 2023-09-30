import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function Review() {
  const [review, Setreviews] = useState([]);
  const [newreview, Setnewreview] = useState("");
  const [name, Setname] = useState("");
  const getData = async () => {
    const res = await fetch("http://localhost:4000/");
    const result = await res.json();
    Setreviews(result);
  };
  const addnewreview = (e) => {
    Setnewreview(e.target.value);
  };
  const addnewname = (e) => {
    Setname(e.target.value);
  };
  const addReview = async () => {
    const data = await fetch("http://localhost:4000/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        review: newreview,
      }),
    }).then((res) => res.json());

    Setreviews([...review, data]);
  };

  useEffect(() => {
    getData();
  });
  return (
    <div>
      <input placeholder="write your review" onChange={addnewreview}></input>
      <input placeholder="write your name" onChange={addnewname}></input>
      <button onClick={addReview}>Click</button>
      {review.map((e) => {
        return (
          <div key={e.id}>
            <div>{e.review}</div>

            <p>-{e.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Review;
