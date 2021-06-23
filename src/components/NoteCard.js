import React from 'react'
import {Link} from 'react-router-dom'

class NoteCard extends React.Component{
    render(){
        const {name, description} = this.props.n
        return(
            <div>
                <div className="CategoryCard">
                    
                        <h2> {name}, 
                        <br>
                        </br>
                        {description}
                        
                        </h2>
                    
                </div>
            </div>
        )
    }
}

export default NoteCard