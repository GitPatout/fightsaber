import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Video from './video';
import  '/public/video/demo.mp4';

const VIDEO = {
  src:"/public/video/demo.mp4",
  type:'video/mp4'
 };

class App extends Component {
   constructor(props){
     super(props)
     this.state = {
       src: VIDEO.src,
       type:VIDEO.type
     }
   }

   render(){
     return(
       <div>
         <Video src={this.state.src} type={this.state.type}/>
       </div>
     )
   }

}
ReactDOM.render(<App />, document.getElementById('root'));