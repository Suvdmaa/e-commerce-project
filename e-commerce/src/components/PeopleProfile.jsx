import { Card } from 'react-bootstrap';

function PeopleProfile (props){
    return (
        <div>
            <Card>
                <div>
                    <img src={props.pic}></img>
                    <h4>{props.name}</h4>
                </div>
                <div>
                    {props.text}
                </div>
            </Card>
        </div>
    )
} 

export default PeopleProfile