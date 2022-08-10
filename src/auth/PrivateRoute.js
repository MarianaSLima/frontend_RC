import {Navigate, useLocation} from 'react-router-dom';
import { useAuth } from './ProvideAuth';

function PrivateRoute({ children }) {
    let auth = useAuth();
    let location = useLocation();
    if(!auth.user)
        return <Navigate to='/cadastro' state={{from: location}} replace /> 
    return children;

}
export default PrivateRoute;