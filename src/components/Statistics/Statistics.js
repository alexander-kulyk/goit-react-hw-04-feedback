import PropTypes from 'prop-types';
import { ContainerStat, ItemStat, Positive, Total } from "./Statistics.styled"






export const Statistics = ({good, neutral, bad, totalFeedback, positivePercentage}) => {

    const total = totalFeedback();
    const positive = positivePercentage()

    const calcPositiveFeedback = () =>{
        return positive > 0 
         ? Math.round(positive)
         : 0
    }

   
    return(
        <ContainerStat>
            <ItemStat style={{backgroundColor: 'green'}}>Good: {good}</ItemStat>
            <ItemStat style={{backgroundColor: 'gray'}}>Neutral: {neutral}</ItemStat>
            <ItemStat style={{backgroundColor: 'red'}}>Bad: {bad}</ItemStat>
            <Total style={{backgroundColor: 'yellow'}}> Total: {total}</Total>
            <Positive style={{backgroundColor: 'green'}}>Positive feedback: {calcPositiveFeedback()} %</Positive>
        </ContainerStat>
    )
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}