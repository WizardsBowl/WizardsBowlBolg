---
description: 制作一个thcrap补丁，首先需要建立一个补丁仓库，设置仓库信息，再在仓库中建立一个或数个补丁包，为每个补丁包添加描述，添加资源文件。使用补丁时，需要先使用thcrap创建快捷方式，再通过快捷方式启动游戏并应用补丁。
head:
  - - meta
    - name: keywords
      content: Touhou,东方Project,thpatch,补丁,教程,文件修改,thcrap
tags: [Touhou,东方官作,thpatch]
---

# 基本补丁

本文介绍了如何制作一个简单的[thcrap](https://github.com/thpatch/thcrap)补丁。

参见thpatch上的[官方教程](https://www.thpatch.net/wiki/Touhou_Patch_Center:Servers/zh-hans#搭建自己的补丁服务器)。

使用thcrap补丁的前提...当然是[安装thcrap](https://www.thpatch.net/wiki/Touhou_Patch_Center:Download/zh-hans)啦...

## 创建仓库

适用于thcrap的补丁必须包含在一个补丁仓库中，所以创建补丁之前必须首先创建仓库。

在thcrap根目录下的`repos`文件夹内新建一个`my-repo`文件夹，它就是你的补丁仓库了。有条件的话可以把它上传到GitHub上。

注意要把`my-repo`替换为你给你的仓库取的名字（同时也是仓库的id），选定之后轻易不能更改。

## VSCode配置

由于thcrap补丁内的所有`*.js`文件实际上都是json文件而不是JavaScript，编辑它们时绝大多数编辑器都会报错。

如果你和我一样使用VSCode的话，可以在项目根目录下新建`.vscode`文件夹，向其中添加`settings.json`文件并写入以下内容：

```json
{
    "files.associations": {
        "*.js": "json"
    }
}
```

这会使VSCode在项目级将所有`*.js`文件视为json文件，并使用json语法进行解析。

## 仓库配置

### 补丁仓库配置

在仓库根目录内创建`repo.js`文件，描述仓库的基本信息。

```json
{
    "contact": "email: xxx@xxx.com, GitHub: xxx, weibo: xxx", // 联系方式：随便写，邮箱、社交账号啥的都可以
    "id": "my-repo", // 仓库ID：就是你的仓库名称，与仓库目录名相同
    "title": "USERNAME's Touhou Patch Repository", // 仓库描述
    "patches": { // 仓库内的补丁列表
        "ex-mod": "EX means Example." // 一个补丁：键值对，左侧的键为补丁id，右侧的值为补丁描述
    },
    "servers": [ // 仓库服务器列表：如果你把仓库上传到了GitHub，就填GitHub仓库地址，没有的话也可以不填
        "https://raw.githubusercontent.com/USERNAME/my-repo/main/" // 没有服务器的话请删除此行
    ]
}
```

### Git配置

根目录内添加`.gitattributes`和`.gitignore`文件。（不使用Git的话可以跳过）

可以参考我的配置：[.gitattributes](https://github.com/WizardsBowl/wzb-thpatch/blob/main/.gitattributes)和[.gitignore](https://github.com/WizardsBowl/wzb-thpatch/blob/main/.gitignore)。

官方也提供了[.gitattributes](https://github.com/thpatch/thcrap-tsa/blob/master/.gitattributes)文件，但其并不包含`*.jpg`的配置，导致上传`jpg`图像时可能会产生文件损坏。!!Git把jpg当成了文本文件，进行了行尾转换...!!

### 忽略补丁内文件

根目录内创建`thcrap_ignore.txt`文件，写入以下内容：

```text
*.psd
*.xcf
*.kra
*.afphoto
*.aseprite
```

参考[相关代码](https://github.com/thpatch/thcrap/blob/97d96d0cd17e94a4191fc999bb0993d840df1db1/scripts/repo_update.py#L71)，这应该是让thcrap在更新补丁文件时忽略这些文件。

## 创建补丁

假如你给补丁命名为`ex-mod`（同样地，它也会同时作为补丁的id），那就在仓库根目录内新建一个`ex-mod`文件夹，作为这个补丁的目录。

## 注册补丁

在仓库的配置文件内添加相应的键值对记录，注册补丁的id和描述文本。

```json{4}
{
    ...
    "patches": {
        "ex-mod": "EX means Example."
    },
    ...
}
```

## 补丁配置

在补丁目录内新建`patch.js`文件，写入以下内容：

```json
{
    "id": "ex-mod", // 补丁ID：同时也是补丁名称，与补丁目录名相同
    "title": "Example Mod", // 补丁描述：与仓库配置文件内注册的描述不同，这个描述并不会显示在补丁列表中
    "servers": [ // 补丁服务器列表：同仓库服务器列表，有的话就填，没有的话也可以不填
        "https://raw.githubusercontent.com/USERNAME/my-repo/main/ex-mod/" // 没有服务器的话请删除此行
    ],
    "dependencies": [ // 依赖列表：运行你的补丁所需要的依赖项
        "nmlgc/base_tsa", // 东方官作基础支持包：必要依赖项
        "nmlgc/base_tasofro" // 黄昏边境基础支持包：对于黄昏作，必要依赖项
    ]
}
```

一些thpatch官方提供的基础包：[thcrap-tsa](https://github.com/thpatch/thcrap-tsa)。

## 编辑补丁文件

至此仓库和补丁的基本配置已经完成，接下来只要直接往补丁目录里扔文件就行了。

### 游戏版本目录

现在要明确的一点就是，一个补丁是可以适用于多部作品的。比如你要修改红魔乡的游戏文件，那就在补丁目录内新建`th06`文件夹，然后把修改后的文件扔进去。如果还要修改妖妖梦的文件，那就再新建一个`th07`文件夹，再把文件扔进去。当thcrap将这个补丁应用于红魔乡时，会自动选择`th06`目录内的文件，应用于妖妖梦时则会自动选择`th07`目录内的文件。

具体可用的游戏版本文件夹可参考[基础支持包的文件列表](https://github.com/thpatch/thcrap-tsa/tree/master/base_tsa)。

### 修改游戏文件

把修改后的游戏资源文件扔到游戏版本目录后，运行游戏时thcrap会自动使用它们替换游戏原本的文件。

各部作品的可用资源文件以它们各自解包后得到的文件为准。然而，thcrap也额外定义了一些其独有的资源文件，这些资源文件是原版游戏所没有的，但是却可以方便补丁的开发。

基本上可能出现的文件类型有这些：

| 文件类型 | 说明 |
| --- | --- |
| ANM PNG JPG | 图像及动画 |
| WAV MID | 音频 |
| MSG | 对话文本 |
| END | 结局文本 |
| ECL | 弹幕控制代码 |
| SHT | 自机数据 |
| FMT POS | BGM元数据 |
| STD | 3D背景 |
| RPY | 演示回放 |

相关资料：  
[THBWiki](https://thwiki.cc/%E8%84%9A%E6%9C%AC%E5%AF%B9%E7%85%A7%E8%A1%A8)  
[Touhou Wiki](https://en.touhouwiki.net/wiki/User:Mddass/Touhou_File_Format_Specification)  
[pytouhou](https://pytouhou.linkmauve.fr/doc/)

### 二进制修改

我对这一部分目前并没有任何了解，但是在浏览文件时，看到基础支持包内根目录下有很多以游戏版本命名的json文件（比如[这个](https://github.com/thpatch/thcrap-tsa/blob/master/base_tsa/th06.js)），其中出现了大量的`binhacks`字段，那么很明显thcrap应该是支持二进制修改的。如果有兴趣，有时间的话，可能会研究一下。

## 完成示例补丁

是时候实践一下了。就以修改红魔乡的图像资源为例，从解包后的文件中随便挑两个，随便改改，再扔到`my-repo/ex-mod/th06`文件夹里，这个示例补丁就算完成了。

::: tabs

@tab:active title00.jpg

![title00](https://img.wizardsbowl.com/2026/02/title00-2ca4515fee4d7a84e04bd931460f542f.jpg)

@tab title03.png

![title03](https://img.wizardsbowl.com/2026/02/title03-7246782bb076fbd41a3efa1301479822.png)

:::

## 使用补丁

使用thcrap的补丁也很简单。

### 正确放置补丁

首先要保证补丁的仓库文件夹（一定要注意是整个仓库的文件夹而不是单独的补丁文件夹）在thcrap根目录下的`repos`目录内。不管是你自己制作的补丁仓库，还是下载的别人的补丁仓库，只有这样，补丁才能被thcrap正确识别。

### 配置thcrap

1. 启动thcrap，点击Next。
   ![thcrap-ex-mod-1](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-1-a070c274089de033f2030327b650b2d1.png)
2. ①选择Simplified Chinese。  
   ②点击All patches。
   ![thcrap-ex-mod-2](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-2-8236e8cd41d01125f8be0521bf361fdc.png)
3. 在Available Patches列表中找到你的仓库和补丁。
   ![thcrap-ex-mod-3](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-3-433cd0cea052a80272d4ef375bc8bbc9.png)
4. 将鼠标移动到你的补丁的id上，显示出一个向右的小箭头，点击这个箭头。
   ![thcrap-ex-mod-4](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-4-5c7b336ab7fef0d4732e7dde5cdf59b5.png)
5. 点击Next。
   ![thcrap-ex-mod-5](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-5-984ec984f3c6f335291a51ba92927ff8.png)
6. ①选择你要使用补丁的游戏版本。  
   ②点击Next。
   ![thcrap-ex-mod-6](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-6-2945661ccec7c0f3dad61186332a0541.png)
7. ①选择你要在哪些地方创建快捷方式。  
   ②点击Next。
   ![thcrap-ex-mod-7](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-7-9310444e23b06c3c8cc6286d5262bf44.png)
8. Congratulations! You did it!
   ![thcrap-ex-mod-8](https://img.wizardsbowl.com/2026/02/thcrap-ex-mod-8-b7aeda0d22cbec715496d3eb2e5201ee.png)

### 验收成果

启动你刚刚创建的快捷方式，查看补丁效果。

![红魔乡示例补丁](https://img.wizardsbowl.com/2026/02/%E7%BA%A2%E9%AD%94%E4%B9%A1%E7%A4%BA%E4%BE%8B%E8%A1%A5%E4%B8%81-096b8c2858659a8f57939f5e4688f590.png)
