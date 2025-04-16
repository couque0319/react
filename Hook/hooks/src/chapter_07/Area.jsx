import { useState } from "react";
const Area = () => {
const [size, setSize] = useState({ width: 200, height: 100 });      //size는 객체임
return (
<div>
<h1>
너비 : {size.width}, 높이 : {size.height}
</h1>
<button
onClick={() => {
const copy = { ...size };       //...size랑 똑같은 copy가 만들어짐
copy.width = size.width >= 350 ? 350 : size.width + 20
setSize(copy);
}}
>너비 증가
</button>
<button
onClick={() => {
const copy = { ...size };       
copy.width = size.width <= 0 ? 0 : size.width - 20
setSize(copy);
}}
>너비 감소
</button>

<button onClick={() => {
    const copy = { ...size };
    copy.height = size.height >= 150 ? 150 : size.height + 10;
    setSize(copy);
    }}
    >
높이 증가
</button>

<button
onClick={() => {
const copy = { ...size };       
copy.height = size.height <= 0 ? 0 : size.height - 10
setSize(copy);
}}
>높이 감소
</button>
</div>
); };
export default Area;