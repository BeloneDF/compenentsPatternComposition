import { ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode;
}
export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-800 px-8 py-4 rounded-lg flex items-start gap-6 w-96">
      {children}
    </div>
  );
}
