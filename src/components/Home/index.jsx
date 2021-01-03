import React, { useEffect, useState } from 'react'
import { HomeButton, HomeContainer, HomeText, HomeTextInput } from './styles'
import { useHistory } from 'react-router'

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
            <HomeText>Remember-me</HomeText>
            <HomeTextInput onChange={(e) => setName(e.target.value)} placeholder={'Type a name of your preference'}></HomeTextInput>
            <HomeButton onClick={() => setSend(true)}>ENTER</HomeButton>
        </HomeContainer>
    )
}