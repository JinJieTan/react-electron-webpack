import React from 'react'
import { connect } from 'dva'
class App extends React.Component {
    handleAdd = () => {
        this.props.dispatch({
            type: 'home/add',
            val: 5,
            res: 1
        })
    }
    handleDel = () => {
    }
    render() {
        const { homes } = this.props
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleDel}>{homes}</button>
            </div>
        )
    }
}
export default connect(
    ({ home, main }) => ({
        homes: home.num,
        mains: main.main
    })
)(App)