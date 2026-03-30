import type { NavigateOptions, To } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useLoadingBar } from "react-top-loading-bar";

export function useSmartNavigate() {
  const navigate = useNavigate();
  const { start } = useLoadingBar();

  const smartNavigate = (to: To, options?: NavigateOptions) => {
    // 1. Start the loading bar
    start();

    // 2. Perform the actual navigation with options (including state)
    navigate(to, options);
  };

  return smartNavigate;
}
