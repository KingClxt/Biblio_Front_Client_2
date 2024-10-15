import { Button } from './components/Button'
import { ListCard } from './components/ListCard'
import { NavBar } from './components/NavBar'
import { Title } from './components/Title'

function App() {

  return (
    <div className='container mx-auto'>
      <NavBar />
      <Title text="NOS LIVRES" />
      <ListCard  />
      <Button center myclasse="btn-primary">
        Voir plus
      </Button>
    </div>
  )
}

export default App
