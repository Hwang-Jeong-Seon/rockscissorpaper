import '../App.css'

function Box(props){
    const returnColor = () => {
        console.log(props.result)
        switch(props.result){
            case '승리' :
                return 'win';
            case '패배' :
                return 'lose';
            case '무승부' :
                return 'tie';
        }
    }
    return(
        <div className={`box ${returnColor()}`}>
            <strong>{props.userName}</strong>
            <img src={ props.choose && props.choose.img} alt={`${props.choose && props.choose.name}-image`}/>
            <p>{ props.choose && props.choose.name}</p>
        </div>
    )
}

export default Box