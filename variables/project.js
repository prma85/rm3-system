const risks = require('./riskMatrix');

const projectData = (project) => ({
  title: project[1],
  pm: project[2],
  category: 'software',
  uuid: 'MS_PROJECT_05151-21051581-105156-02',
  budget: '$500,000',
  deadline: 'Jul 1, 2021',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum egestas libero pretium feugiat. Pellentesque non tempus dolor, id posuere lacus. Fusce egestas urna orci, sed ornare ante rhoncus in. Nulla tristique non arcu vel tempor. Ut dictum nulla eros, vitae suscipit dolor ornare ut. Nam dictum ipsum ac nibh tempor, sed imperdiet sem porttitor. Phasellus mattis purus velit, nec lobortis dolor rhoncus sit amet. Integer porttitor dictum enim, eget consectetur massa dapibus eget. Suspendisse diam augue, vestibulum hendrerit mattis sed, lacinia quis risus. Nam suscipit ex vitae tellus convallis, et congue odio pellentesque. Nullam a mauris quis mauris mattis convallis.',
  tags: [
    { id: 'software', text: 'software' },
    { id: 'react', text: 'react' },
    { id: 'finance', text: 'finance' },
    { id: 'external', text: 'external' },
    { id: 'audit', text: 'audit' },
  ],
  team: {
    devs: [
      {
        name: 'Vader, D.',
        role: 'Senior Back End',
        experience: ['Java', 'MySQL', 'Azure'],
      },
      {
        name: 'Yoda',
        role: 'Teach Lead',
        experience: ['Java', 'React', 'MySQL', 'Azure'],
      },
      {
        name: 'Luke',
        role: 'Junior Frontend',
        experience: ['Javascript', 'React'],
      },
    ],
    qa: [
      {
        name: 'Leia',
        role: 'Junior QA',
        experience: ['Javascript', 'React', 'Automation', 'Java'],
      },
    ],
    others: [
      {
        name: 'Lando',
        role: 'Stakeholder',
        experience: ['Pilot', 'Languages'],
      },
      {
        name: 'Solo',
        role: 'Stakeholder',
        experience: ['Pilot', 'Languages'],
      },
    ],
  },
  complexity: [
    { FQ: 3, W: 1 },
    { FQ: 3, W: 1 },
    { FQ: 3, W: 1 },
    { FQ: 2, W: 2 },
    { FQ: 2, W: 2 },
    { FQ: 2, W: 3 },
    { FQ: 1, W: 3 },
    { FQ: 1, W: 4 },
    { FQ: 1, W: 4 },
    { FQ: 1, W: 5 },
  ],
  risks,
  lessonsLearned: [
    {
      id: 1,
      title: 'Lorem Ipsum',
      otherProject: true,
      date: 'Jul 1, 2021 17:00:00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum egestas libero pretium feugiat. Pellentesque non tempus dolor, id posuere lacus. Fusce egestas urna orci, sed ornare ante rhoncus in. Nulla tristique non arcu vel tempor. Ut dictum nulla eros, vitae suscipit dolor ornare ut. Nam dictum ipsum ac nibh tempor, sed imperdiet sem porttitor. Phasellus mattis purus velit, nec lobortis dolor rhoncus sit amet. Integer porttitor dictum enim, eget consectetur massa dapibus eget. Suspendisse diam augue, vestibulum hendrerit mattis sed, lacinia quis risus. Nam suscipit ex vitae tellus convallis, et congue odio pellentesque. Nullam a mauris quis mauris mattis convallis.',
      actions: ['n/a'],
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      otherProject: true,
      date: 'Jul 1, 2021 17:00:00',
      description:
        'Donec tincidunt libero quam, vel iaculis lectus imperdiet ut. Duis volutpat volutpat erat id vehicula. Praesent vel vehicula dui, nec elementum dui. Duis porta orci aliquet ornare aliquam. Sed nec feugiat risus, in placerat ante. Nulla porta porttitor massa nec porttitor. Morbi dictum, elit eget malesuada elementum, elit est posuere tortor, vel venenatis neque arcu a nunc. Cras vitae purus nec eros pretium pellentesque.',
      actions: ['invest in react trainning', 'have a dedicated devops persona'],
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      otherProject: false,
      date: 'Jul 1, 2021 17:00:00',
      description:
        'Curabitur ac ultrices justo, luctus egestas nisl. Aliquam at placerat neque. Fusce vitae nunc a sem finibus tempor eu quis massa. Etiam consectetur ultrices enim ut ornare. Proin volutpat dolor metus, ac lobortis orci interdum sed. Praesent velit ligula, ornare eu ornare eu, congue at ligula. Ut vulputate ipsum sed magna sagittis, vitae congue elit dapibus.',
      actions: ['buy new computers', 'define contract restrictions', 'evaluate inflation risk'],
    },
  ],
});

module.exports = projectData;
