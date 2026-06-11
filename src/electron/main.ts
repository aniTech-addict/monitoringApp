import { app, BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './utils.js'
app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
    })
    const basePath = app.getAppPath()
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(basePath, 'dist-react', 'index.html'))
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
