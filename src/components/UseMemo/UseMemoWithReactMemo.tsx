import React, {useMemo, useState} from 'react';

const Users = (props: {users: Array<string>}) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const UsersWithMemo = React.memo(Users)

export const UseMemoWithReactMemo = () => {
    console.log('UseMemoWithReactMemo')

    const [counter, setCounter] = useState(0)

    const [users, setUsers] = useState(['Alex', 'Masha', 'Pasha', 'Igor'])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    const newUsersArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a'))
    }, [users])

    return (
        <>
            <button
                onClick={() => {setCounter(counter+1)}}
            >
                +
            </button>
            {counter}

            <UsersWithMemo users={newUsersArray}/>
            <button onClick={addUser}>add user</button>

        </>
    )

}