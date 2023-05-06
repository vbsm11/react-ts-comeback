import React, {useState} from 'react';

const NewMessagesCounter = (props: any) => {
  return (
      <div>{props.count}</div>
  )
}

const Users = (props: {users: Array<string>}) => {
  console.log('USERS')
  return (
      <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>
  )
}

const UsersWithMemo = React.memo(Users)

export const Example1 = () => {
  console.log('example')

  const [counter, setCounter] = useState(0)

  const [users, setUsers] = useState(['Alex', 'Masha', 'Pasha'])

  const addUser = () => {
    setUsers([...users, 'Sveta' + new Date().getTime()])
  }

  return (
      <>
        <button
            onClick={() => {setCounter(counter+1)}}
        >
          +
        </button>
        <NewMessagesCounter count={counter}/>
        <button
            onClick={addUser}
        >
          add user
        </button>
        <UsersWithMemo users={users}/>
      </>
  )

}