//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Add from './Add';
import Update from './Update';
import Delete from './Delete';


export default class App extends React.Component {
constructor() {
    super();
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  }
  //not sure what component mounting means in this context
componentDidMount() {
    this.getData(this);
  }
  componentWillReceiveProps(nextProps) {
    this.getData(this);
  }


getData(ev){
    axios.get('/all')
      .then(function(response) {
        ev.setState({data: response.data});
        console.log(response.data);
      });
  }


render() {
    return (
      <div>
        //<Add selectedMonth={this.state.selectedMonth} selectedYear={this.state.selectedYear} />
        <table>
          <thead>
            <tr>
              <th></th><th className='desc-col'>Article Title</th>
              <th className='button-col'>URL</th>
              <th className='button-col'>Group</th>
              <th className='button-col'>Location</th>
              <th className='tags-col'>Default Tagging</th>
              <th className='tags-col'>Free Tagging</th>
              <th className='button-col'>authorUserID</th>
              <th className='button-col'>Update</th>
              <th className='button-col'>Delete</th>

              </tr>

          </thead>
          <tbody>
            {
              this.state.data.map(function(exp){
                return  <tr><td className='counterCell'></td>

                <td className='desc-col'>{exp.title}</td>
                <td className='button-col'>{exp.url}</td>
                <td className='button-col'>{exp.groupID}</td>
                <td className='button-col'>{exp.location}</td>
                <td className='tags-col'>{exp.defaultTagging}</td>
                <td className='tags-col'>{exp.freeTagging}</td>
                <td className='button-col'>{exp.authorUserID}</td>
                <td className='button-col'><Update record={exp} /></td>
                <td className='button-col'><Delete id={exp.recordID} record={exp} /></td>


                </tr>
              })
            }
            </tbody>
</table>
      </div>
    );
  }
}
