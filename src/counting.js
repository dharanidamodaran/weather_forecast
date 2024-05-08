import React from 'react'


class Counting extends React.Component{
    constructor(){
    super()
    this.state={counter:0,name:"dharani"}
    this.inc=this.inc.bind(this)
    }


inc=()=>
{
    if(this.state.counter<10)
    this.setState({counter:this.state.counter+1})
    console.log(this.state.counter)
}

dec=()=>
{
    if(this.state.counter>0)
    {
        this.setState({counter:this.state.counter-1})
        console.log(this.state.counter)
    }
}
res=()=>
{
    this.setState({counter:0})
}
    render()
    {
    return(
        <>
        <button onClick={this.inc}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.dec}>-</button>
        <button onClick={this.res}>RESET</button>
        </>
    )
    }
} 

export default Counting