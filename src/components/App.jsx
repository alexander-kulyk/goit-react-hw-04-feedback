// import { Box } from "./Box/Box";
import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Container } from "components/Box/Box.styled";
import { theme } from "theme/theme";



export const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const handleIncrement = e =>{

    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        return setGood (ps => ps +1)

      case 'neutral':
        return setNeutral (ps => ps +1)

      case 'bad':
        return setBad (ps => ps +1)
    
      default:
        break;
    };
  }

  const  countTotalFeedback = () =>{
    const totalFeedback = good + neutral + bad
    return totalFeedback
  }

  const  countPositiveFeedbackPercentage = () =>{
    
    const totalFeedback = good + neutral + bad
    const positivFeedback = good / totalFeedback * 100
    return positivFeedback
  }

  const keys = ['good','neutral', 'bad']
  const total = good + neutral + bad

  return (
    <ThemeProvider theme = {theme}>
      <Container
        display="flex"
        flexDirection='column'
        justifyContent='center'
        alignItems='center'

        pt={5} 
      >
      <Section title = 'Please leave feedback'>
        <FeedbackOptions 
        options = {keys}  
        onLeaveFeedback = {handleIncrement} 
        />
      </Section>
      
      {total === 0 
        ? <Notification message="There is no feedback"/>
        : <Section title = 'Statiatic'>
        <Statistics 
            good = {good}
            neutral = {neutral}
            bad = {bad}
            totalFeedback={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
            />
        </Section>
      }
    </Container>
    </ThemeProvider>
  );



  




}



// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleIncrement = e =>{

//     const { name } = e.currentTarget
//     this.setState(prevState => {

//         return {
//             [name]: prevState[name] + 1
//         }
       
//     });
//   }

//   countTotalFeedback = () =>{
//     const {good, neutral, bad} = this.state
//     const totalFeedback = good + neutral + bad
//     return totalFeedback
//   }

//   countPositiveFeedbackPercentage = () =>{
//     const {good, neutral, bad} = this.state
//     const totalFeedback = good + neutral + bad
//     const positivFeedback = good / totalFeedback * 100
//     return positivFeedback
//   }
  


//   render(){
//     const {good, neutral, bad} = this.state
//     const total = good + neutral + bad
//     return (
//           <ThemeProvider theme = {theme}>
//             <Container
//               display="flex"
//               flexDirection='column'
//               justifyContent='center'
//               alignItems='center'

//               pt={5} 
//             >
//             <Section title = 'Please leave feedback'>
//               <FeedbackOptions 
//               options = {Object.keys(this.state)}  
//               onLeaveFeedback = {this.handleIncrement} 
//               />
//             </Section>
            
//             {total === 0 
//               ? <Notification message="There is no feedback"/>
//               : <Section title = 'Statiatic'>
//               <Statistics 
//                   good = {good}
//                   neutral = {neutral}
//                   bad = {bad}
//                   totalFeedback={this.countTotalFeedback}
//                   positivePercentage={this.countPositiveFeedbackPercentage}
//                   />
//               </Section>
//             }
//           </Container>
//           </ThemeProvider>
//         );
//   }
// }




// export const App = () => {
//   return (
//     <>
//       <Feedback/>
//       <Statistics/>
//     </>
//   );
// };
