export interface Owner {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface DataResponse {
  total_count: number;
  items: RepoDetails[];
}

export interface RepoDetails {
  id: number;
  name: string;
  owner: Owner;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks: number;
}
