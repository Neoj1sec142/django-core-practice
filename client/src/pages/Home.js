import {Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const nav = useNavigate()
    const nL = () => {
        nav('/login')
    }
    return(
        <Card>
            <Button onClick={nL}>Get Started</Button>
        </Card>
    )
}

export default Home