const NewMessagesCounter = (props: any) => {
  return (
      <div>{props.count}</div>
  )
}

const Users = (props: {users: Array<string>}) => {
  return (
      <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>
  )
}

export const Example1 = () => {
  return (
      <>
        <NewMessagesCounter count={10}/>
        <Users users={['Alex', 'Masha', 'Pasha']}/>
      </>
  )

}