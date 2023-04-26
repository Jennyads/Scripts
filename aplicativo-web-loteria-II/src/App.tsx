import { ContextoProvider } from "./contexts/Contexto";
import Rotas from "./routes";
import './index.css';


function App() {
 
    return <ContextoProvider> <Rotas /> </ContextoProvider>
     
}

export default App;
