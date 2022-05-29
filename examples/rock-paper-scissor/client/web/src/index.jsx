import { StrictMode } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import {
    ChakraProvider,
    ThemeProvider,
} from "@chakra-ui/react"

import App   from "./App"
import theme from './theme'

const rootElement = document.getElementById("root")
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>,
    rootElement
)
