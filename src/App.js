import './App.css';
import Box from './component/Box'
import {useState} from "react";

const choice ={
    rock : {
        name : 'Rock',
        img  :'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg',
    },
    scissors :{
        name : 'Scissors',
        img : 'https://static.vecteezy.com/system/resources/previews/003/808/404/non_2x/scissors-icon-for-web-presentation-logo-infographic-haircut-tailor-hairdresser-haircut-free-vector.jpg'
    },
    paper : {
        name : 'Paper',
        img  :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FZqdkS0VYHV0TjLmt_GmdojryifpM3_NNQ&usqp=CAU',
    },
}

function App() {
    const [userSelect, setUserSelect] = useState({
        name : 'reset',
        img : '',
    });
    const [compSelect, setCompSelect] = useState({
        name : 'reset',
        img : '',
    });
    const [result, setResult] = useState('')
    const [compResult, setCompResult] = useState('')

    const play = (userChoice) =>{
        let compChoice = randomChoice();
        judgement(choice[userChoice], choice[compChoice]);
        setUserSelect(choice[userChoice]);
        setCompSelect(choice[compChoice]);
    }
    const randomChoice = () => {
        let itemArr = Object.keys(choice);
       let randomItem =  Math.floor(Math.random()*itemArr.length);
       return itemArr[randomItem]
    }
    const judgement = (user, comp) => {
        // 결과가 지금 한박자 늦게 출력됨 -> state가지고 비교했음 userSelect?.name?.toLowerCase();
        // pram으로 변수 자체를 받아와서 비교하니 바로 출력이 되긴 함... 이걸 어케행9ㅑ할까...
        let itemArr = Object.keys(choice)
        // 0 주먹 1 가위 2 보자기
        let userChoice = itemArr.findIndex((item) => item === user?.name?.toLowerCase())
        let compChoice = itemArr.findIndex((item) =>  item === comp?.name?.toLowerCase())

        let result2 = userChoice - compChoice;

        switch(result2){
            case 0 :
                setResult('무승부');
                setCompResult('무승부');
                return;
            case -1 :
            case 2 :
                setResult('승리');
                setCompResult('패배');
                return;
            case -2:
            case 1:
                setResult('패배');
                setCompResult('승리');
                return;
        }
    }
    function test(){
        switch(result){
            case '승리' :
                return 'win';
            case '패배' :
                return 'lose';
            case '무승부' :
                return 'tie';
        }
    }

    return (
    <div className='main'>
        <div className='boxWrap'>
            <Box userName="you" choose={userSelect} result={result} />
            <Box userName="computer" choose={compSelect} result={compResult} />
        </div>
        <div className='btnWrap'>
            <button onClick={() => play('scissors')}>가위</button>
            <button onClick={() => play('rock')}>바위</button>
            <button onClick={() => play('paper')}>보자기</button>
        </div>
        <h1 className={test()}>{result}</h1>
    </div>
  );
}

export default App;
