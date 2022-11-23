/**
 * Project Schema
 * {
 *      id: number,
 *      Name: string,
 *      Desc: string,
 *      Date: string,
 *      Skills: string[],
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
            'ShortDesc': 'My Personal Website built using NextJS and SASS.',
            'Desc': 'This is the website that you\'re viewing right now! The website is built using NextJS web framework for the front-end. And you can navigate throughout my site to checkout what I made. This is the first live website I made after practicing learning HTML,CSS, and Javascript over the 2021 Summer. I learned many things from creating practice websites using React. I hope to improve this site from what it currently is as I get better at web development.',
            'Date': 'August 2021 - Present',
            'Skills': ['React','NextJS','HTML','Sass'],
            'Thumbnail': '/project_thumbnails/PersonalPortfolio.png',
            'GIF' : null,
            'Github' : 'https://github.com/Dradeon/BakhtiarRezaSite',
            'LivePreview' : 'https://bakhtiar-reza-site.vercel.app/'
        },
        {
            'id': 2,
            'Name': 'Easybank Landing Page',
            'ShortDesc': 'This site was built using React and TailwindCSS.',
            'Desc': 'A landing page which was a challenge from frontendmentor.io. This site was built using React and TailwindCSS.',
            'Date': 'June 2022',
            'Skills':['React','TailwindCSS'],
            'Thumbnail': '/project_thumbnails/EasybankLandingPage.png',
            'GIF': null,
            'Github': 'https://github.com/Dradeon/Easybank-Landing-Page',
            'LivePreview': 'https://easybankhome.vercel.app/'
        },
        {
            'id': 3,
            'Name': 'Room Landing Page',
            'ShortDesc': 'This site was built using NextJS, TypeScript, and TailwindCSS.',
            'Desc': 'A landing page which was a challange from frontendmentor.io. This site was built using NextJS, TypeScript, and TailwindCSS.',
            'Date': 'June 2022',
            'Skills': ['NextJS','TailwindCSS','TypeScript'],
            'Thumbnail': '/project_thumbnails/RoomLandingPage.png',
            'GIF': null,
            'Github': 'https://github.com/Dradeon/RoomLandingPage',
            'LivePreview': 'https://room-landing-page-seven.vercel.app/'
        },
        {
            'id': 4,
            'Name': 'IP Tracker',
            'ShortDesc': 'Built using NextJS, TailwindCSS, TypeScript, and LeafletJS.',
            'Desc': 'Built using NextJS, TailwindCSS, TypeScript, and LeafletJS.',
            'Date': 'June 2022',
            'Skills': [],
            'Thumbnail': '/project_thumbnails/IPTracker.png',
            'GIF': null,
            'Github': 'https://github.com/Dradeon/IP-Address-Tracker'
        },
        {
            'id': 5,
            'Name':'Course Scheduler Application',
            'ShortDesc':'A Java Application that schedule courses for students.',
            'Desc':'A Java Application that schedule courses for students. It stores information about courses, students, and the students\' schedule in a local database. An Admin can add a new course, student, and semester while a student can schedule for these courses, see their schedule, and courses currently available to schedule.',
            'Date':'November 2021',
            'Skills': ['Java','SQL','Objected Oriented Programming'],
            'Thumbnail':null,
            'GIF' : null,
            'Github': null
        },
        {
            'id': 6,
            'Name':'Login/Signup Form',
            'ShortDesc': 'NodeJS application made with NodeJS, Bcrypt, and JSON Web Token.',
            'Desc':'NodeJS Application that can take a user and then log them in via session token.',
            'Date': 'January 2022',
            'Skills': ['Javascript','NodeJS','Express'],
            'Thumbnail': null,
            'GIF':'http://g.recordit.co/FQbkOtquum.gif',
            'Github':'https://github.com/Dradeon/JavascriptAuthentication'
        },
        {
            'id': 7,
            'Name':'Cryptocurrency Desktop Notifier',
            'ShortDesc': 'Built using python',
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