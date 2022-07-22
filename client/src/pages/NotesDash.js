import {Card, Dropdown, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
// import style from './markdown-styles.module.css';

const NotesDash = () => {
    const n = useNavigate()
    const [note, setNote] = useState('')
    const route = `/notes/${note}`
    const movePage = (e) => {
        setNote(e.target.name)
    }
    
    if(note !== ''){
        n(route)
    }
    
    return(
        <Card>
            
            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Languages
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item name='python' onClick={(e)=>movePage(e)}>Python</Dropdown.Item>
                    <Dropdown.Item name='django' onClick={(e)=>movePage(e)}>Django</Dropdown.Item>
                    <Dropdown.Item name='bash' onClick={(e)=>movePage(e)}>Bash</Dropdown.Item>
                    <Dropdown.Item name='javaScript' onClick={(e)=>movePage(e)}>JavaScript</Dropdown.Item>
                    {/* <Dropdown.Item onClick={()=>setNotes()} name='java'>Java</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
            
            <Card.Text>Hey Bud Build a Sand Castle here in Your Sandbox!!</Card.Text>
            
        </Card>
    )
    
}

export default NotesDash