
import React , {Component} from "react"
import Img from '../Img1.jpg';
class Comp extends Component {
    constructor(props) {
    super(props);
    this.state={
    FullName:"",
    Bio:"",
    ImgSrc:"",
    Profession:""
};
}
Buttonchange= () =>{
    this.setState({
        FullName:"Ellisa",
        Bio:"maak",
        ImgSrc:"ffdg",
        Profession:"Chanteuse"
    })
}
    render(){

        return(
            <div className="App">
    FullName:{this.state.FullName}
    Bio:{this.state.Bio}
    <img src={Img} alt=""/>
    Profession:{this.state.Profession}
    <button onClick={this.Buttonchange}> Click</button>
    </div>
     )
    }
}
export default Comp

