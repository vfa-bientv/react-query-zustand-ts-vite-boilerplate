export interface GetPPPoEResponse {
  last_public_ip?: string;
  msg: string;
  nextPage?: number;
  status: boolean;
  public_ip_v6?: string;
  public_ip?: string;
}

export interface GetPPPoEProps {
  url: string;
  start_port: string;
  amount: string;
}
