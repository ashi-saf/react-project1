import { useState } from "react"

const Content = () => {
    const [name,setName] = useState('Ashi')

    const handleName = ()=>{
        const name = ['ashi','hamiz','hadhi','hana']
        const number = Math.floor(Math.random()*4)
        /* return name[number] */
        setName(name[number])
    }
    const handleClick = ()=>{
        console.log('you clicked')
    }
    const handleClick1 = (name)=>{
        console.log(`${name} was clicked`)
    }
    const handleClick2 = (e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}
            </p>
            <button onClick={handleName}>Change name</button>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>handleClick1('Ashika')}>Click Me</button>
            <button onClick={(e)=>handleClick2(e)}>Click Me</button>
        </main>
    )
}

export default Content