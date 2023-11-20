import React from "react";
import "./Alldays.css";

const Alldays = ({ diary }) => {
  // console.log("@@@@@@@@@@@@@all",diary[0])
  //   return (
  //     <div>Alldays</div>
  //   )
  const diaryLists = diary.map((src, i) => {
    //     console.log("aaaaaaaaaaa",src)
    return (
      <div key={i} className="onediary">
        <p className="onediary__name">
          投稿者：{src.firstname} {src.lastname}
        </p>
        <p className="onediary__date">
          <div className="onediary__date">日記　：{src.diary}</div>
        </p>
        <p className="onediary__diary">日時　：{src.date}</p>
      </div>
    );
  });
  return <div>{diaryLists}</div>;
};

export default Alldays;
