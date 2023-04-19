import useContainer from "./container"
import View from "./view"

const Nav=()=>{
    const props=useContainer();
    
    return <View {...props}/>
}

export default Nav