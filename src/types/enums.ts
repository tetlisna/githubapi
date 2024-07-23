export enum ErrorTypes {
  RATE_LIMIT = 'You have reached rate limit, try again later',
  GENERIC = 'Failed to fetch',
  NO_REPO = 'No repositories found',
}

export enum FilterOptions {
  BestMatch = 'best match',
  Stars = 'stars',
  Forks = 'forks',
  HelpWantedIssues = 'help wanted issues',
  Updated = 'updated',
}
