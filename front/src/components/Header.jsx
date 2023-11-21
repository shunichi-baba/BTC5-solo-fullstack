import { useState, useRef } from "react";
import React from "react";
import axios from "axios";
import "./Header.css";
let count = 20;

const Header = ({ setPost }) => {
  // const Header = ({ firstname, lastname, postDiary }) => {
  const inputFirstname = useRef();
  const inputlastname = useRef();
  const inputDiary = useRef();

  const inputButton = () => {
    const postfirstName = inputFirstname.current.value;
    const postlastName = inputlastname.current.value;
    const postdiary = inputDiary.current.value;
    const now = new Date().toLocaleDateString();

    //空文字バリデーションチェック------------------
    if (postfirstName === "" || postlastName === "" || postdiary === "") {
      window.alert("名前 , 日記内容を記入して下さい");
      return;
    }

    inputFirstname.current.value = "";
    inputlastname.current.value = "";
    inputDiary.current.value = "";
    count++;
    console.log("1", count);
    // console.log("2", postlastName);
    // console.log("3", postdiary);
    // console.log("4", now);

    const post = async () => {
      await axios
        .post(`http://localhost:3000`, {
          id: count,
          firstname: `${postfirstName}`,
          lastname: `${postlastName}`,
          diary: `${postdiary}`,
          date: `${now}`,
        })
        .then((res) => {
          console.log("^^^^^^^^^^^^^^POST成功", res);
          setPost(res);
        }) //成功した場合、postsを更新する（then）
        .catch(() => {
          console.log("通信に失敗しました");
        }); //失敗した場合(catch)
    };
    post();
  };

  return (
    <div className="header">
      <p>投稿フォーム</p>
      <div className="header__form">
        <input type="text" ref={inputFirstname} placeholder="firstname" />
        <input type="text" ref={inputlastname} placeholder="lastname" />
        <button onClick={inputButton}>投稿</button>
      </div>
      {/* <input type="text" ref={inputDiary} placeholder="今日の振り返りを入力" /> */}
      <textarea
        ref={inputDiary}
        cols="50"
        rows="5"
        maxlength="300"
        placeholder="今日の振り返りを入力して下さい"
      ></textarea>
    </div>
  );
};

export default Header;
