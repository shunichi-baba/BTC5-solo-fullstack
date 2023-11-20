import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import Alldays from "./components/Alldays";
import Oneperson from "./components/Oneperson";
import Header from "./components/Header";

function App() {
  const [diary, setDiary] = useState([]);
  const [display, setDisplay] = useState(true);
  const [firstName, setFirstname] = useState("takeda");
  const [lastName, setLastname] = useState("tetuya");
  const [post, setPost] = useState();

  // const inputFirstname = useRef()
  // const inputlastname = useRef()
  // const inputDiary = useRef()
  // const inputButton = (e)=>{
  //   console.log(inputDiary.current.value)
  // }

  useEffect(() => {
    //get------------------------------------
    const get = async () => {
      await axios
        .get(`http://localhost:3000`) //リクエストを飛ばすpath
        .then((res) => {
          // console.log('^^^^^^^^^^^^^^', response);
          setDiary(res.data);
        }) //成功した場合、postsを更新する（then）
        .catch(() => {
          console.log("通信に失敗しました");
        }); //失敗した場合(catch)
    };
    get();
  }, [post]);
  // console.log("^^^^^^^^^^^^^^", diary);
  // console.log("^^^^^^^^^^^^^^", firstName);
  // console.log("^^^^^^^^^^^^^^", lastName);
  // console.log("^^^^^^^^^^^^^^", postDiary);

  return (
    <>
      <h1>公開日記</h1>
      <div>
        <Header
          setfirstName={setFirstname}
          setlastName={setLastname}
          setPost={setPost}
        />
      </div>
      <div>
        <div className="changepage">
          <button
            className="changepage__allday"
            onClick={(e) => setDisplay(true)}
          >
            Allday
          </button>
          <button
            className="changepage__mydiary"
            onClick={(e) => setDisplay(false)}
          >
            Mydiary
          </button>
        </div>
      </div>
      <div className="diarycontainer">
        {display ? <Alldays diary={diary} /> : <Oneperson diary={diary} />}
      </div>
    </>
  );
}

export default App;
