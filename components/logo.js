import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 10px;

&hover img {
    transform: rotate(20deg);
}
`
const Logo = () => {
   const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.svg` 
   return (
    <Link href="/">
         <a>
            <LogoBox>
                <img src={footPrintImg} widht={20} height={20} alt="Logo" />
                <Text 
                color={useColorModeValue('gary.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c'
                fontWeight="bold"
                ml={3}>
                     Mateus Arce 
                </Text>
            </LogoBox>
         </a>
    </Link>
   )
}

export default Logo