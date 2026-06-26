import Parentcomponent from './Parentcomponent';
function Grandparentcomponent(){
    return(
        <div>
            <h1>Grandparentcomponent</h1>
            <Parentcomponent />
        </div>
    )
}
export default Grandparentcomponent;