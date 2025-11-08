// ==UserScript==
// @name         Chaoxing Auto Refresh
// @namespace    https://github.com/Kagari/chaoxing-auto-refresh
// @version      1.0.0
// @description  自动检测超星视频加载错误并刷新页面，避免播放中断。
// @author       Kagari
// @match        https://mooc1.chaoxing.com/*
// @icon         https://mooc1.chaoxing.com/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const PROJECT_NAME = 'Chaoxing Auto Refresh';

  function checkError() {
    const errorDiv = document.querySelector('.vjs-modal-dialog-content');
    if (
      errorDiv &&
      errorDiv.textContent.includes('视频因格式不支持或者服务器或网络的问题无法加载')
    ) {
      console.log(`[${PROJECT_NAME}] 检测到视频加载错误，3秒后自动刷新页面...`);
      setTimeout(() => location.reload(), 3000);
    }
  }

  // 初始检测
  checkError();

  // 定期检测
  setInterval(checkError, 3000);
})();
