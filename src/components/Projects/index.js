import "./index.css"

const Projects = props => {
    const {eachProject,index} = props
    const { title, description,imageUrl,projectLink} = eachProject

    return (
        <>
        {index%2!==0 ? ( 
        <li className = "listCon">
        <div>
            <img src = {imageUrl} alt = {title} className = "projectImage123"/>
           </div>
            
        <div className = "proCon123">
           <h1 className = "titlePro">{title}</h1>
           <p className = "paraDes">{description}</p>
           <a href = {projectLink} target="_blank"> <button type = "button" className = "viewButton" >View Project </button></a>
        </div>
    </li>): ( 
    <li className = "listCon">
            
        <div className = "proCon">
           <h1 className = "titlePro">{title}</h1>
           <p className = "paraDes">{description}</p>
           <a href = {projectLink} target="_blank"> <button type = "button" className = "viewButton" >View Project </button></a>
           </div>
           <div>
            <img src = {imageUrl} alt = {title} className = "projectImage1"/>
           </div>
        
    </li>)
    }
    </>
        
    )

}

export default Projects