export interface AccountProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface AccountState {
  profile: AccountProfile | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

