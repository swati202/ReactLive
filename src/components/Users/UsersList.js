import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList=(props)=>
{
    //console.log(props.users);
    return(
        <Card className={classes.users}>
        <ul>
            {
                props.users.map((userinfo,index)=>
                {
                    return (
                        <li key="index">
                            {userinfo.name} ({userinfo.age}years Old)
                        </li>
                    )
                })
            }
            
        </ul>
        </Card>
    );
};
export default UserList;