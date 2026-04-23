const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 690,
    height: 585,
    title: "強震モニタ(仮)",
    autoHideMenuBar: true,
    icon: __dirname + '/icon.ico',
  });

  win.loadURL('https://kwatch-24h.net/2moni/2sec_alm_2monitw.html#');

  win.webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 620,
        height: 620,
        autoHideMenuBar: true,
        icon: __dirname + '/icon.ico',
      }
    };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});