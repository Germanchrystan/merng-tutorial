import React, { useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from './../../../utils/hooks';

import { AuthContext } from './../../../context/auth'

const initialState = {
    username:'',
    password: '',
}


export default function Login(props){
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    const { onChange, onSubmit, values } = useForm(loginUserCallback, initialState)
    
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData }}){
            //console.log(result);
            context.login(userData)
            props.history.push("/")
            
        },
        onError(error){
            setErrors(error.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })

    function loginUserCallback(){
        loginUser()
    }
    
    return(
        <div className = "form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
                <h1>Login</h1>
                <Form.Input 
                label="username"
                placeholder="Username"
                name="username"
                type="text"
                error={errors.username ? true : false}
                value={values.username}
                onChange={onChange}
                />

                <Form.Input 
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                error={errors.password ? true : false}
                value={values.password}
                onChange={onChange}
                />

                <Button type = "submit" primary>
                    Login
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const LOGIN_USER = gql`
 mutation login(
    $username: String!
    $password: String!
    
 ) {
    register(
        registerInput: {
            username : $username
            password: $password
        }
    )
 }
 
 
 `