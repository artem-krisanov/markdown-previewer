import React from 'react';
import './App.sass';
import showdown from 'showdown';

const Header = () => (
  <header className='jumbotron'>
    <h1 className='text-center'>
      <img src='http://coenraets.org/blog/wp-content/uploads/2014/12/react-logo.png' width='100'/>
      Markdown Previewer
    </h1>
    <hr />
  </header>
);

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      converter: new showdown.Converter(),
      value: `Hello, World!\n===\n---\n# This is an h1\n## This is an h2\n### This is an h3\n#### This is an h4\n##### This is an h5\n###### This is an h6`,
    };
  }

  createMarkup() {
    return {__html: this.state.converter.makeHtml(this.state.value) };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (<div className='row'>
              <div className='col-sm-6'>
                <textarea
                  type='text'
                  defaultValue={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  id='markdown'
                  className='col-xs-10 col-xs-offset-1 full-height'></textarea>
              </div>
              <div className='col-sm-6'>
                <div id='htmlArea'
                     className='col-xs-10 col-xs-offset-1 full-height'>
                  <div dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
              </div>
            </div>);
  }
}

const App = () => (
  <div className='container-fluid'>
    <Header/>
    <Markdown/>
  </div>
);

document.write('<div id="app"></div>');


export default App;
