import {Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const nav = useNavigate()
    const nL = () => {nav('/login')}
    const nU = () => {nav('/todo')}

    if(props.loginStatus === true){
        return(
            <div className='home'>
                <Card>
                    <Button onClick={nU}>Get Started</Button>
                </Card>
            </div>
        )
    }else{
        return(
            <div className='home'>
                <Card style={{textAlign: 'center', marginTop: '35%'}}>
                    <Button onClick={nL}>Login</Button>
                    <h5>Don't have an account? <a href='/register'>Click Here</a> to Register.</h5>
                </Card>
            </div>
        )
    }
}

export default Home