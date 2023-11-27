

const Footer = ({Length}) => {
    //const today = new Date()
  return (

    <footer>
       
      <p> {Length} list {Length <= 1 ? 'item' : 'items'}</p>


    </footer>
  )
}

export default Footer