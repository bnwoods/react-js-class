import React from 'react';
import Welcome from './Welcome';
import Main from './Main'
import LoginForm from './LoginForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "First",
      last: "Last",
      microsoftvalue: 100,
      twittervalue: 200,
      amazonvalue: 300,
      values: [
        {"company": "Microsoft", "value": 100},
        {"company": "Twitter", "value": 200},
        {"company": "Amazon", "value": 300},
        {"company": "Fake", "value": 400}
      ],
      email: "",
      password: ""
    }
  }
  increaseValues() {
    this.setState((prevState) => ({
      microsoftvalue: prevState.microsoftvalue + 1,
      twittervalue: prevState.twittervalue + 1,
      amazonvalue: prevState.amazonvalue + 1
    }))
  }

  decreaseValues() {
    this.setState((prevState) => ({
      microsoftvalue: prevState.microsoftvalue - 1,
      twittervalue: prevState.twittervalue - 1,
      amazonvalue: prevState.amazonvalue - 1
    }))
  }

  jumbleValues() {
    this.setState((prevState) => ({
      microsoftvalue: prevState.amazonvalue,
      twittervalue: prevState.microsoftvalue,
      amazonvalue: prevState.twittervalue
    }))
  }

  increaseValues2() {
    this.setState((prevState) => ({
      values: [
        {"company": "Microsoft", "value": prevState.values[0].value + 1},
        {"company": "Twitter", "value": prevState.values[1].value + 1},
        {"company": "Amazon", "value": prevState.values[2].value + 1},
        {"company": "Fake", "value": prevState.values[3].value + 1}
      ]
    }))
  }

  decreaseValues2() {
    this.setState((prevState) => ({
      values: [
        {"company": "Microsoft", "value": prevState.values[0].value - 1},
        {"company": "Twitter", "value": prevState.values[1].value - 1},
        {"company": "Amazon", "value": prevState.values[2].value - 1},
        {"company": "Fake", "value": prevState.values[3].value - 1}
      ]
    }))
  }

  jumbleValues2() {
    this.setState((prevState) => ({
      values: [
        {"company": "Microsoft", "value": prevState.values[3].value},
        {"company": "Twitter", "value": prevState.values[2].value},
        {"company": "Amazon", "value": prevState.values[1].value},
        {"company": "Fake", "value": prevState.values[0].value}
      ]
    }))
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.first)
    console.log(this.state.last)
  }

  handleFormUpdate(values) {
    this.setState({
      email: values.email,
      password: values.password
    })
  }

  render() {
    return (
      <div>
        <h1>Stock Data App</h1>
        <Welcome 
          first={this.state.first}
          last={this.state.last}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>First Name:
            <input type="text" name="first" value={this.state.first} onChange={this.handleChange.bind(this)}/>
          </label>
          <label>Last Name:
            <input type="text" name="last" value={this.state.last} onChange={this.handleChange.bind(this)}/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <Main 
          values={this.state.values}
          microsoftvalue={this.state.microsoftvalue}
          twittervalue={this.state.twittervalue}
          amazonvalue={this.state.amazonvalue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
          increase2={this.increaseValues2.bind(this)}
          decrease2={this.decreaseValues2.bind(this)}
          jumble2={this.jumbleValues2.bind(this)}/>
          <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)}/>
      </div>

    )
  }
}

export default App;
