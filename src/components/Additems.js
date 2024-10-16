import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, updateUser } from '../redux/slices/userSlice'



export default function Additems(props) {
    const [rollNo, setRollNo] = useState(``)
    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [classname, setClass] = useState(``)

    const allUser = useSelector(state => state.userSlice.users)
    const idCount = allUser.length
    console.log('idCount in Additems', idCount);

    const dispatch = useDispatch()

    console.log('user in add items', props.currentUser);

    useEffect(() => {
        if (props.currentUser) {
            setRollNo(props.currentUser?.rollNo)
            setName(props.currentUser?.name)
            setEmail(props.currentUser?.email)
            setClass(props.currentUser?.classname)
        }
    }, [props.currentUser])



    const onCLickAddHandler = () => {
        if (props.currentUser) {
            let user = {
                id: props.currentUser.id,
                rollNo,
                name,
                email,
                classname,
            }
            dispatch(updateUser(user))
        } else {
            let user = {
                id: idCount + 1,
                rollNo,
                name,
                email,
                classname,
            }
            dispatch(addUser(user))
        }

    }





    return (
        <div className="form-container">

            <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="text" id="rollNo" placeholder="Enter Roll No" />
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Enter Name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Enter Email" />
            <input value={classname} onChange={(e) => setClass(e.target.value)} type="text" id="class" placeholder="Enter Class" />
            <button onClick={onCLickAddHandler} id="addBtn">Add</button>
        </div>
    )
}
