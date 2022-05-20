module.exports = {
	title: '国内css平台从业者交流',
	description: 'awesome-css',
	base: '/awesome-css/',
	theme: 'reco',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	plugins: [
		'@vuepress-reco/vuepress-plugin-loading-page',
		[
			'dynamic-title',
			{
				showIcon: '/favicon.ico',
				showText: '(/≧▽≦/)咦！又好了！',
				hideIcon: '/failure.ico',
				hideText: '(●—●)喔哟，崩溃啦！',
				recoverTime: 2000,
			},
		],
		[
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ["blackCat"],
				clean: true,
				height: 260,
				modelStyle: {
					width: '100px',
					position: "fixed",
					right: "0px",
					bottom: "0px",
					opacity: "0.9",
					zIndex: 99999,
					objectFit: 'cover',
				}
			}
		],
		['@vuepress-reco/vuepress-plugin-bulletin-popover', {
			width: '300px', // 默认 260px
			title: '公告',
			body: [{
					type: 'title',
					content: '欢迎私聊vx:xiaoda0423 🎉🎉🎉',
					style: 'text-aligin: center;'
				},
				{
					text: 'text',
					content: '开始时的兴趣和后来的责任是我不断更新动力。得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。如果你觉得还不错，可以为本人贡献一杯奶茶。'
				}
				// {
				// 	type: 'image',
				// 	src: '../assets/20220112100413.jpg'
				// }
			],
			footer: [{
				type: 'button',
				text: '打赏',
				link: '/donate'
			}]
		}],
		['vuepress-plugin-code-copy', true]
	],
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		repo: 'https://github.com/webVueBlog/awesome-css',
		repoLabel: 'Github',
		editLinks: true,
		editLinkText: '编辑此页',
		lastUpdated: '上次更新',
		subSidebar: 'auto',
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: '星星♥',
				link: 'https://github.com/webVueBlog/awesome-css'
			},
			{
				text: '其它',
				items: [{
					text: '博客',
					items: [{
							text: 'Github',
							link: 'https://github.com/webVueBlog'
						},
						{
							text: '博客',
							link: 'https://1024bibi.com'
						},
					]
				}, ],
			}
		],
		sidebar: [{
				title: '欢迎学习',
				path: '/',
				collapsable: false, // 不折叠
				children: [{
					title: "学前必读",
					path: "/"
				}]
			},
			{
				title: "属性",
				path: '/handbook/transition',
				collapsable: false, // 不折叠
				children: [{
					title: "transition",
					path: "/handbook/transition"
				},{
					title: "animation",
					path: "/handbook/animation"
				}],
			},
			{
				title: "选择器",
				path: '/selector/after_before',
				collapsable: false, // 不折叠
				children: [{
					title: "::before和::after",
					path: "/selector/after_before"
				},{
					title: ":active",
					path: "/selector/active"
				}],
			},
			{
				title: "效果",
				path: '/result/pullCurtain',
				collapsable: false, // 不折叠
				children: [{
					title: "拉起窗帘",
					path: "/result/pullCurtain"
				},{
					title: "实现水平垂直居中最便捷的方法",
					path: "/result/best-way-to-center-element"
				},{
					title: "轮播图效果",
					path: "/result/css-carousel"
				},{
					title: "瀑布流效果",
					path: "/result/css-masonry-flexbox"
				}],
			},
		]
	}
}
