import type React from 'react'

import type { DataTypeProps } from '../../types/data-type'
// theme
import Theme from './../../themes/getStyle'

export const JsonNaN: React.FC<DataTypeProps<unknown>> = (props) => {
  return <div {...Theme(props.theme, 'nan')}>NaN</div>
}