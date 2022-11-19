const BASE_URL = '/Customer'
export const CUSTOMER_ENDPOINT = {
  SEARCH_CUSTOMERS: (
    searchText: string,
    isLegalCustomer: string
  ) => `${BASE_URL}/SearchCustomers?searchText=${searchText}&
isLegalCustomer=${isLegalCustomer}`,
  GET_FAVORITE_CUSTOMERS: () => `${BASE_URL}/GetFavoriteCustomers`,
  GET_CUSTOMER_REMAIN: () => `${BASE_URL}/GetCustomerRemain`,
  UPDATE_CUSTOMER_SELECTED_TIME: () => `${BASE_URL}/UpdateCustomerSelectedTime`,
  CLEAR_CUSTOMER_SELECTED_TIME: () => `${BASE_URL}/ClearCustomerSelectedTime`,
  UPDATE_CUSTOMERPRIORITY: () => `${BASE_URL}/UpdateCustomerPriority`,
  GET_BATCH_CUSTOMER_REMAIN: () => `${BASE_URL}/GetBatchCustomerRemain`,
  ADD_CUSTOMERS_GROUP: () => `${BASE_URL}/AddCustomersGroup`,
  DELETE_CUSTOMERS_GROUPS: () => `${BASE_URL}/DeleteCustomersGroups`,
  UPDATE_CUSTOMERS_GROUP: () => `${BASE_URL}/UpdateCustomersGroup`,
  GET_CUSTOMERS_GROUPS: () => `${BASE_URL}/GetCustomersGroups`,
  ADD_CUSTOMERS_GROUP_CUSTOMER: () => `${BASE_URL}/AddCustomersGroupCustomer`,
  DELETE_CUSTOMERS_GROUP_CUSTOMERS: () => `${BASE_URL}/DeleteCustomersGroupCustomers`,
  GET_CUSTOMERS_GROUP_CUSTOMERS: () => `${BASE_URL}/GetCustomersGroupCustomers`,
  IMPORT_CUSTOMERS_GROUP_CUSTOMERS_FROM_EXCEL: () =>
    `${BASE_URL}/ImportCustomersGroupCustomersFromExcel`,
}
