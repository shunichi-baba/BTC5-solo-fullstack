import { useState, useRef } from "react";
import React from "react";
import axios from "axios";

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
    // console.log("1", postfirstName);
    // console.log("2", postlastName);
    // console.log("3", postdiary);
    // console.log("4", now);

    const post = async () => {
      await axios
        .post(`http://localhost:3000`, {
          id: 16,
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
    <div>
      <p>投稿フォーム</p>
      <input type="text" ref={inputFirstname} placeholder="firstname" />
      <input type="text" ref={inputlastname} placeholder="lastname" />
      <input type="text" ref={inputDiary} placeholder="今日の振り返りを入力" />
      <button onClick={inputButton}>投稿</button>
    </div>
  );
};

export default Header;
