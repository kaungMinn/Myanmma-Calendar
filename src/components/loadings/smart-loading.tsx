import { Link } from "react-router-dom";
import { useLoadingBar } from "react-top-loading-bar";

export function SmartLink({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) {
  const { start } = useLoadingBar();

  const handleInteraction = () => {
    // 1. Start the bar IMMEDIATELY on click
    start();

    // 2. If you want it even faster, use onMouseDown instead of onClick!
  };

  return (
    <Link
      to={to}
      onClick={handleInteraction}
      {...props}
    >
      {children}
    </Link>
  );
}
