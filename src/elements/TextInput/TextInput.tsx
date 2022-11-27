import { FC, createElement } from 'react'
import classNames from 'classnames'
import { BaseComponentTypesWithIcon } from '@/common/types/components'

interface TextInputProps extends BaseComponentTypesWithIcon {
  placeholder?: string
  iconPlacement?: 'left' | 'right'
  inputClass?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: FC<TextInputProps> = ({
  className,
  style,
  placeholder,
  inputClass,
  iconPlacement = 'right',
  value,
  iconProps,
  icon,
  onChange,
}) => {
  const inputPadding = iconPlacement === 'right' ? 'pr-9' : 'pl-9'

  const renderIcon =
    icon &&
    createElement(icon, {
      className: 'text-gray-400 group-focus-within:text-gray-700',
      ...iconProps,
    })

  return (
    <div
      className={classNames('w-full h-full flex  items-center relative group', className)}
    >
      {iconPlacement === 'right' && <div className="absolute right-3">{renderIcon}</div>}
      <input
        type="text"
        className={classNames(
          'w-full h-full outline-none p-2 group',
          inputPadding,
          inputClass
        )}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {iconPlacement === 'left' && <div className="absolute left-3">{renderIcon}</div>}
    </div>
  )
}
