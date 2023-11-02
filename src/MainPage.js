import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Api from './Api';
import { FaBook } from 'react-icons/fa'; 
import { newAccessToken } from './Api';

function MainPage({ token: propToken }) {
  const location = useLocation();
  let token = location.state?.token;  // make it mutable by using let
  let refreshToken = location.state?.ref_token;
  let expirationTime = location.state?.expirationTime;  // assuming this is a timestamp
  const code = location.state?.code;
  const realmId = location.state?.realmId;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);  // New loading state

  const handleConnectClick = async () => {
    try {
      const response = await Api.getQuickbooksUrl();
      window.location.href = response.url;  
    } catch (error) {
      console.error("Failed to get Quickbooks URL:", error);
    }
  };

  const refreshAccessToken = async () => {
    try {
      let newTokenData = await newAccessToken(refreshToken);
      token = newTokenData.access_token;
      refreshToken = newTokenData.refresh_token;
      expirationTime = Date.now() + (newTokenData.expires_in * 1000);
      return newTokenData.access_token;
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      throw error;  // Re-throw the error to handle it in the catch block where `refreshAccessToken` is called.
    }
  };
  const hasTokenExpired = () => {
    return Date.now() > expirationTime;
  };

  const handleApiButtonClick = async (apiFunction) => {
    setIsLoading(true);  // Start loading
    try {
      if (hasTokenExpired()) {
        // If token expired, refresh it
        const resp =await refreshAccessToken();
      }
      const result = await apiFunction(token,realmId);
      navigate('/details', { state: { data: result } });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);  // End loading
    }
  };

  return (
    <div className="App container mt-5">
      {!token ? (
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          <div className="card-body text-center">
            <h5 className="card-title">Connect to Quickbooks</h5>
            <FaBook size={50} className="mb-3"/>
            <button className="btn btn-primary btn-block" onClick={handleConnectClick}>
              Connect Now
            </button>
          </div>
        </div>
      ) : (
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h5 className="card-title mb-4">Select an API Action:</h5>
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="btn-group-vertical w-100">
               <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getExpenses)}>Get Expenses</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getCustomerInfo)}>Get Customer Info</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getCompanyInfo)}>Get Company Info</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getProfitLoss)}>Get Profit & Loss Info</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getCashFlow)}>Get Cash Flow</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getBudget)}>Get Budget</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getInvoices)}>Get Invoices</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getSalesData)}>Get Sales Data</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getDeposit)}>Get Deposit Info</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getPayment)}>Get Payment Info</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getGeneralLedger)}>Get General Ledger</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getSalesByProduct)}>Get Sales By Product</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getVendorExpenses)}>Get Vendor Expenses Info</button>
                <button className="btn btn-info mb-2" onClick={() => handleApiButtonClick(Api.getCustomerIncome)}>Get Customer Income Info</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;


// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';  // Replaces useHistory
// import * as Api from './Api';

// function MainPage({ token: propToken }) {
//   const location = useLocation();
//   const token = location.state?.token;
//   const code = location.state?.code;
//   const realmId = location.state?.realmId;
//   const navigate = useNavigate();  
//   console.log("Token from props:", token);
//   console.log("Token from props:", code);
//   console.log("Token from props:", realmId);

//   const handleConnectClick = async () => {
//     try {
//       const response = await Api.getQuickbooksUrl();
//       window.location.href = response.url;  
//     } catch (error) {
//       console.error("Failed to get Quickbooks URL:", error);
//     }
//   };

//   const handleApiButtonClick = async (apiFunction) => {
//     try {
//       const result = await apiFunction(token,realmId);  // Passing the token to the API function
//       console.log("result",result)
//       navigate('/details', { state: { data: result } });  // Replaces history.push
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="App">
//       {!token ? (
//         <button onClick={handleConnectClick}>Connect to Quickbooks</button>
//       ) : (
//         <>
//           <button onClick={() => handleApiButtonClick(Api.getExpenses)}>Get Expenses</button>
//           <button onClick={() => handleApiButtonClick(Api.getCustomerInfo)}>Get Customer Info</button>
//           <button onClick={() => handleApiButtonClick(Api.getCompanyInfo)}>Get Company Info</button>
//           <button onClick={() => handleApiButtonClick(Api.getProfitLoss)}>Get Profit & Loss Info</button>
//           <button onClick={() => handleApiButtonClick(Api.getCashFlow)}>Get Cash Flow</button>
//           <button onClick={() => handleApiButtonClick(Api.getBudget)}>Get Budget</button>
//           <button onClick={() => handleApiButtonClick(Api.getInvoices)}>Get Invoices</button>
//           <button onClick={() => handleApiButtonClick(Api.getSalesData)}>Get Sales Data</button>
//           <button onClick={() => handleApiButtonClick(Api.getDeposit)}>Get Deposit Info</button>
//           <button onClick={() => handleApiButtonClick(Api.getPayment)}>Get Payment Info</button>
//           <button onClick={() => handleApiButtonClick(Api.getGeneralLedger)}>Get General Ledger </button>
//           <button onClick={() => handleApiButtonClick(Api.getSalesByProduct)}>Get Sales By Product</button>
//           <button onClick={() => handleApiButtonClick(Api.getVendorExpenses)}>Get Vendor Expenses Info</button>
//           <button onClick={() => handleApiButtonClick(Api.getCustomerIncome)}>Get Customer Income Info</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default MainPage;
