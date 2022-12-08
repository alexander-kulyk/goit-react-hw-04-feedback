import PropTypes from 'prop-types';
import { Button, ButtonBox } from "./FeedbackOptions.styled"






export const FeedbackOptions = ({onLeaveFeedback, options}) =>{
    
    return (
        <ButtonBox> 
           {options.map(item =>(
                <Button  type="button" key={item} name={item} onClick={onLeaveFeedback}>{item}</Button>
           ))}
        </ButtonBox>
    )
}



FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}