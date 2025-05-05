import * as theme from "./src/assets/radix-colors-dark"
import { variables, type Config } from '@master/css'

export default {
  variables: {
    rdx: {...theme},
    'font-family': {
      sans: ["'Vazirmatn'", ...variables['font-family'].sans]
    }
  }
} as Config
