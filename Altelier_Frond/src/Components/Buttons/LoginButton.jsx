import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const LoginButton = ({...props}) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthAction = () => {
    if (!isLoggedIn) {
      // Navigate to login page
      navigate('/login');
    } else {
      // Handle logout
      setIsLoggedIn(false);
      navigate('/'); // Navigate to home page
    }
  };

  return (
    
    <Button 
      {...props}
      onClick={handleAuthAction}
      
      variant= "outline-primary"              
    >
      
      
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  );
}