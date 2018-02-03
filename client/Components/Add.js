//client/components/Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
        title: '',
        url: '',
        group: '',
        location: '',
        defaultTagging: '',
        freeTagging: '',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewRecord = this.insertNewRecord.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        title: '',
        url: '',
        group: '',
        location: '',
        defaultTagging: '',
        freeTagging: '',
        messageFromServer: ''
      });
    }
componentDidMount() {
    if(this.props.selectedGroup == 'All'){
      this.setState({
        group: 'Group 1'
      });
    }else{
      this.setState({
        group: this.props.selectedGroup
      });
    }
this.setState({
        year: this.props.selectedYear
      });
    }
componentWillReceiveProps(nextProps){
      if(this.props.selectedGroup == 'All'){
        this.setState({
          group: 'Group 1'
        });
      }else{
        this.setState({
          group: this.props.selectedGroup
        });
      }
this.setState({
        year:nextProps.selectedYear
      })
    }
handleSelectChange(e) {
      if (e.target.name == 'group') {
        this.setState({
          group: e.target.value
        });
      }
      if (e.target.name == 'year') {
        this.setState({
          year: e.target.value
        });
      }
    }
onClick(e) {
      this.insertNewRecord(this);
    }
insertNewRecord(e) {
      axios.post('/insert',
        querystring.stringify({

          // authorUserID : e.state.authorUserID,
          // groupID : e.state.group,
          //
          // title: e.state.title,
          // url: e.state.url,
          // location: e.state.location,
          // freeTagging: e.state.freeTagging,
          //
          //
          // defaultTagging :[true, true, true, true, true],
          //
          authorUserID : 12,
          groupID : "34",
          title: "56",
          url: "78",
          location: "90",
          freeTagging: "11",
          defaultTagging :[1, 1, 1, 1, 1],


        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }
handleTextChange(e) {
      if (e.target.name == "title") {
        this.setState({
          title: e.target.value
        });
      }
      if (e.target.name == "url") {
        this.setState({
          url: e.target.value
        });
      }
      if (e.target.name == "location") {
        this.setState({
          location: e.target.value
        });
      }
      if (e.target.name == "freeTagging") {
        this.setState({
          freeTagging: e.target.value
        });
      }

}
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Record"
       className="Modal">
//<Link to={{pathname: '/', search: '?group='+this.state.group+'&year='+this.state.year }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="title">title:</label><input type="text" id="title" name="title" value={this.state.title} onChange={this.handleTextChange}></input>
       <label for="url">URL:</label><input type="text" id="url" name="url" value={this.state.url} onChange={this.handleTextChange}></input>
       <label for="url">Location:</label><input type="text" id="location" name="location" value={this.state.location} onChange={this.handleTextChange}></input>


       <label for="group">Group:</label><select id="group" name="group" value={this.state.group} onChange={this.handleSelectChange}>


            //want to dynamically loop to show groups that the user is in, once User schema is created,
            //will has a array of groups

            <option value="Group 1" id="group1">Group 1</option>
            <option value="Group 2" id="group2">Group 2</option>
            <option value="Group 3" id="group3">Group 3</option>

         </select>
       // <label for="year">Year:</label><select id="year" name="year" value={this.state.year} onChange={this.handleSelectChange}>
       //      <option value="2015" id="17">2015</option>
       //      <option value="2016" id="17">2016</option>
       //      <option value="2017" id="17">2017</option>
       //      <option value="2018" id="18">2018</option>
       //      <option value="2019" id="19">2019</option>
       //      <option value="2020" id="20">2020</option>
       //   </select>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Record</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Record"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>


        // <Link to={{pathname: '/', search: '?group='+this.state.group}} style={{ textDecoration: 'none' }}>
        //  <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        // </Link>


       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
