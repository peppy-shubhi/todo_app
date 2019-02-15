import React, {Component} from 'react'
class Add extends Component{
    state={
        content:''
    }
    handle_change=(e)=>{
        this.setState(
            {
                content:e.target.value
            }
        )
    }
    handle_submit=(e)=>{
        e.preventDefault();
        this.props.add(this.state);
        this.setState(
            {
                content:''
            }
        )
    }
    render(){
    return(
        <form onSubmit={this.handle_submit}>
            <label>Add todos:</label>
            <input type="text" onChange={this.handle_change} value={this.state.content}/>
        </form>


    )
    }
}
export default Add