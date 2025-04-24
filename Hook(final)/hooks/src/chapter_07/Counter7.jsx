import { useState } from 'react';
export default function Counter7() {
const [number, setNumber] = useState(0);
return (
    <>
    <h1>{number}</h1>
    <button onClick={() => {
    setNumber(number => number + 1);        //콜백 함수를 사용하면 최신 값을 받아와 처리
    console.log(number)                     //그래서 3이 아니라 6씩 더해짐
    setNumber(number => number + 2);
    console.log(number)
    setNumber(number => number + 3);
    console.log(number)
    }}>+3</button>
    </>
    )
    }