import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL; 

// Function to get Quickbooks URL
export const getQuickbooksUrl = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/integration/getQuickbooksUrl`);
        console.log("response.data",response.data)
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Quickbooks URL:", error);
        throw error;
    }
};

// Function to exchange code for tokens
export const exchangeCodeForTokens = async (code) => {
    try {
        const response = await axios.get(`${BASE_URL}/integration/exchangeCodeForTokens`, {
            params: {
                code: code
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to exchange code for tokens:", error);
        throw error;
    }
};

// Function to get new access tokn by refresh token
export const newAccessToken = async (refreshtoken) => {
    try {
        const response = await axios.get(`${BASE_URL}/integration/newAccessToken`, {
            params: {
                refresh_token: refreshtoken
            }
        });
        console.log("tokenss",response.data)
        return response.data;
    } catch (error) {
        console.error("Failed to exchange code for tokens:", error);
        throw error;
    }
};

// Function to get expenses
// export const getExpenses = async (token,realmId,startPosition = 1, endPosition = 100) => {
export const getExpenses = async (token,realmId) => {
    console.log("from getExpenses",token)
    try {
        const response = await axios.get(`${BASE_URL}/integration/getExpenses`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                realmId:realmId
            }
        });
        console.log("from front",response.data)
        return response.data;
    } catch (error) {
        console.error("Failed to fetch expenses:", error);
        throw error;
    }
};

// Function to get customer info
export const getCustomerInfo = async (token,realmId) => {
    try {
        const response = await axios.get(`${BASE_URL}/integration/getCustomerInfo`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            ,
            params: {
                realmId:realmId
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch customer info:", error);
        throw error;
    }
};

// Function to get company info
export const getCompanyInfo = async (token,realmId) => {
    try {
        const response = await axios.get(`${BASE_URL}/integration/getCompanyInfo`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                realmId:realmId
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch company info:", error);
        throw error;
    }
};

export const getProfitLoss = async (token,realmId) => {
  try {
    console.log("trying")
      const response = await axios.get(`${BASE_URL}/integration/getProfitloss`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
              start_date:'2015-06-01',
              end_date:'2015-06-30',
              realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch profit loss:", error);
      throw error;
  }
};

export const getCashFlow = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getCashflow`,  {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            start_date:'2015-06-01',
            end_date:'2015-06-30',
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch cash flow:", error);
      throw error;
  }
};

export const Budget = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/Budget`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
              realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getInvoices = async (token,realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getInvoices`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
              realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getSalesData = async (token, realmId, startPosition = 1, endPosition = 100) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getSalesData`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
              realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getDeposit = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getDeposits`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getPayment = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getPayments`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getGeneralLedger = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getGeneralLedger`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getSalesByProduct = async (token,realmId, startPosition = 1, endPosition = 100) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getSalesbyproduct`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            start_date:'2015-06-01',
            end_date:'2015-06-30',
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getVendorExpenses = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getVendorExpenses`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};

export const getCustomerIncome = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/integration/getCustomerIncome`, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
          params: {
            realmId:realmId
          }
      });
      console.log("from front",response.data)
      return response.data;
  } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw error;
  }
};
