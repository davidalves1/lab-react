import React, { Component } from 'react'

class Redirect extends Component {
  componentDidMount() {
    if (window.confirm(`Você realmente quer ir para ${this.props.to}?`)) {
      window.location.href = this.props.to
    }
    this.props.afterRedirect()
  }

  render() {
    return <span>Redirecting to {this.props.to}....</span>
  }
}

class App extends Component {
  state = { redirectTo: null }

  redirectTo = url => this.setState({ redirectTo: url })

  reset = () => this.setState({ redirectTo: null })

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} afterRedirect={this.reset} />
    }
    return (
      <div>
        <button type="button" onClick={() => this.redirectTo('http://google.com')}>
          Redirecione-me para o Google
        </button>
        {' '}
        <button type="button" onClick={() => this.redirectTo('http://bing.com')}>
          Redirecione-me para o Bing
        </button>
      </div>
    )
  }
}

export default App
