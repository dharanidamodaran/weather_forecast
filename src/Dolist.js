import React from "react";
import bootstrap from 'bootstrap'
class Dolist extends React.Component{
    constructor(props)
    {
        super()
        
    }
    render()
    {
     console.log(this.props.doitem)
           return(
            <>
            <h4>Dolist</h4>
            {
                this.props.doitem.map((item=>{
                    return(
                        <>
                        {item.deleted===false?(<div>
                            <ul type="none"><li>
                                {item.title}
                                <div className="btn-grp">
                                <button className="btn btn-primary" onClick={()=>this.props.toggletodo(item.id)}>Undo</button>
                                <button className="btn btn-danger" onClick={()=>this.props.deletedtodo(item.id)}>Delete</button>
                                </div></li></ul>
                        </div>):(<></>)}
                        </>
                    )
                }))
            }
            
            
            
            </>
           )
    }
}


export default Dolist