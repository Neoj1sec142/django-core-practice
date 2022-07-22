import {Card} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import md from '../assets/python/csv_parser.md'
const Sandbox = () => {
    const [mdText, setMdText] = useState('')
	// const [privacyPolicyText, setPrivacyPolicyText] = useState('')

	
	// useEffect(() => {
	// 	fetch(md).then(res => res.text()).then(text => setMdText(text))
	// })

	// useEffect(() => {
	// 	fetch(PrivacyPolicy).then(res => res.text()).then(text => setPrivacyPolicyText(text))
	// })
    return(
        <Card>
            <Card.Text>Hey Bud Build a Sand Castle here in Your Sandbox!!</Card.Text>
            <ReactMarkdown children={mdText}/>
        </Card>
    )
}

export default Sandbox