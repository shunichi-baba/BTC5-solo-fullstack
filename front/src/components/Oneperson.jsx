import React from "react";

const Oneperson = ({ diary }) => {
  console.log("aaaaaaaaaaasingle", diary);
  const diaryfilter = diary.filter((src) => {
    return src.firstname === "takeda" && src.lastname === "tetuya"; //暫定でハードコーディング
  });
  const diaryLists = diaryfilter.map((src, i) => {
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
    // <div id={src.date} className='onediary'>{src.firstname} {src.lastname} {src.diary}</div>
  });
  console.log("--------------", diaryLists);
  return <div>{diaryLists}</div>;
};

export default Oneperson;
