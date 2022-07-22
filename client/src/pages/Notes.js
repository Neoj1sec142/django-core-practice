import {Card, Dropdown, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
// import style from './markdown-styles.module.css';
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
const Notes = () => {
    const [style, setStyle] = useState(null)
    const [notes, setNotes] = useState(null)
    const [mdText, setMdText] = useState('')
	// const [privacyPolicyText, setPrivacyPolicyText] = useState('')

	
	useEffect(() => {
		fetch(notes).then(res => res.text()).then(text => setMdText(text))
	},[notes])

	if(notes === null){
        return(
            <Card>
                <Button onClick={() =>setStyle(1)}/>
                {style === null ?
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Python
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>setNotes(py1)}>Intro</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py2)}>Lists and Loops</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py3)}>Dictionaries</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py4)}>Tuples</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py5)}>Flow</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py6)}>OOP</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py7)}>CSV Parser</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setNotes(py8)}>Functions</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                : null}
                {style === 1 ?
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Django
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                : null}


                
                <Card.Text>Hey Bud Build a Sand Castle here in Your Sandbox!!</Card.Text>
                
            </Card>
        )
    }else if(notes !== null){
        return(
            <ReactMarkdown children={mdText} className='markdown'/>
        )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default Notes