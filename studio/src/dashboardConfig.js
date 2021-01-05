export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff4a526abcb153f2254f79c',
                  title: 'Sanity Studio',
                  name: 'test-blog-studio-p9qqoikd',
                  apiId: '0dd4f84d-2a42-412c-8d1c-bbb38474c7d7'
                },
                {
                  buildHookId: '5ff4a526b9939435ea314f0e',
                  title: 'Blog Website',
                  name: 'test-blog-web-znkxnctp',
                  apiId: '8bbad2fc-83dd-4ae3-995b-f8ac4c1ed263'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrmockgt/test-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://test-blog-web-znkxnctp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
