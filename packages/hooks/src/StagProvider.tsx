import { CacheProvider, Global, css } from "@emotion/react";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { stagDarkTheme, stagDefaultTheme, stagLightTheme } from "@stag/theme";
import createCache from "@emotion/cache";

const globalCache = createCache({
  key: "stagsx",
  container: typeof document !== "undefined" ? document.head : undefined,
});

type StagContextProps = {
  theme: "light" | "dark";
};

const StagContext = createContext<StagContextProps>({ theme: "light" });

type StagProviderProps = StagContextProps & {
  children: ReactNode;
};

export const StagProvider = ({
  theme = "dark",
  children,
}: Partial<StagProviderProps>) => {
  const currentTheme = useMemo(
    () =>
      theme
        ? theme === "light"
          ? stagLightTheme
          : stagDarkTheme
        : stagDefaultTheme,
    []
  );

  return (
    <StagContext.Provider value={{ theme }}>
      <CacheProvider value={globalCache}>
        <Global
          styles={css`
            body {
              color: ${currentTheme.colors.typography.primary};
              background-color: ${currentTheme.colors.bg.primary};
            }
          `}
        />
        {children}
      </CacheProvider>
    </StagContext.Provider>
  );
};

export const useStag = () => {
  const pageContext = useContext(StagContext);
  return pageContext;
};
