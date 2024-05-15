type Experience = {
    Company: string,
    Position: string
    Date: string,
    Tasks: Array<string>


}

const experienceData: Array<Experience> = [
    {
        Company:"Pennsylvania State University: College of IST",
        Position:"Learning Assistant",
        Date:"January 2024 - May 2024",
        Tasks:[
            'Meet with the instructor in and outside of class, as determined by the instructor.',
            'Communicate effectively with supervising instructor, any additional teaching staff, and enrolled students.',
            'Prepare for specific teaching and learning related assignments.'
        ]
    },
    {
        Company:"Pennsylvania State University: Residence Life",
        Position:"Residential Assistant",
        Date:"August 2023 - May 2024",
        Tasks:[
            'Serve as a resource for students living in the residence halls, enforcing rules and regulations from the Housing Office and link between administrator and students.',
            'Support students with any issues they might have (i.e academic, roommate, etc) and provide solutions or references.'
        ]
    },
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