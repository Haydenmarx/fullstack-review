import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      repos: []
    }
    this.add = this.add.bind(this);
    this.stateSetter = this.stateSetter.bind(this);
  }

  search (term) {
    // console.log(this.stateSetter);
    this.add(term, this.stateSetter);
  }

  add (userName, cb) {
    // console.log(this);
    $.ajax({
      contentType : "application/json",
      method: "POST",
      url: "/repos",
      data: JSON.stringify({ userName: userName })
    })
      .done(function(msg) {
        // console.log( "Requested: ", msg);
        // let parsed = JSON.parse(msg);
        // console.log(parsed.data, ' ', parsed.count)
        cb(msg.data, msg.count);
      });
  }

  stateSetter (data, count) {
    // console.log(this.state);
    // console.log('a: ', data);
    data = JSON.parse(data);
    this.setState({
      repos: data,
      count: count
    });
    console.log(this.state);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} count={this.state.count} />
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));