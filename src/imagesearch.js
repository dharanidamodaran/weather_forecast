// import React from "react";
// import axios from "axios";

// class ImageSearch extends React.Component{
//     constructor(props)
//     {
//         super()
//         this.state={image:[],text:""}
//     }
//     /*componentDidMount(){
//         //const url="https://api.unsplash.com/search/collections?client_id=DTbx5Cs0t9_pWr07JM_nPY-_lUcNoKZe-OlAWXp2uEY&page=1&query=office"
//         const url="https://api.unsplash.com/search/photos?client_id=DTbx5Cs0t9_pWr07JM_nPY-_lUcNoKZe-OlAWXp2uEY&page=1&query=office"
//         axios.get(url)
//         .then((res)=>this.setState({image:res.data.results}))
//         .catch((err)=>console.log.apply(err))
        
//     }*/
//     getImage=(query)=>{
//         const url="https://api.unsplash.com/search/photos?client_id=DTbx5Cs0t9_pWr07JM_nPY-_lUcNoKZe-OlAWXp2uEY&page=1&query="+query
//         axios.get(url)
//         .then((res)=>this.setState({image:res.data.results}))
//         .catch((err)=>console.log(err))
//     }
//     handleSearch=(event)=>{
//         this.setState({text:event.target.value})
//         console.log(this.state.text)
//     }
//     handlesubmit=(event)=>{
//         event.preventDefault();
//         this.getImage(this.state.text)
//     }
//   /*  render()
//     {
//         return(
//             <>
//             <form onSubmit={this.handlesubmit}>
//             <input type="text" onChange={this.handleSearch}></input>
//             <input type="submit"></input>   
//             </form>
//             {
//             this.state.image.map((img)=>(<img src={img.urls.small}></img>))
//             }
//             </>
//         )
//     }
// }*/

// export default ImageSearch



import React from "react";
import axios from "axios";

class ImageSearch extends React.Component{
    constructor(props)
    {
        super()
        this.state={image:[],text:""}
    }
  /*  componentDidMount()
    {
        const url="https://api.unsplash.com/search/photos?client_id=VJ0EtoAOelgTdU4rwpkx5AZH5xKHu8RhBXXgXf0NP_o&page=1&query=office"
            axios.get(url)
            .then((res)=>this.setState({image:res.data.results}))
            .catch((err)=>console.log(err))
    }*/
    getImage=(query)=>{
        const url="https://api.unsplash.com/search/photos?client_id=DTbx5Cs0t9_pWr07JM_nPY-_lUcNoKZe-OlAWXp2uEY&page=1&query="+query   
        axios.get(url)
        .then((res)=>this.setState({image:res.data.results}))
        .catch((err)=>console.log(err))
    }
    handleSearch=(event)=>{
            this.setState({text:event.target.value})
            console.log(this.state.text)
    }
    handlesubmit=(event)=>{
        event.preventDefault();
        this.getImage(this.state.text)
    }
    render()
    {
        return(
           <>
           <form onSubmit={this. handlesubmit}>
            <input type="text" onChange={this.handleSearch}></input>
            <input type="submit"></input>
           </form>
           {
            this.state.image.map((img)=>( <img src={img.urls.small}></img>))
           }
           </>
        )

    }
}


export default ImageSearch