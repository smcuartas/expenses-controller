import { useState, useEffect } from "react";
import * as S from "./styled-modal";

function Modal({setModal, animate, setAnimate, expenses, setExpenses, edit, setEdit}){
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=>{
        if(Object.keys(edit).length > 0){
            setName(edit.name)
            setValue(edit.value)
            setCategory(edit.category)
        }
    }, [])

    const closeModal = () => {
        setAnimate(false)

        setTimeout(() => {
            if(Object.keys(edit).length > 0){
                setEdit({})
            }

            setModal(false)
        }, 500);
    }

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);
        return random + date;
    }

    const generateDate = () => {
        const newDate = new Date();
        const options = {
            year:'numeric',
            month:'long',
            day:'2-digit'
        }

        return newDate.toLocaleDateString('en-US', options)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([name, value, category].includes('')){
            setError(true)
            return;
        }

        setError(false);

        if(edit.id){
            const updateExpense = {
                name,
                value,
                category,
                id: edit.id,
                date: edit.date
            }

            const updatedExpenses = expenses.map( item => edit.id === item.id ? updateExpense : item)
            setExpenses(updatedExpenses)

        } else{
            const expense = {
                name,
                value,
                category,
                id: generateId(),
                date: generateDate()
            };
    
            setExpenses([...expenses, expense]);
        }

        setName('');
        setValue('');
        setCategory('');

        closeModal();
    }

    return(
        <S.ModalContainer>
            <S.CloseModal onClick={closeModal}>X</S.CloseModal>
            <S.Content className={`container ${animate && "animate"}`}>
                <S.Form onSubmit={handleSubmit}>
                    <legend>{edit.name ? "Editing " + "'" + edit.name + "'" : "New Expense"}</legend>
                    <S.FormInfo>
                        <input type="text" placeholder="Add expense name" value={name} onChange={ e => setName(e.target.value)} />
                        <input type="number" placeholder="Add expense value" value={value} onChange={ e => setValue(Number(e.target.value))} />
                        <select value={category} onChange={ e => setCategory(e.target.value)}>
                            <option value="">-- Select a category --</option>
                            <option value="saving">Saving</option>
                            <option value="food">Food</option>
                            <option value="house">House</option>
                            <option value="expenses">Expenses</option>
                            <option value="hobbies">Hobbies</option>
                            <option value="health">Health</option>
                            <option value="subscriptions">Subscriptions</option>
                        </select>
                    </S.FormInfo>
                    {error && <S.Error>All fields are required</S.Error>}
                    <input type="submit" value={edit.name ? "Save changes" : "Add expense"} />
                </S.Form>
            </S.Content>
        </S.ModalContainer>
    )
}

export default Modal