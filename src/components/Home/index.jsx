import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import rememberme from '../../assets/rememberme.png'
import { HomeButton, HomeContainer, HomeTextInput, Logo } from './styles'


export default function Home() {

    const [name, setName] = useState('')
    const [send, setSend] = useState(false)
    
    var redirect = useHistory()

    useEffect(() => {
        if (send) {
            let history = localStorage.getItem('history') ? Array.from(JSON.parse(localStorage.getItem('history'))) : []
            history.push(
                {
                    name: name,
                    date: '',
                    time: ''
                }
            )
            localStorage.setItem('history', JSON.stringify(history))
            redirect.push('/game')
        }
    }, [send])

    return (
        <HomeContainer>
            <Logo src={rememberme}></Logo>
            <HomeTextInput onChange={(e) => setName(e.target.value)} placeholder={'Type a name of your preference'}></HomeTextInput>
            <HomeButton disabled={'' === name ? true : false} onClick={() => setSend(true)}>ENTER</HomeButton>
        </HomeContainer>
    )
}