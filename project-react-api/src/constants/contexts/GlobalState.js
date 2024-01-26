import { useResquestData } from "../../hook/useRequestData";
import { GlobalContext } from "./GlobalContexts";




const GlobalState = ({children}) => {
    const [data, isLoading, isError]= useResquestData([])
const valores={}
    return (
        <GlobalContext.Provider value={valores}/>
            
        
    );
}

export default GlobalState;
