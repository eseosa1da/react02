
import Button from './Button';
import Card from './Card';
import style from './ErrorModal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {

    return <div className={style.backdrop} onClick={props.onConfirm} />
};

const ModalOverlay = (props) => {

    return (
        
    
        <Card className={style.modal}>
            <header className={style.header}>{props.title}</header>
            
                <div className={style.content}>{props.message}</div>
           
           
            <footer className={style.actions}> <Button onClick={props.onConfirm}>Okay</Button></footer>
    
            </Card>
           
    
    )
}


const ErrorModal = (props) => {

    return ( <>

    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, 
    document.getElementById('backdrop-root'))}

    {ReactDOM.createPortal(<ModalOverlay 
    title={props.title}
    message={props.message}
    onConfirm={props.onConfirm}/>, 
        document.getElementById('backdrop-root'))
    
};
    </>
       
    )
};

export default ErrorModal;