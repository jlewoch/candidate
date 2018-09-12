import React, { Component } from 'react';
class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false
        }
    }
    toggle = () =>{
        this.setState({show: !this.state.show});
    }
    componentDidMount() {
        this.setState({show: this.props.question.notesRequired});
    }
    
    render() {
        const {onChange, question,index} = this.props
        return (
            <div>
            <button className='button' onClick={this.toggle}>{ !this.state.show ? 'Add Note' : 'Remove Note'}</button>
            <textarea
              onChange={onChange}
              className={`textarea ${this.state.show || question.notes ? "show" : "hide"}`}
              name="notes"
              id={index}
              col="30"
              rows="3"
              value={question.notes ? question.notes : ''}
            />
            </div>
        );
    }
}

export default TextArea;