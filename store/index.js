export const strict = false

export const state = () => ({
  events: [
    {
      slug: 'example-event',
      name: 'Event Name',
      coc: 'https://hackcodeofconduct.com',
      social: {
        text: '@_phzn',
        url: 'https://twitter.com/_phzn'
      },
      rooms: [
        { slug: 'built', name: 'What did you build this week?' },
        { slug: 'work', name: 'Where do you work?' },
        { slug: 'hobby', name: 'What are your hobbies?' }
      ]
    }
  ]
})
