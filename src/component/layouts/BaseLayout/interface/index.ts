export interface PropsBaseLayout {
  children: React.ReactNode;
  title: string;
}

export interface TContextBaseLayout {
  showFull?: boolean;
  setShowFull?: (boolean: boolean) => void;
}
