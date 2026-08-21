import { ReactNode } from "react";
import { TaskProvider } from "@/context/taskContext";

interface Props {
    children: ReactNode;
}

export default function PlotsLayout({ children }: Props) {
    return (
        <TaskProvider>
            {children}
        </TaskProvider>
    );
}