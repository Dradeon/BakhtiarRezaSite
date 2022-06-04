import experienceData from "../Data/ExperienceData"
import {GiCircle} from 'react-icons/gi'

const experience = experienceData.Experience;

const ExpTimeline = () => {
  return (
    <div className="JobTimeline">
      {experience.length != 0 ? experience.map(job => {
        return <div className="JobCard" key = {job.title}>
          <div className="JobCard-Content">
            <div className="JobCard-Content-TitleDate">
              <h3 className="JobCard-Content-TitleDate-Title">{job.title}</h3>
              <h4 className="JobCard-Content-TitleDate-Date">{job.date}</h4>
            </div>
            <p className="JobCard-Content-Desc">{job.desc}</p>
          </div>
          <hr></hr>
        </div>
      }) : ""}
    </div>
  )
}

export default ExpTimeline