import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Input } from '../components'

const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        name === 'id' ? setId(value) : setPassword(value)
        console.log(name, value)
    }
    const handleLogin = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(id === user.id && password === user.password){
            navigate('/home')
        }else{
            alert('You gaved wrong id or password !')
        } 
    }
    return (
        <div>
            <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
            <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login