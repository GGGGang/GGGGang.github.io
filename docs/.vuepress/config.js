module.exports = {
  title: "🐧企鹅",
  description: "Hi Friends Let Coding",
  dest: "docs/.vuepress/blog",
  base: "/docs/.vuepress/blog/",
  themeConfig: {
    nav: [
      {
        text: "Technology Stack",
        items: [
          { text: "java Basics", link: "/java/javaBasics.md" },
          { text: "java Core", link: "/java/javaBasics.md" },
        ],
      },
      {
        text: "Snippet",
        items: [
          { text: "Common Algorithm", link: "/snippet/algorithm.md" },
          { text: "Java", link: "/snippet/java.md" },
          { text: "JavaScript", link: "/snippet/javaScript.md" },
        ],
      },
      { text: "Tools", link: "https://google.com" },
    ],
    sidebar: {
      // 侧边栏在 /foo/ 上
      "/java/": ["javaBasics", "javaBasics"],
      // 侧边栏在 /bar/ 上
      "/snippet/": ["algorithm", "java", "javaScript"],
    },
  },
};
