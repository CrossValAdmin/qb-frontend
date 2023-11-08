import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { exchangeCodeForTokens } from './Api'; 

function OAuth2Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Define state variables for code and realmId
  // const [codeState, setCodeState] = useState(null);
  // const [realmIdState, setRealmIdState] = useState(null);

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const realmId = searchParams.get('realmId');

    // Update state variables with received values
    // setCodeState(code);
    // setRealmIdState(realmId);

    console.log("Received Code:", code);
    console.log("Received RealmId:", realmId);
    console.log("Received State:", state);

    ;

    if (code) {
      exchangeCodeForTokens(code)
        .then(response => {
            console.log("Complete response object:", response);  
            console.log("Access token:", response?.data?.access_token);  
            console.log("Refresh token:", response?.data?.refresh_token); 
            const ref_token = response?.data?.refresh_token
            const expiresIn = response?.data?.expires_in || 3600; // Default to 1 hour if not specified
            const expirationTime = Date.now() + expiresIn * 1000
            // Navigate user back to the MainPage post-authentication
            navigate('/', { state: { token: response?.data?.access_token,ref_token,expirationTime, code, realmId } });
        })
        .catch(error => {
          console.error("Failed to exchange code for tokens:", error);
        });
    }
  }, [searchParams, navigate]);

  return (
    <div>
      Authenticating...
    </div>
  );
}

export default OAuth2Callback;
