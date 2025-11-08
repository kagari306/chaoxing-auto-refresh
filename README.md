# Chaoxing Auto Refresh

📺 **自动检测超星视频加载错误并刷新页面**

当你在使用 [超星学习通](https://mooc1.chaoxing.com/) 观看视频时，如果遇到提示：

> 视频因格式不支持或者服务器或网络的问题无法加载。

这个脚本会在检测到该提示后自动刷新当前页面，避免卡死或中断播放。

---

## 🚀 功能特性

- 🔍 自动检测视频播放错误提示  
- ♻️ 自动刷新页面修复播放问题  
- 🧩 仅在 `https://mooc1.chaoxing.com/` 上生效  
- 🪶 纯原生 JS，无需依赖  

---

## 📦 安装方法

1. 安装油猴/脚本猫扩展（任选其一）：
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [脚本猫 ScriptCat](https://scriptcat.org/)

2. 安装脚本：

   - [点击此处安装最新版本](https://github.com/Kagari/chaoxing-auto-refresh/raw/main/chaoxing-auto-refresh.user.js)

---

## ⚙️ 工作原理

脚本每隔 3 秒检查一次页面内是否出现错误提示：

```html
<div class="vjs-modal-dialog-content" role="document">
  视频因格式不支持或者服务器或网络的问题无法加载。
</div>
```

若检测到该文本，则自动刷新页面。

🧠 开发说明
项目文件结构：
```
chaoxing-auto-refresh/
├── README.md
├── LICENSE
├── .gitignore
└── chaoxing-auto-refresh.user.js
```
开发者可通过修改 .user.js 文件定制逻辑，如增加刷新次数限制或提示弹窗。

📄 License

本项目基于 MIT License 开源。

Copyright © 2025 Kagari
