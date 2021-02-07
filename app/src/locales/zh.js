export default {
  welcome: {
    start: "开始聊天",
    abstract: "安全的点对点的群组聊天工具",
    help: "了解更多",
    created: "作者:",
  },
  share: {
    title: "邀请",
    link_info: "请您通过此链接邀请参加此会议的所有人：",
    button_copy: "分享",
    qr_info: "您也可以使用移动设备摄像头扫描此二维码：",
    feedback:
      '有问题请反馈到<a href="mailto:support@holtwick.de?subject=Briefing">support@holtwick.de</a>',
    message:
      "通过按下\n" +
      '          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\n' +
      '            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>\n' +
      '            <polyline points="16 6 12 2 8 6"></polyline>\n' +
      '            <line x1="12" y1="2" x2="12" y2="15"></line>\n' +
      "          </svg>\n" +
      "          来发送邀请朋友加入群聊",
  },
  settings: {
    title: "设置",
    video: "视频来源",
    audio: "音频来源",
    desktop: "共享屏幕或窗口",
    blur: "模糊背景",
    blur_info:
      "实验性的：一种智能的人工智能算法能够识别人的形状，并模糊掉其余的背景。这为您的通话增加了一些视觉隐私。但是请注意，这是一个非常耗电的功能，很可能无法在移动设备上使用！ ",
    bandwidth: "应用带宽优化 ",
    bandwidth_info:
      "实验性：使用此设置，“简报”尝试通过稀疏视频和音频数据来减少带宽。 ",
    fill: "放大视频",
    fill_info:
      "简报试图通过以使视频适合其视觉框架的方式缩放视频来尽可能地利用可用的屏幕空间。关闭后，您会看到整个视频，但周围带有边框。",
    subscribe: "订阅这个房间",
    subscribe_info:
      "实验性的：通过订阅，当其他人进入这个房间时，您会收到通知。然后，您可以一键加入对话。仅在浏览器正在运行时显示通知。 ",
    sentry: "允许错误跟踪",
    sentry_info: `当遇到编程错误或其他对改善应用程序有用的相关信息时，我们会将调试数据发送到<a href="https://sentry.io">sentry.io</a>.`,
    sentry_confirm: "感谢您允许错误跟踪。请确认立即重新加载页面。",
    background: "背景",
    persist_settings: "持续设置",
    original_background: "原始背景",
    blurred_background: "模糊背景",
    image_background: "图片背景",
    image_tip: `您可以通过在此窗口上拖动图像文件来上传自己的背景。`,
    random_image: "单击以获取另一个随机图像。",
  },
}
