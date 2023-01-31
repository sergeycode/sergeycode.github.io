module.exports = {
    siteMetadata: {
        description:
            'Frontend Developer from London, Ontario, Canada. React Native apps, Next.js, Custom WordPress themes.',
        locale: 'en',
        title: 'Serhii Ovcharenko. Frontend Developer',
    },
    plugins: [
        {
            resolve: '@wkocjan/gatsby-theme-intro',
            options: {
                basePath: '/',
                contentPath: 'content/',
                showThemeLogo: false,
                theme: 'dark-pink',
            },
        },
    ],
};
