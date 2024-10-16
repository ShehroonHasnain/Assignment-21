import React, { useState } from 'react'
import Tableitems from './Tableitems'
import Additems from './Additems'
import { useSelector } from 'react-redux'


export default function Table() {
   const users= useSelector(state=>state.userSlice.users)
   console.log('user in table to show in tableItem',users);

   const [currentUser,setCurrentUser]=useState({})

   const onCLickAddUpdateUser=(user)=>{
         setCurrentUser(user)
   }
   
    return (

        <div className="container">

            <h1>Student Information System</h1>
            
            <Additems currentUser={currentUser}/>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    
                        <Tableitems  onCLickAddUpdateUser={onCLickAddUpdateUser}/>
                    
            
                </tbody>
            </table>
        </div>
    )
}
