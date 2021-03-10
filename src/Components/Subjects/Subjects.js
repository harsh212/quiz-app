import React,{Component} from 'react';
import './Subjects.css'
class Subjects extends Component
{
    render()
    {
        const subjectName=this.props.data.subjectName;
        const duration=this.props.data.duration;
        const questionCount=this.props.data.questionCount;
        const icon= this.props.data.icon
        const direction='cl'+(this.props.index)%2 +' sub-box container';
        // console.log(subjectName);
        return(
            <div className="col-sm-12">
            <div className={direction} data-aos="zoom-in-up" data-aos-delay='100' data-aos-duration="1600">
                <h3>{subjectName}</h3>
                <i className={icon}></i>
                <div className="overlay">
                    <p>Subject duration: {duration}</p>
                    <p>Number of question: {questionCount}</p>
                </div>
            </div>
            </div>
        );
    }
}
export default Subjects;