import React from 'react'
import Bootstrap from 'bootstrap'
class Donelist extends React.Component{
    constructor(props){
        super()
    }
    render()
    {
        return(
            <>
            <h4>Done list</h4>
            {
                    this.props.doneitem.map((item=>{
                        return(
                            <>
                            {item.deleted===false?( <div>
                                <p>{item.title}</p>
                                <button className='btn btn-primary' onClick={()=>this.props.toggletodo(item.id)}>Redo</button>
                                <button className='btn btn-danger'  onClick={()=>this.props.deletedtodo(item.id)}>Delete</button>
                            </div>):(<></>)
                    }
                            </> 
        )
    }))
}

    </>
        )
    }
}

export default Donelist