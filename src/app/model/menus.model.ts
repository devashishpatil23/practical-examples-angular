export interface menu {
  [role: string]: menuItem[];
}

export interface menuItem {
  path: string;
  title: string;
}
