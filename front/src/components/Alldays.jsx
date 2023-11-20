import React from "react";

const Alldays = ({ diary }) => {
  // console.log("@@@@@@@@@@@@@all",diary[0])
  //   return (
  //     <div>Alldays</div>
  //   )
  const diaryLists = diary.map((src, i) => {
    //     console.log("aaaaaaaaaaa",src)
    return (
      <div key={i} className="onediary">
        {src.firstname} {src.lastname} {src.diary}
      </div>
    );
  });
  return <div>{diaryLists}</div>;
};

export default Alldays;
