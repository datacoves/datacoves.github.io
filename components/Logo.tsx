import * as React from "react"
import {
  chakra,
  ImageProps,
  forwardRef,
} from "@chakra-ui/react"

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src="/img/logo.svg" ref={ref} {...props} />
})
