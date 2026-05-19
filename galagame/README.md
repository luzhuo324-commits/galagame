# 黑客松内斗狂想曲：终极修仙版

一个原生 `HTML + CSS + JavaScript` 制作的单页互动 Galgame 小游戏。

## 已实现内容

- 三幕主线剧情与多结局分支
- `Player_San`、`Hype_Level`、`Code_Status` 全局变量展示
- 每幕独立倒计时与高压播报条
- 更强化的黑客松现场压迫感、黑话对白和腹黑主角人设

## 直接运行

### 方式一：直接双击

直接打开 `index.html` 即可游玩。

### 方式二：本地静态服务

在 PowerShell 中进入项目目录后执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 8000
```

然后在浏览器打开：

`http://127.0.0.1:8000/`

## 文件说明

- `index.html`：页面结构
- `styles.css`：赛博黑客松风格样式
- `script.js`：剧情数据、状态更新和交互逻辑
- `serve.ps1`：纯 PowerShell 静态文件服务器
