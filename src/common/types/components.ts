import { IconBaseProps, IconType } from '@react-icons/all-files'
import { type } from 'os'
import { CSSProperties } from 'react'

export type BaseComponentTypes = {
  style?: CSSProperties
  className?: string
  onClick?: () => void
}

export type BaseComponentTypesWithIcon = {
  iconProps?: IconBaseProps
  icon?: IconType
} & BaseComponentTypes
