var { spawn } = require('child_process');
var td = spawn(`node`, ['runner']);
const {
    app,
    remote,
    BrowserWindow,
    BrowserView,
    screen,
    Menu,
    globalShortcut
} = require('electron');
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 2000,
        height: 1000,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
}
app.on("ready", loadMainWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
      td.kill();
    }
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});
