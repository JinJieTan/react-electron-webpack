import React from 'react'
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            err:''
        }
    }
    componentDidCatch(err,info){
        this.setState({
            err:err && err.stack 
        })
    }
    render(){
        const {err} = this.state
        return(
            <h1>{err}123</h1>
        )
    }
}