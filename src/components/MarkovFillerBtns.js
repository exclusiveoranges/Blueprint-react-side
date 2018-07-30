import React, { Component } from 'react';
import { connect } from "react-redux"
import '../App.css';
import Adapter from '../Adapter'
import { setMarkovInput } from '../actions/index'



class MarkovFillerBtns extends Component {

  handleClick = (id) => {
      Adapter.getFillerText(id)
        .then( poemObj => {
           this.props.setMarkovInput(poemObj.body)
        })
  }


  render() {

      return (
      <div>
          Load Text From:
          <button onClick={() => {this.handleClick(36)}}>Grimm Bros</button>
          <button onClick={() => {this.handleClick(38)}}>Emily Dickinson</button>
          <button onClick={() => {this.handleClick(32)}}>Random Poems</button>
      </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        setMarkovInput: (poemText) => {
          dispatch(setMarkovInput(poemText))
      }
    }
  }

  export default connect(null, mapDispatchToProps)(MarkovFillerBtns)
