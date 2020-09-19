import React, {Component, Fragment} from 'react'
import me from './me.jpg'

class Person extends Component {

state = {
    fullName : '  ',
    bio : ' ',
    imgSrc : ``,
    show : ' false '
}

 handleClick = () => {

    this.setState({show : ! this.state.show})

    if(this.state.show) {
        this.setState({
            fullName : ' Hadroug Mohamed Ali ',
            bio : ' FULL STACK WEB DEVELOPER ',
            imgSrc : `${me}` 
    }) 
    }
    else {
        this.setState({
            fullName : '  ',
            bio : '  ',
            imgSrc : ` `
        }) 
    }
 
 
}

    render(){

        return(

                <Fragment>

                 <h1 style={{color : "blue", margin : "50px auto", fontSize : "40px", textTransform : "uppercase"}}> { this.state.fullName} </h1>
                 <h2>{this.state.bio}</h2>
                 <img src= {this.state.imgSrc} alt= ' ' style={{borderRadius : "50%", margin : "50px auto", height:"300px"}}  />
                 <br />
                 <button onClick={this.handleClick} style={{padding :"10px", fontSize:"20px" }}>Show / Hide</button>
                 
                </Fragment>
        )
    }
}

export default Person