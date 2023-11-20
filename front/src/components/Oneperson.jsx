import React from 'react'

const Oneperson = ({diary}) => {
    console.log("aaaaaaaaaaasingle",diary)
    const diaryfilter = diary.filter((src) => {
        return src.firstname==="takeda" && src.lastname==="tetuya"
        }
          );
    const diaryLists = diaryfilter.map((src, i) => {
            return <div id={src.date} className='onediary'>{src.firstname} {src.lastname} {src.diary}</div>
          });
          console.log("--------------",diaryLists)
         return <div>{diaryLists}</div>;
}

export default Oneperson