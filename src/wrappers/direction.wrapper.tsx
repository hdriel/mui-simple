import React, { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { StyledEngineProvider } from "@mui/material/styles";
import rltPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rltPlugin],
});
const cacheLRT = createCache({ key: "muiltr" });

export function DirectionWrapper({ direction, ...props }) {
  const dir = ["rtl", "ltr"].includes(direction) ? direction : "ltr";

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  return (
    <StyledEngineProvider>
      <CacheProvider value={dir === "rtl" ? cacheRTL : cacheLRT}>
        {props.children}
      </CacheProvider>
    </StyledEngineProvider>
  );
}
