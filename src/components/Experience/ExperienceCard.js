import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'
import upwork from '../../assets/svg/experience/upwork.svg'
import sparkfish from '../../assets/svg/experience/Sparkfish.svg'
import austin from '../../assets/svg/experience/Austin-Logo.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, workdetails}) {

    const { theme } = useContext(ThemeContext);
    
    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    // This splits your string into an array of lines
    const workdetailsLines = workdetails ? workdetails.split('\n') : [];

    // Define the image variable here
    let image;
    switch (id) { // Assuming you want to switch based on id
        case 1:
            image = <img src={theme.type === 'light' ? upwork : upwork} alt="" />;
            break;
        case 3:
            image = <img src={theme.type === 'light' ? sparkfish : sparkfish} alt="" />;
            break;
        case 4:
            image = <img src={theme.type === 'light' ? austin : austin} alt="" />;
            break;
        default:
            image = <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />;
            break;
    }

    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                   {image}                   
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    {/* <h6 style={{color: theme.tertiary}}>{workdetails}</h6> */}
                    {workdetailsLines.map((line, index) => (
                        <p key={index} style={{color: theme.tertiary}}>{line}</p>
                    ))}
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
