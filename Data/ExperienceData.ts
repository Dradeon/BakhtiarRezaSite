type Experience = {
    Company: string,
    Position: string
    Date: string,
    Tasks: Array<string>


}

const experienceData: Array<Experience> = [
    {
        Company: "Toast Inc",
        Position: "Software Engineer Intern",
        "Date": "June 2023 - August 2023",
        "Tasks": [
            'Participate in architecting a new feature for Mobile Order and Pay named Menu By Service Area.',
            'Create new features for Mobile Order and Pay implementing a Guest Feedback Module using React, Tailwind, and React Query.',
            'Optimized the backend for Mobile Order and Pay by stopping excessive calls to other APIs, reducing latency times by 330ms.'
        ]
    },
    {
        "Company": "Federal Reserve Bank of Philadelphia",
        "Position": "Business Technology  Solutions Intern",
        "Date" : "May 2022 - August 2022",
        "Tasks": [
            'Develop Web Applications as front-end solutions for our supervision and regulation department using React and Material UI.'
        ],
    }
]

export default experienceData;