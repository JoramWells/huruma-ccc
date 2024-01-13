import { FaUser } from "react-icons/fa"
import SidebarItemButton from "../SidebarItemButton"
import {render} from '@testing-library/react'
import { ChakraProvider, theme } from "@chakra-ui/react"

describe('SidebarItemButton', () => {

    it('renders with default props',()=>{
        const {getByText} = render(<SidebarItemButton/>)
        expect(getByText('Dashboard')).toBeInTheDocument()
    })

    const icon = <FaUser />
    const text = 'Users'
    it('renders with provided props', () => {
        const { getByText } = render(

            <ChakraProvider theme={theme}>
                <SidebarItemButton
                    icon={icon}
                    text={text}
                    selected
                    onClick={() => { }}

                />
            </ChakraProvider>
        )

        expect(getByText(text)).toBeInTheDocument()
    })

})