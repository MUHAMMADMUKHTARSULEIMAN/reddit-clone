import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/500.css"
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif"
  },
  style: {
    global: () => ({
      body: {
        bg: "gray.200"
      }
    }) 
  },
  components: {
    
  },
})