// Write your code here.
import {Component} from 'react'
import './index.css'

const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minus = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isPlusClick: false}

  changeState = () => {
    const {isPlusClick} = this.state
    this.setState({isPlusClick: !isPlusClick})
  }

  renderImage = () => {
    const {isPlusClick} = this.state
    const image = isPlusClick ? minus : plus
    const altText = isPlusClick ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.changeState}>
        <img src={image} alt={altText} className="icon" />
      </button>
    )
  }

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isPlusClick} = this.state
    if (isPlusClick) {
      return (
        <div>
          <hr className="line" />
          <p className="text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
