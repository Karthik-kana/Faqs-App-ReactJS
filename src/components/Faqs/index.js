// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="unordered-list">
            {faqsList.map(eachItem => (
              <FaqItem faqsDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
