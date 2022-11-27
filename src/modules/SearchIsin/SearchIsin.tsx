import { FC, useState } from 'react'
import { TextInput } from '@/elements'
import { SearchIcon } from '@/common/icons'

interface SearchIsinProps {}

const SearchIsin: FC<SearchIsinProps> = () => {
  const [value, setValue] = useState('')

  return (
    <div className="h-full w-full">
      <TextInput
        placeholder="جستجوی نماد"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={SearchIcon}
      />
    </div>
  )
}

export const SearchIsinMemo = SearchIsin
