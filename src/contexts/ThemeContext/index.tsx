import { ReactNode, useEffect, createContext, useState, Dispatch, SetStateAction } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { theme as initialTheme } from "@/styles/configs/theme"
import { breakFonts } from "@/styles/configs/breakpoints"


interface IThemeContextValues {
  theme: DefaultTheme,
  setTheme: Dispatch<SetStateAction<DefaultTheme>>
}
export const ThemeContext = createContext({} as IThemeContextValues)

interface IThemeProviderTrated {
  children: ReactNode
}
export const ThemeProviderTrated = ({ children }: IThemeProviderTrated) => {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.matchMedia(`(max-width: ${theme.breakpoints.md})`).matches) {
        setTheme(prevTheme => ({
          ...prevTheme,
          font: {
            ...prevTheme.font,
            size: breakFonts.md
          }
        }))
        return
      }
      if (window.matchMedia(`(max-width: ${theme.breakpoints.sm})`).matches) {
        setTheme(prevTheme => ({
          ...prevTheme,
          font: {
            ...prevTheme.font,
            size: breakFonts.sm
          }
        }))
        return
      }
      else {
        setTheme(initialTheme)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>

  )
}