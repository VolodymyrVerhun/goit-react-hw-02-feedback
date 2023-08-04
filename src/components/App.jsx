import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = (event) => {
  this.setState(prevState => {
    return {
      [event.target.name]: prevState[event.target.name] + 1,
    }
    
})
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if(!this.state.good) {
      return "0"
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
  }

  
  render() {
    const {good, neutral, bad} = this.state;
    return (
        <div>
              <Section>
              
                <FeedbackOptions 
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback}
                />
              </Section>
              
              {!this.countTotalFeedback() ? (<Notification message="There is no feedback" />) :
              (
              <Section title="Statistics">
                  <Statistics 
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}/>
              </Section>
              )}
        </div>
  )}
};
