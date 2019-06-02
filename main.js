// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron')
const path = require('path')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
app.disableHardwareAcceleration()
// ipcMain.on('sync-message', (event, arg) => {
//   console.log("sync - message")
//   // event.returnValue('message', 'tanjinjie hello')
// })
function createWindow() {
  // Create the browser window.
  tray = new Tray(path.join(__dirname, './src/assets/bg.jpg'));
  tray.setToolTip('wechart');
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  });
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出', click: () => mainWindow.quit() },
  ]);
  tray.setContextMenu(contextMenu);
  mainWindow = new BrowserWindow({
    width: 805,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    },
    // titleBarStyle: 'hidden'
    frame: false
  })

  //自定义放大缩小托盘功能
  ipcMain.on('changeWindow', (event, arg) => {
    if (arg === 'min') {
      console.log('min')
      mainWindow.minimize()
    } else if (arg === 'max') {
      console.log('max')
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize()
      } else {
        mainWindow.maximize()
      }
    } else if (arg === "hide") {
      console.log('hide')
      mainWindow.hide()
    }
  })
  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://localhost:5000');
  BrowserWindow.addDevToolsExtension(
    path.join(__dirname, './src/extensions/react-dev-tool'),
  );


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    BrowserWindow.removeDevToolsExtension(
      path.join(__dirname, './src/extensions/react-dev-tool'),
    );
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
