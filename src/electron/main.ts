import { app, BrowserWindow } from 'electron'
import path from 'path'

app.whenReady().then(()=>{
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
    })
    const basePath = app.getAppPath()
    mainWindow.loadFile(path.join(basePath, 'dist-react', 'index.html'))
})

app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin') {
        app.quit()
    }
})