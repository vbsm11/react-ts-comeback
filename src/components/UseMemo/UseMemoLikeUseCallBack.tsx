import React, {useCallback, useMemo, useState} from 'react';


export const UseMemoLikeUseCallback = () => {
    console.log('UseMemoLikeUseCallback')

    const [counter, setCounter] = useState(0)

    const [books, setBooks] = useState(['HTML', 'CSS', 'JS', 'React'])

    const memoizedAddBook = useMemo(() => () => {
        setBooks([...books, 'SCSS' + new Date().getTime()])
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'SCSS' + new Date().getTime()])
    }, [books])

    return (
        <>
            <button onClick={() => {setCounter(counter+1)}}>+</button>
            {counter}
            <BooksWithMemo addBook={memoizedAddBook2}/>
        </>
    )
}

const Books = (props: {addBook: () => void}) => {
    console.log('Books')
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
        </div>
    )
}

const BooksWithMemo = React.memo(Books)