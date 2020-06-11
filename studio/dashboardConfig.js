export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ee28dcde5a2ba01bfda8d6e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hw5xyjhp',
                  apiId: 'b7f64fb9-7252-461c-86e3-bf8f6d355060'
                },
                {
                  buildHookId: '5ee28dcd42116e5be1a5d290',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c1fntnvx',
                  apiId: '38058946-fb60-4424-bafe-eb6c8ac04bbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scasab/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c1fntnvx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
