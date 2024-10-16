import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUpdateUser, delUser } from '../redux/slices/userSlice';

export default function Tableitems(props) {
    //    console.log('props in tableiTems',props);
    const users = useSelector(state => state.userSlice.users)
    const dispatch = useDispatch()
    const onCLickDelHandler = (id) => {
        dispatch(delUser(id))

    }
    //    const onCLickAddUpdateUser=(user)=>{
    // console.log('onclickUpdateAdd user',user);
    // dispatch(addUpdateUser(user))

    //    }

    return (
        <>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.rollNo}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.classname}</td>
              <td>
                <button
                  onClick={() => props.onCLickAddUpdateUser(user)}
                  className="updateBtn"
                >
                  Update
                </button>
                <button
                  onClick={() => onCLickDelHandler(user.id)}
                  className="deleteBtn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </>
      );
}
