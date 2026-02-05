---
description: 发布软件AlphaPixelImage，该软件用于拆分或合并图片的Alpha通道，生成或合并彩色图和灰度图，介绍了软件的功能和使用方法。
head:
  - - meta
    - name: keywords
      content: AlphaPixelImage,软件,实用工具,Alpha通道,透明度,彩色图,灰度图,通道图,拆分,合并,发布
tags: [软件,实用工具]
---

# Alpha Pixel Image

该软件用于拆分或合并图片的Alpha通道，生成或合并彩色图和灰度图。

## 使用说明

### 拆分通道

该软件可以将带透明度的图片拆分为RGB通道图`output.png`和Alpha通道图`output_a.png`。

分割后，对于`output.png`的每个像素，其输出的R、G、B通道的值与输入图像对应的像素的值相同，输出的Alpha通道的值始终为255；对于`output_a.png`的的每个像素，其输出的R、G、B通道的值均为输入图像对应的像素的Alpha通道的值，输出的Alpha通道的值始终为255。

### 合并通道

该软件也可以将RGB通道图`input.png`和Alpha通道图`input_a.png`合并为带透明度的图片。

合并后，对于输出图像的每个像素，其输出的R、G、B通道的值与`input.png`对应的像素的值相同，输出的Alpha通道的值与`input_a.png`对应的像素的B通道的值相同。

合并通道时，只需要添加RGB通道图`input.png`到文件列表，程序会自动寻找Alpha通道图`input_a.png`，如果找不到则跳过该图片。

### 输出目录

输出目录在程序运行目录下`output`文件夹中，内含程序运行日志。

## 注意事项

### 运行环境

该软件正常运行需要[.NET 10.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/10.0) 桌面运行时，64位操作系统，推荐Windows 10及以上版本。

## 历史版本

### v1.0.0.0 <Badge type="tip" text="latest" id="latest" />

日期：2026/2/2

更新说明：

1. 实现基本功能。

<DownloadCounter fileName="AlphaPixelImage-v1.0.0.0.zip" filePath="https://file.wizardsbowl.com/utility/alpha-pixel-image/AlphaPixelImage-v1.0.0.0.zip" />
