import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return (
    <div className="w-8 h-20 items-center flex">
      <Icon className="w-8 h-8 text-violet-500" />
    </div>
  );
}
