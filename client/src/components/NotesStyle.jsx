import React, {useState, useEffect} from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import style from '../styles/bootstrap-markdown.min.css'
// Python MD Pages
import py1 from '../assets/python/intro.md'
import py2 from '../assets/python/list_loop.md'
import py3 from '../assets/python/dictionaries.md'
import py4 from '../assets/python/tuples.md'
import py5 from '../assets/python/flow.md'
import py6 from '../assets/python/oop.md'
import py7 from '../assets/python/csv_parser.md'
import py8 from '../assets/python/functions.md'
// Django MD Pages
import dj1 from '../assets/django/intro.md'
import dj2 from '../assets/django/views.md'
import dj3 from '../assets/django/RESTapi.md'
const NoteStyle = () => {
    const [page, setPage] = useState(0)
    const [mdText, setMdText] = useState('')
    const pms = useParams()
    useEffect(() => {
        const fetchPage = () => {
            if(page !== 0){
        	    fetch(page).then(res => res.text()).then(text => setMdText(text))
            }
        }
        fetchPage()
    },[page])

    const intro = () => {setPage(py1)}
    const liloop = () => {setPage(py2)}
    const diction = () => {setPage(py3)}
    const tupl = () => {setPage(py4)}
    const flow = () => {setPage(py5)}
    const oop = () => {setPage(py6)}
    const csv = () => {setPage(py7)}
    const funct = () => {setPage(py8)}
    const reset = () => {window.location.reload(true)}
    console.log(pms, "Params")
    if(mdText === '' && pms.style === 'python'){
        return(
            <Container fluid>
            <Card>
                <Button onClick={intro}>Intro to Python</Button>
                <br></br>
                <Button onClick={liloop}>Lists & Loops</Button>
                <br></br>
                <Button onClick={diction}>Dictionaries</Button>
                <br></br>
                <Button onClick={tupl}>Tuples</Button>
                <br></br>
                <Button onClick={flow}>Control Flow</Button>
                <br></br>
                <Button onClick={oop}>Object Oriented Programming</Button>
                <br></br>
                <Button onClick={csv}>CSV Parser</Button>
                <br></br>
                <Button onClick={funct}>Functions</Button>
            </Card>
            </Container>
        )
    }else if(mdText === '' && pms.style === 'django'){
        return(
            <Container fluid>

            </Container>
        )
    }else if(mdText !== ''){
        return(
            <Container fluid>
                <Card>
                    <ReactMarkdown 
                        children={mdText} 
                        className={style}
                        plugins={[[{ singleTilde: false }]]}
                        style={{backgroundColor: 'black'}}
                    />
                    <Button onClick={reset}>Back to Notes</Button>
                </Card>
            </Container>
        )
    }
}

export default NoteStyle