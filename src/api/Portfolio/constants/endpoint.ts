const BASE_URL = '/Portfolio'
export const PORTFOLIO_ENDPOINT = {
  GET_DAILY_PORTFOLIOS: () => `${BASE_URL}/GetDailyPortfolios`,
  GET_SYMBOL_PORTFOLIO_COUNT: () => `${BASE_URL}/GetSymbolPortfolioCount`,
  GET_BATCH_SYMBOL_PORTFOLIO_COUNT: () => `${BASE_URL}/GetBatchSymbolPortfolioCount`,
}
