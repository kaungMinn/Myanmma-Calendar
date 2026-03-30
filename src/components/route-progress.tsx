import { useIsFetching } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoadingBar } from "react-top-loading-bar";

export function RouteProgress() {
  const { start, complete } = useLoadingBar();
  const location = useLocation();
  const isFetching = useIsFetching();

  // 1. Every time the URL or "Key" changes, trigger a pulse
  useEffect(() => {
    start();
    // If nothing is fetching, finish it immediately.
    // If something IS fetching, the other effect will handle the 'complete'
    if (isFetching === 0) {
      complete();
    }
  }, [location.key]); // Use .key to catch double-clicks on same menu

  // 2. Only handle the API lifecycle here
  useEffect(() => {
    if (isFetching > 0) {
      start();
    }
    else {
      complete();
    }
  }, [isFetching]);

  return null;
}
