import TagQuestions from "./TagQuestions";
import Sidebar from "../LandingPg/Sidebar"

function index(){
    return(
        <div className='stack-index'>
            <div className='stack-index-content'>      
                <Sidebar/>
                <TagQuestions/>     
            </div>
        </div>
    )
}

export default index;