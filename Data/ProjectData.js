/**
 * Project Schema
 * {
 *      id: number,
 *      Name: string,
 *      Desc: string,
 *      Data: string,
 *      Skill: string[],
 *      Thumbnail: string || null,
 *      GIF: string || null,
 *      Github: string || null,
 * }
 */

var projectData =
{
    'Projects':
    [
        {
            'id': 1,
            'Name':'Personal Website',
            'Desc': 'This is the website that you\'re viewing right now! The website is built using NextJS web framework for the front-end. And you can navigate throughout my site to checkout what I made. This is the first live website I made after practicing learning HTML,CSS, and Javascript over the 2021 Summer. I learned many things from creating practice websites using React. I hope to improve this site from what it currently is as I get better at web development.',
            'Date': 'August 2021 - Present',
            'Skills': ['React','NextJS','HTML','Sass'],
            'Thumbnail': '/project_thumbnails/WebsiteScreenShot.png',
            'GIF' : null,
            'Github' : 'https://github.com/Dradeon/BakhtiarRezaSite'
        },
        {
            'id': 2,
            'Name': 'Easybank Landing Page',
            'Desc': 'A landing page which was a challenge from frontendmentor.io. This site was built using React and TailwindCSS.',
            'Date': 'June 2022',
            'Skills':['React','TailwindCSS'],
            'Thumbnail': null,
            'GIF': null,
            'Github': null
        },
        {
            'id': 6,
            'Name': 'Room Landing Page',
            'Desc': 'A landing page which was a challange from frontendmentor.io. This site was built using NextJS, TypeScript, and TailwindCSS.',
            'Date': 'June 2022',
            'Skills': ['NextJS','TailwindCSS','TypeScript'],
            'Thumbnail': null,
            'GIF': null,
            'Github': null
        },
        {
            'id': 7,
            'Name': 'IP Tracker',
            'Desc': 'Built using NextJS, TailwindCSS, TypeScript, and LeafletJS.',
            'Date': 'June 2022',
            'Skills': [],
            'Thumbnail': null,
            'GIF': null,
            'Github': null
        },
        {
            'id': 3,
            'Name':'Course Scheduler Application',
            'Desc':'A Java Application that schedule courses for students. It stores information about courses, students, and the students\' schedule in a local database. An Admin can add a new course, student, and semester while a student can schedule for these courses, see their schedule, and courses currently available to schedule.',
            'Date':'November 2021',
            'Skills': ['Java','SQL','Objected Oriented Programming'],
            'Thumbnail':null,
            'GIF' : null,
            'Github': null
        },
        {
            'id': 4,
            'Name':'Login/Signup Form',
            'Desc':'NodeJS Application that can take a user and then log them in via session token.',
            'Date': 'January 2022',
            'Skills': ['Javascript','NodeJS','Express'],
            'Thumbnail': null,
            'GIF':'http://g.recordit.co/FQbkOtquum.gif',
            'Github':'https://github.com/Dradeon/JavascriptAuthentication'
        },
        {
            'id': 5,
            'Name':'Cryptocurrency Desktop Notifier',
            'Desc': 'A Simple Python program that fetches the latest prices on Bitcoin, Ethereum, and DogeCoin via a REST API.',
            'Date': 'January 2021',
            'Skills':['Python'],
            'Thumbnail':null,
            'GIF' : null,
            'Github':null
        }

    ]
}

export default projectData