
import Card from "../UI/Card";
import style from "./AddUser.module.css";

import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    

        const addUserHandler = (e) => {

            const enteredUsername = nameInputRef.current.value;
            const enteredAge = ageInputRef.current.value;

            e.preventDefault();
            if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {

                setError({
                    title: 'Invalid Input',
                    message: 'Please enter a valid name and age (non-empty values).'
                });
                return;
            }

            if (+enteredAge < 0) {
                setError({
                    title: 'Invalid Age',
                    message: 'Please enter a valid age (>0).'
                });
                return;
            }
            props.onAddUser({name: enteredUsername, age: enteredAge, id: (Math.random()*100).toString()});
            
            console.log(nameInputRef);
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';

           
        };

        // const userNameChangeHandler = (e) => {
        //     setEnteredUsername(e.target.value);
            
        // };

        // const ageChangeHandler = (e) => {
        //     setEnteredAge(e.target.value);
        // };


        const errorHandler = () => {

            setError(null);

        }

        return (
            <Wrapper>
               {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            
        <Card className={style.input}>
        <form onSubmit={addUserHandler}>
           
            
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef}/>
            <Button type="submit">Add User</Button>
            


        </form>
        </Card>
        </Wrapper>
    )

};

export default AddUser;