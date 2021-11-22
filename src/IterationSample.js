import React, { useState} from "react";

const IterationSample = () => {
    const [ names, setNames ] = useState([
        {
            id : 1, text : 'snowman'
        },
        {
            id : 2, text : 'fireman'
        },
        {
            id : 3, text : 'iceman'
        },
        {
            id : 4, text : 'thunderstorm'
        }
    ]);
    const [ inputText, setInputText] = useState('');
    const [ nextId, setNextId ] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,  //nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1); //nextId값에 1을 더해 준다
        setNames(nextNames); // names 값을 업데이트한다
        setInputText('');   //inputText를 비운다
    };
    const onRemove = id => {
        const nextNames = names.filter( name => name.id !== id);
        setNames(nextNames);
    }
    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={ ()=> onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    )

}
export default IterationSample;








