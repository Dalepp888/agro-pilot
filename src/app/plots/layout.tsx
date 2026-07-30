import { ReactNode } from "react";
import { PlotsProvider } from "@/context/appContext";

interface Props {
  children: ReactNode;
}

export default function PlotsLayout({ children }: Props) {
  return (
    <PlotsProvider>
      {children}
    </PlotsProvider>
  );
}