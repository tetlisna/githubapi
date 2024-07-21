export enum StatusCode {
  OK = 200,
  NotModified = 304,
  ValidationFailed = 422,
  ServiceUnavailable = 503,
}

export enum FilterOptions {
  BestMatch = 'best match',
  Stars = 'stars',
  Forks = 'forks',
  HelpWantedIssues = 'help-wanted-issues',
  Updated = 'updated',
}
