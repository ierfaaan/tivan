const BASE_URL = '/Dashboard'
export const DASHBOARD_ENDPOINT = {
  GET_DATA: () => `${BASE_URL}/GetData`,
  GET_SYMBOL_BASED_TRADER_PERFORAMNCE_TABLE_DATA_OF_TRADER_DASHBOARD: () =>
    `${BASE_URL}/GetSymbolBasedTraderPerforamnceTableDataOfTraderDashboard`,
  GET_CUSTOMER_BASED_TRADER_PERFORAMNCE_TABLE_DATA_OF_TRADER_DASHBOARD: () =>
    `${BASE_URL}/GetCustomerBasedTraderPerforamnceTableDataOfTraderDashboard`,
  GET_CREDIT_BASED_TRADER_PERFORAMNCE_TABLE_DATA_OF_TRADER_DASHBOARD: () =>
    `${BASE_URL}/GetCreditBasedTraderPerforamnceTableDataOfTraderDashboard`,
  GET_TRADER_PERFORAMNCE_GENERAL_DATA_OF_TRADER_DASHBOARD: () =>
    `${BASE_URL}/GetTraderPerforamnceGeneralDataOfTraderDashboard`,
  GET_TRADER_PERFORAMNCE_DIAGRAM_DATA_OF_TRADER_DASHBOARD: () =>
    `${BASE_URL}/GetTraderPerforamnceDiagramDataOfTraderDashboard`,
}
