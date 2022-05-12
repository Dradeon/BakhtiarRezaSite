import Image from 'next/image'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import styles from '../../styles/Components/VerticalTile.module.scss'

let imageData = {}

const VerticalTile = ({Title,Desc,ImgData,NoOfStars}) => {
    console.log(NoOfStars)
    let stars = []
    for (let i = 0; i < NoOfStars; i++){
        stars.push(<FaStar className={styles.star} key = {i}/>)
    }
    console.log(stars)


    return (
        <div className={styles.TileContainer}>
            <div className = {styles.ImageContainer}>
                <div className = {styles.ImageWrapper}>
                    <Image src={imageData[ImgData]} width = {200} height = {200}/>
                </div>
            </div>
            <div className={styles.Headline}>
                <div className={styles.TitleandDescriptor}>
                    <h1>{Title}</h1>
                    <p>{Desc}</p>
                </div>
                <hr/>
                <div className={styles.Subline}>
                    <div className={styles.SkillType}>
                        <p>Proficiency: </p>
                        {stars.map(star => (
                            star
                            ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default VerticalTile