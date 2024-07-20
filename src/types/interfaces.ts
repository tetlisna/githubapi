export interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface DataResponse {
  items: RepoDetails[];
}

export interface RepoDetails {
  id: number;
  name: string;
  owner: Owner;
  description: string;
  html_url: string;
}
