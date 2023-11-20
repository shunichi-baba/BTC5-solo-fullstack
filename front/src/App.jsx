import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Alldays from './components/Alldays';
import Oneperson from './components/Oneperson';

function App() {
  const [diary, setDiary] = useState([]);
  const [display,setDisplay] = useState(true)


  // const [count, setPosts] = useState(0);

  useEffect(() => {
    //get------------------------------------
    axios
      .get(`http://localhost:3000`) //リクエストを飛ばすpath
      .then((res) => {
        // console.log('^^^^^^^^^^^^^^', response);
        setDiary(res.data);
      }) //成功した場合、postsを更新する（then）
      .catch(() => {
        console.log('通信に失敗しました');
      }); //失敗した場合(catch)
      //post------------------------------------
      // axios
      //   .post(`http://localhost:3000`, { 
      //   id: 6,
      //   firstname: 'takeda',
      //   lastname: 'tetuya',
      //   diary: '今日は楽しかった',
      //   date: "2023-11-11"})
      //   .then((res) => {
      //       console.log('^^^^^^^^^^^^^^', res);
      //     }) //成功した場合、postsを更新する（then）
      //     .catch(() => {
      //         console.log('通信に失敗しました');
      //       }); //失敗した場合(catch)
        }, []);
        console.log('^^^^^^^^^^^^^^', diary);

  return (
    <>
      <h1>公開日記</h1>
      {/* //日付け or 人選択 */}
      <div>
        <button  onClick={e=>setDisplay(true)}>Allday</button>
        {/* <Alldays /> */}
        <button onClick={e=>setDisplay(false)}>Mydiary</button>
      </div>
      <div>
      {display ? (
        <Alldays diary ={diary}/>
      ) : (
        <Oneperson diary ={diary}/>
      )}

      </div>
    </>
  );
}

export default App;
