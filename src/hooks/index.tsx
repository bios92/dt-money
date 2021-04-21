import { ReactNode } from "react";
import { TransitionsProvider } from "./useTransactions";

interface HooksProviderProps {
  children: ReactNode;
}

export function HooksProvider({ children }: HooksProviderProps) {
  return <TransitionsProvider>{children}</TransitionsProvider>;
}
