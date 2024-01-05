import {Component} from "react"

import {v4 as uuidv4} from "uuid"

import { AiFillInstagram ,AiFillLinkedin,AiTwotoneMail} from "react-icons/ai";

import Projects from "../Projects"

import "./index.css"

const projectsList = [
    {
        id:1,
        title:"Emoji Game",
        description: "Created an exciting memory game with unique emoji clicks and randomized placement Showcased React skills in displaying emojis, updating game states, and implementing event listeners. Achieved a polished look with CSS",
        imageUrl :"https://user-images.githubusercontent.com/46521639/116983034-387bea80-ace7-11eb-8705-e4f66e925bc3.PNG",
        projectLink:"https://kameswariemoji.ccbp.tech/"
    },

    {
       id:2,
       title:"Nxt Watch",
       description:"Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React components. ",
       imageUrl:"https://media.licdn.com/dms/image/D5622AQFyVI4MyJPWAg/feedshare-shrink_800/0/1692603858590?e=1705536000&v=beta&t=8CLsRG03Zgxh5SwlDCJRTCr_RW7EjV413X1xBgXpIIQ",
       projectLink:"https://kameswarinxtwth.ccbp.tech/login"
    },
    {
        id:3,
        title:"Movies App",
        description:"Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, and also can search movies and view specific movie details. Implemented different routes for features like login, home, popular, profile by using React Router components Route, Switch, Link.",
        imageUrl:"https://raw.githubusercontent.com/paufar/movie-library/master/src/images/app-screenshot.png",
        projectLink:"https://kameswarimveapp.ccbp.tech/"
    }
]

class Home extends Component{
    state = {inputName :"", inputLink:"",inputDisc:"", list1:projectsList}

    onChangeNameFunc = event => {
        this.setState({inputName:event.target.value})
    }

    onChangeProjectLinkFunc = event => {
        this.setState({inputLink:event.target.value})
    }

    onChangeDescFunc = event => {
        this.setState({inputDisc:event.target.value})
    }

    addProjectFunct = event => {
        const {inputName,inputLink,inputDisc} = this.state
        event.preventDefault()

        const newProject = {
            id:uuidv4(),
            title: inputName,
            projectLink :inputLink,
            description:inputDisc,
            imageUrl:"https://res.cloudinary.com/dfspo6ey6/image/upload/v1704434021/Rectangle_7_mebudw.png"
        }
        
        this.setState(prevState => ({list1:[...prevState.list1, newProject] , inputName:"",inputLink:"",inputDisc:""}))

    }




    render(){
        const {inputName,inputDisc,inputLink, list1} = this.state
        return(
            <>
            <div className = "headCon">
             <h1 className = "mainHeadVK">Kameswari Vepada</h1>
             <div className = "headCon1">
               <a href = "#aboutSection">
               <button type = "button"  className = "button1">About</button>
              </a>
                <a href= "#ProjectSection"><button type = "button" className = "button1">Projects</button></a>
              <a href = "#contactSection"><button type = "button" className = "button1">Contact</button></a>

              </div>
         </div>
            <div className = "aboutSectionCon">
                <div className = "headingCon"id = "aboutSection">
                <h1 className = "head1">UI/UX Designer</h1>
                <h1 className = "head2">Hello,  my name is Kameswari Vepada </h1>
                <p className = "para1">I am from Visakhapatnam .I am recently completed my graduation. I learn Technologies Like ReactJS,HTML,CSS,Javascript, NodeJS ,SQL, Python I am interested in ReactJS developer. </p>
                <div>
                <button type = "button" className = "projectBtn">Projects</button>
                <button type = "button" className = "linkedInBtn">LinkedIn</button>
                </div>
                </div>
                <div className  ="imageCon">
                    <img src = "https://res.cloudinary.com/dfspo6ey6/image/upload/v1704434011/image_1_vbftps.png" alt = "profileImage" className = "image1"/>
                </div>
            </div>
            <div className = "formContainer3">
                <form onSubmit = {this.addProjectFunct}>
                    <h1 className = "addHead1">Add Projects</h1>
                    <div className = "inputcon5">
                    <label htmlFor= "input1" className = "labelProj">Project Name</label>
                    <input type = "text" id = "input1" placeholder = "Enter Project Name Here"  className = "inputProject" onChange = {this.onChangeNameFunc} value = {inputName}/>
                    </div>
                    <div className = "inputcon5">
                    <label htmlFor= "inputLink" className = "labelProj">Project Link</label>
                    <input type = "text" id = "inputLink" placeholder = "Enter Project Link Here" className = "inputProject" onChange = {this.onChangeProjectLinkFunc} value = {inputLink} />
                    </div>
                    <div className = "inputcon5">
                    <label htmlFor= "inputDescription" className = "labelProj">Description</label>
                    <textarea type = "textarea" id = "inputDescription" placeholder = "Enter Here" className = "textAreaProject" onChange = {this.onChangeDescFunc} value = {inputDisc} />
                    </div>
                    <div className = "inputcon5">
                        <button type = "submit" className = "addBtn">Add</button>
                    </div>
                </form>
            </div>
            <div>
                <ul className = "mainProCon" id = "ProjectSection">
                    {list1.map((eachItem,index) => (
                        <Projects key = {list1.id} eachProject = {eachItem} index={index} />
                    ))}
                </ul>
            </div>
            <div className = "iconContainer" id = "contactSection">
                 <AiFillInstagram className = "icon1"/> 
                 <AiFillLinkedin className = "icon1" />  
                 <AiTwotoneMail  className = "icon1"/>
                 <p>Copyright © 2024.  All rights reserved</p>
            </div>
            </>
        )
    }
}

export default Home