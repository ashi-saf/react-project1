


const Headers = ({title}) => {
  return (
    <header style={{
        backgroundColor:'#333',
        color:'#fff'
    }}>
        <h1>{title}</h1>
    </header>
  )
}

Headers.defaultProps = {
  title:'Default List'
}

export default Headers
