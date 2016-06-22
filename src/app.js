import React from 'react';
import ReactDom from 'react-dom';
import ActionCreators from './actions/ActionCreators';
import RecordStore from './stores/RecordStore';
import assign from 'object-assign';

class Record extends React.Component {

  // This is not used in ES6 classes
  // getInitialState() {
  //   console.log("Record.getInitialState()");
  //   // return getStateFromStores();
  //   return null;
  // }
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = props;
    console.log(this.state);
  }

  componentDidMount() {
    console.log("Record.componentDidMount()");
    RecordStore.addChangeListener(this._onChange);
  }

  render() {
    var that = this;
    return (
      <tr onClick={that.handleClick.bind(that,that.props)}>
        <th>{this.props.id}</th>
        <th>{this.props.team}</th>
        <th>{this.props.name}</th>
        <th>{this.props.christian_name}</th>
        <th>{this.props.birthday}</th>
      </tr>
    );
  }

  handleClick(record) {
    console.log(event);
    console.log(record);
    ActionCreators.clickRecord(record);
  }

  _onChange() {
    console.log("RecordStore._onChange");
    //this.setState(getStateFromStores());
  }

  getStateFromStores() {
    return {
      records: RecordStore.getAll()
    }
  }
}

class Editor extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state = props;
    console.log(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    var bindedFunction = this._onChange.bind(this);
    console.log("Record.componentDidMount()");
    //RecordStore.addChangeListener(this._onChange.bind(this));
    RecordStore.addChangeListener(bindedFunction);
  }

  render() {
    var handleClick = this.handleClick.bind(this, event);
    var that = this;
    console.log(that);
    return (
      <div id="editor">
        <input type="text" value={that.state.id} onChange={this.handleChange}></input><br/>
        <input type="text" value={that.state.team} onChange={this.handleChange}></input><br/>
        <input type="text" value={that.state.name} onChange={this.handleChange}></input><br/>
        <input type="text" value={that.state.christian_name} onChange={this.handleChange}></input><br/>
        <input type="text" value={that.state.birthday}></input><br/>
        <button onClick={that.handleClick.bind(that,"OK")}>OK</button>
        <button onClick={that.handleClick.bind(that,"Cancel")}>Cancel</button>
      </div>
    );
  }

  handleClick(event){
    console.log("handle click");
    console.log(event);
  }

  handleChange(event){
    console.log("handleChange");
    this.setState({value: event.target.value});
  }

  _onChange(id) {
    var that = this;
    var record = this.getStateFromStores(id);
    console.log("Editor._onChange()");
    console.log("this.setState(getStateFromStores()");
    console.log(record);
    this.setState(record);
  }

  getStateFromStores(id) {
    var foo = RecordStore.get(id);
    var record = assign({ id: id }, RecordStore.get(id));
    console.log("getStateFromStores()");
    console.log( "id=" + id );
    console.log( foo );
    console.log( record );
    return record;
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>team</th>
              <th>name</th>
              <th>christian name</th>
              <th>birthday</th>
            </tr>
          </thead>
          <tbody>
            <Record id="1" team="1" name="Bob" christian_name="bitch tits" birthday="1960/09/11" />
            <Record id="2" team="1" name="Cinema" christian_name="Big Cock" birthday="1960/03/11" />
            <Record id="3" team="1" name="Officer" christian_name="dildo" birthday="1960/03/11" />
          </tbody>
        </table>
        <Editor/>
      </div>
    );
  }
  // render(){
  //   return (
  //     <div>
  //       <Editor id="id" team="team" name="name" christian_name="christian_name" birthday="birthday"/>
  //       <Editor name="name" christian_name="christian_name" birthday="birthday"/>
  //       <Editor />
  //     </div>
  //   );
  // }
}

ReactDom.render(<App/>, document.getElementById('container'));
