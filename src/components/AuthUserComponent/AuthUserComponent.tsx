import { useNavigate } from "react-router-dom"


// Higher Order Component to check if user is authenticated before rendering the component
const AuthUserComponent = (WrappedComponent: React.FC) => {
    // I need to redirect the user to the home page if the user is not authenticated
    // I will use the useNavigate hook to redirect the user
    // but I can't use hooks in the higher order component
    // so I will create a wrapper component that will use the useNavigate hook
    const Wrapper: React.FC = (props: any) => {
        const navigate = useNavigate();
        // get the token from the localStorage
        const token = localStorage.getItem('token');
    
        if (!token) {
            // if token is not present , redirect to the home page
            navigate('/');
        }
    
        return <WrappedComponent {...props} />;
    }
    return Wrapper;
}

export default AuthUserComponent;