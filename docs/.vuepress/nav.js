module.exports = [
    {
        text: '前端指南', link: '/guide/'
    },
    {
        text: '面试宝典',
		items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            //这里走一层路由直接到sidebar
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '博客',
		items: [
            {text: 'Github', link: 'http://www.github.com/Him-wen'},
            //这里走一层路由直接到sidebar
            {text: 'yuque', link: 'http://www.github.com/Him-wen'},
        ]
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]
