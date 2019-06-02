import React from 'react'
import App from './App'
import dva from 'dva'
import Homes from './model/Homes'
import main from './model/main'
const app = dva()
app.router(({ history, app: store }) => (
  <App
    history={history}
    getState={store._store.getState}
    dispatch={store._store.dispatch}
  />
));
app.model(Homes)
app.model(main)
app.start('#root')