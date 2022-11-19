import { FC, memo } from 'react'
import { ThemeEnum } from '@/common/types'
import { useSetTheme } from '@/hooks'

interface ThemeChangerProps {}

const ThemeChanger: FC<ThemeChangerProps> = () => {
  const setThem = useSetTheme()
  return (
    <div className="h-full flex items-center gap-2 ml-auto">
      <div
        onClick={() => setThem(ThemeEnum.BLUE)}
        className="w-[30px] h-[30px] bg-blueTheme rounded-full cursor-pointer"
      />
      <div
        onClick={() => setThem(ThemeEnum.DARK)}
        className="w-[30px] h-[30px] bg-darkTheme  rounded-full cursor-pointer"
      />
      <div
        onClick={() => setThem(ThemeEnum.GREEN)}
        className="w-[30px] h-[30px] bg-greenTheme rounded-full cursor-pointer"
      />
    </div>
  )
}

export default memo(ThemeChanger)
