module.exports = {
    siteMetadata: {
      description: "Web Developer from London, Ontario, Canada. React Native apps, Custom WordPress themes.",
      locale: "en",
      title: "Sergey Ovcharenko. Web Developer",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: "dark-pink",
        },
      },
    ],
  }