---
outline: 2
---

# 红魔乡运行问题

记录一些尝试愉快游玩红魔乡时遇到的问题。

不知为何，这些问题大部分都具有很大的随机性。可能平常这些问题经常出现，但有时即使你什么措施都不采取，并且反复重启一千万次，仍然复现不了。

::: tip
遇到问题时请首先参考[THB相关页面](https://thwiki.cc/%E5%AE%98%E6%96%B9%E6%B8%B8%E6%88%8F/%E9%94%99%E8%AF%AF%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)。
:::

## 进入游戏全屏后瞬间退出桌面

### 现象

- 运行游戏后，屏幕分辨率更改（进入全屏模式），但没有游戏窗口出现。
- 随后屏幕分辨率恢复原状（也有概率不会恢复），仍然没有游戏窗口。
- 也有时全屏后会出现游戏窗口，不过一瞬间就会消失。
- 任务管理器中可以看到游戏进程。

### 解决方法

- ~~不停重试，运气好可以恢复正常。~~
- 右键游戏可执行文件->属性->兼容性->禁用全屏优化。
  ![禁用全屏优化选项位置](https://img.wizardsbowl.com/2026/01/%E5%85%BC%E5%AE%B9%E6%80%A7-%E7%A6%81%E7%94%A8%E5%85%A8%E5%B1%8F%E4%BC%98%E5%8C%96-0eea33b8316d201d901e5022e63c7482.png)

## 游戏超高速运行

### 现象

- 进入游戏后所有画面一闪而过，无限循环@@而且音效爆炸@@。
- 右下角显示fps成千上万。
  ![万帧红魔乡](https://img.wizardsbowl.com/2026/01/%E4%B8%87%E5%B8%A7%E7%BA%A2%E9%AD%94%E4%B9%A1-645050fba89060ba2576229e4e152422.png)

### 解决方法

- 启动custom.exe，更改为窗口模式即可。
  ![窗口模式选项位置](https://img.wizardsbowl.com/2026/01/%E7%BA%A2%E9%AD%94%E4%B9%A1%E7%AA%97%E5%8F%A3%E9%80%89%E9%A1%B9-2e8c882c6ca7e1b4adb88ba68bd2e217.png)
- 或者使用[VsyncPatch](https://thwiki.cc/%E6%B8%B8%E6%88%8F%E6%94%BB%E7%95%A5/STG%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/VsyncPatch)，实测同样可以解决问题。

## 报错找不到文件th06logo等

### 现象

- 运行游戏后直接报错弹出错误弹窗，内容包含data/title/th06logo.jpg等字样。
  ![红魔乡地区错误弹窗](https://img.wizardsbowl.com/2026/01/%E7%BA%A2%E9%AD%94%E4%B9%A1%E5%9C%B0%E5%8C%BA%E9%94%99%E8%AF%AF%E5%BC%B9%E7%AA%97-cf6db4453192f04a463d4aea9478b64c.png)

### 解决方法

- 安装[Locale Emulator](https://github.com/xupefei/Locale-Emulator)。
- 然后，将Locale Emulator应用到`東方紅魔郷.exe`、`vpatch.exe`、`thcrap_loader.exe`或`thprac.exe`均可以生效。
- PS:Locale Emulator不支持64位程序并且已归档，如有需要可以考虑[Locale Remulator](https://github.com/InWILL/Locale_Remulator)。

## 使用thprac进入游戏后黑屏闪退

### 现象

- 使用thprac启动游戏后，屏幕黑屏几秒，随后退回桌面。
- 任务管理器中可以看到游戏进程。
- 不使用thprac则无此问题。

### 解决方法

- 进入thprac的设置界面->启动器->启动游戏后->什么也不做。@@玄学方法@@
  ![启动游戏后选项位置](https://img.wizardsbowl.com/2026/01/thprac%E8%AE%BE%E7%BD%AE-%E5%90%AF%E5%8A%A8%E6%B8%B8%E6%88%8F%E5%90%8E-11a29ad75436bdcee4d99e8a71f4a8cc.png)

## 使用中文输入法时出现候选框

### 现象

- 使用中文输入法时，按键会导致屏幕左上角出现输入法候选框。

### 解决方法

- 使用thprac运行游戏。
- 或者使用英文输入法，如美式键盘。
