import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [
            {
                id:1,
                rollNo:1010,
                name:'Ali',
                email:'test@test.com',
                classname:"Bsc",


            }
        ],
        
    },
    reducers: {
        addUser: (state, action) => {
          console.log('action',action.payload);
          state.users = [...state.users,action.payload]
          
        },
        delUser:(state,action)=>{
            console.log('del user id',action.payload);
            let id = action.payload
            let filterUser=state.users.filter(users=>users.id!==id)
            state.users=filterUser
            
        },
      
         updateUser:(state,action)=>{
            let updateUser=action.payload
            console.log('updateUSer in action',updateUser);
            const index = state.users.findIndex(item => item.id === updateUser.id);
            let filterUpdateUser=state.users.splice(index,updateUser.id,{
                ...state.users[index],...updateUser
               })
               console.log('filterUpdateUser',filterUpdateUser);
            
         } 

    }
})

export const { addUser,delUser,addUpdateUser,updateUser } = userSlice.actions;
export default userSlice.reducer;