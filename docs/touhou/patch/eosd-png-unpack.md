---
description: 介绍了使用thtk及其图形化界面解包提取红魔乡的图片资源的方法，以及解决红魔乡图片资源透明度缺失的问题，还有一些关于红魔乡图片资源的趣事
head:
  - - meta
    - name: keywords
      content: Touhou,东方Project,东方红魔乡,解包,资源,图片,图像,透明度,Alpha通道,灰度图,thtk
tags: [Touhou,东方红魔乡,东方官作,解包]
outline: 2
---

# 红魔乡图片解包

本文介绍了如何解包提取红魔乡的图片资源。

## 解包资源

东方官作的游戏资源解包可以使用[thtk](https://github.com/thpatch/thtk)工具完成，这是一个命令行工具。不熟悉命令行操作的!!或者和我一样懒的!!可以使用[re_thtk_gui](https://github.com/RUEEE/re_thtk_gui)工具，这是一个thtk的图形化交互界面，开箱即用，点一点就能完成解包。

下面介绍使用re_thtk_gui解包红魔乡资源文件的流程。

### 选择游戏版本

界面左上角->游戏->TH06

![re-thtk-gui-选择游戏版本](https://img.wizardsbowl.com/2026/02/re-thtk-gui-%E9%80%89%E6%8B%A9%E6%B8%B8%E6%88%8F%E7%89%88%E6%9C%AC-c1d16a6066453b1a2162e134f9dd8859.png)

### 打开dat文件

thdat->文件路径->最右侧按钮

![re-thtk-gui-打开dat文件](https://img.wizardsbowl.com/2026/02/re-thtk-gui-%E6%89%93%E5%BC%80dat%E6%96%87%E4%BB%B6-4fe7a5be436b3b456632bd6ecacd5325.png)

### 选择dat文件

进入游戏目录->选择第一个`.DAT`文件

![re-thtk-gui-选择dat文件](https://img.wizardsbowl.com/2026/02/re-thtk-gui-%E9%80%89%E6%8B%A9dat%E6%96%87%E4%BB%B6-d02a392d10bf777eb5e1f394e7fdd0e4.png)

### 选择输出路径

一般选择dat文件后，会自动填充`解包路径`和`所有文件`文本框。

- `解包路径`: 存放解包`.DAT`文件后得到的游戏资源文件（是一个文件夹）
- `所有文件`: 输出`.DAT`文件内文件列表的路径（是一个`.txt`文本文件）

![re-thtk-gui-dat路径自动填充](https://img.wizardsbowl.com/2026/02/re-thtk-gui-dat%E8%B7%AF%E5%BE%84%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85-8de72981d7035123c1efcaece6aa05c5.png)

### 运行解包程序

点击`解包`，等待程序运行完成。期间GUI界面可能会暂时假死，并闪过数个命令行窗口，属于正常现象。

如果是后来出的正作，到这里基本就算解包完成了。然而作为新作中的第一作，红魔乡比较特殊，因为它的`.DAT`文件总共有6个（不像大多数新作只有一个）。因此，需要重复上述操作总共6次，分别完成对`CM`、`ED`、`IN`、`MD`、`ST`、`TL`总共六个`.DAT`文件的解包。

## 处理图片

完成对六个`.DAT`文件的解包之后，打开输出目录，可以看到`.anm`、`.ecl`、`.std`等等许多文件类型，其中`.anm`文件就是游戏的图像资源。如果是后来出的正作，基本上只要直接解包这些`.anm`文件就可以得到`.png`文件。

![re-thtk-gui-anm选项](https://img.wizardsbowl.com/2026/02/re-thtk-gui-anm%E9%80%89%E9%A1%B9-2c11921f9c2cfee94ac2147aed3517c4.png)

### 图片透明度

然而，作为新作中的第一作，红魔乡还是那么的特殊，直接解包这些`.anm`文件并不能得到任何输出文件。注意到，其实解包红魔乡的`.DAT`文件之后直接就得到了`.png`和`.jpg`文件。那是不是说，这些图像文件就不需要进一步处理了？NO NO NO，你还应当注意到，这些`.png`图片似乎不是没有透明度，就是没有彩色？！！

其实，这些`.png`图片大都经历了通道拆分，即将原图的Alpha（透明度）通道的值拆分出来存放到一个单独的文件中，从而原图只保留了RGB色彩信息而损失了透明度信息。对于一个RGB通道图`xxx.png`，其对应的Alpha通道图被命名为`xxx_a.png`，此图为灰度图，其每个像素的亮暗指示着原图对应像素的透明度值。

我不知道这样做的目的何在（为了节省存储空间？）!!（何意味）!!，甚至不知道分割图片Alpha通道这种事究竟是ZUN干的还是thtk干的。

反正，我又专门写了[一个程序](../../software/utility/alpha-pixel-image.md)用来合并这些通道图。

### 合并通道图

解包后得到的`.anm`文件一共有83个，然而使用上述工具合并通道图后却只能得到63张`.png`图片。结合`.anm`文件的内容（使用十六进制编辑器查看）和对应图像文件的实际情况，这中间缺少的20张图片，或是**和其他图片共用**一张Alpha通道图从而导致合并程序无法正确识别（共5张），或是图片本身自带Alpha值从而**不需要**Alpha通道图（共11张），或是其`.anm`文件根本就**不存在**对应的图像资源（共4张）。

这20张图片所对应的Alpha通道图在下表中列出。

| ANM文件 | Alpha通道图 |
| --- | --- |
| asciis | ascii_a |
| capture | 不存在 |
| eff00 | 不需要 |
| eff01 | 不需要 |
| eff02 | 不需要 |
| eff03 | 不需要 |
| eff04 | 不需要 |
| eff05 | 不需要 |
| eff06 | 不需要 |
| eff07 | 不需要 |
| face10b | face10a_a |
| face12b | face12a_a |
| loading | 不需要 |
| music01 | 不存在 |
| music02 | 不存在 |
| stg2bg | 不需要 |
| stg6bg | 不需要 |
| text | 不存在 |
| title01s | title01_a |
| title04s | title04_a |

## 图像资源

在thcrap的[图片翻译页面](https://www.thpatch.net/wiki/Th06/Images/zh-hans)可以查看所有图像资源的原始图像、精灵边界、翻译图像。

或者我这里也提供我自己解包出来的图像资源：

<DownloadCounter fileName="th06_img.zip" filePath="https://file.wizardsbowl.com/touhou/assets/th06_img.zip" />

注：在thcrap的翻译补丁中有5张以`ti_`开头的可用图像是原版游戏所没有的，它们是thcrap补丁使用的独有资源。

> 这些**不是原版日语游戏的一部分**，但是可以选择性地在翻译中使用，而非原版的纯文本。

## 趣事

@@@未完待续...@@@
