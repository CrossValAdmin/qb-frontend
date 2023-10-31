import axios from 'axios';

const BASE_URL = 'https://jfgbzmauw5.execute-api.us-east-1.amazonaws.com'; // Please replace with your API Gateway URL

// Function to get Quickbooks URL
export const getQuickbooksUrl = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/qck`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Quickbooks URL:", error);
        throw error;
    }
};

// Function to exchange code for tokens
export const exchangeCodeForTokens = async (code) => {
    try {
        const response = await axios.get(`${BASE_URL}/qck/exchange`, {
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

// Function to get expenses
// export const getExpenses = async (token,realmId,startPosition = 1, endPosition = 100) => {
export const getExpenses = async (token,realmId) => {
    console.log("from getExpenses",token)
    try {
        const response = await axios.get(`${BASE_URL}/qck/expenses`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                // startPosition: startPosition,
                // endPosition: endPosition,
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
        const response = await axios.get(`${BASE_URL}/qck/customer_info`, {
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
        const response = await axios.get(`${BASE_URL}/qck/company_info`, {
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
      const response = await axios.get(`${BASE_URL}/qck/profitloss`, {
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

export const getCashFlow = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/qck/cashflow`,  {
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

export const getBudget = async (token, realmId) => {
  try {
      const response = await axios.get(`${BASE_URL}/qck/Budget`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getInvoices`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getSalesData`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getDeposits`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getPayments`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getGeneralLedger`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getSalesbyproduct`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getVendorExpenses`, {
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
      const response = await axios.get(`${BASE_URL}/qck/getCustomerIncome`, {
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
