module.exports = {
    siteMetadata: {
        title: `Grace Lu`,
        author: `Grace Lu`,
        description: `Grace's personal site for Gatsby 101 at CodeLand`,
        siteUrl: `https://gl-workshop-101-site.netlify.app/`,
        social: [
            {
                name: `LinkedIn`,
                url: `https://www.linkedin.com/in/grace-lu-3a939586/`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/gracewylu`,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true,
            },
        },
    ],
};
