import React, { useState, useEffect} from "react";

function Update() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // //렌더링 될 때 마다 매번 실행 됨(count + name)
    // useEffect(() => {
    //     console.log("렌더링");
    // });

    // //마운팅 + count가 변할 때 마다 실행
    // useEffect(() => {
    //     console.log("count 변화");
    // }, [count]);

    // //마운팅 + name이 변할 때 마다 실행
    // useEffect(() => {
    //     console.log("name 변화");
    // }, [name]);

    //마운팅 될 때 마다 실행
    useEffect(() => {
        console.log("마운팅");
    }, []);

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count} </span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name: {name}</span>
        </div>
    );
}

export default Update;