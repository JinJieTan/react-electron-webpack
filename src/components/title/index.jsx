import React from 'react'
import { ipcRenderer } from 'electron'
import './index.less'
export default class App extends React.Component {
    handle = (type) => {
        return () => {
            if (type === 'min') {
                console.log('min')
                ipcRenderer.send('changeWindow', 'min')
            } else if (type === 'max') {
                console.log('max')
                ipcRenderer.send('changeWindow', 'max')
            } else {
                console.log('hide')
                ipcRenderer.send('changeWindow', 'hide')
            }
        }
    }
    render() {
        return (
            <div className="title-container">
                <div className="title" style={{ "WebkitAppRegion": "drag" }}>可以拖拽的区域</div>
                <button onClick={this.handle('min')}>最小化</button>
                <button onClick={this.handle('max')}>最大化</button>
                <button onClick={this.handle('hide')}>托盘</button>
            </div>
        )
    }
}