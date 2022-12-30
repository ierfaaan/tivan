import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { Anchor } from '@/elements'
import { Clock, LSConnection, ThemeChanger } from './components'
import UserCredit from './components/UserCredit/UserCredit'
import WholeMarketDetails from './components/WholeMarketDetails/WholeMarketDetails'

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const [openFooter, setOpenFooter] = useState(true)
  return (
    <footer
      className={classNames(
        'px-3 py-2 relative shadow-sm bg-lightColor rounded-t-lg',
        openFooter ? 'h-[60px]' : 'h-[10px]'
      )}
    >
      <Anchor
        className="top-0 left-[50%] translate-y-[-50%]"
        type="horizontal"
        onClick={() => setOpenFooter((prevState) => !prevState)}
      />
      <div
        className={classNames(
          'items-center h-full justify-end gap-1',
          openFooter ? 'flex' : 'hidden'
        )}
      >
        {/* <ThemeChanger /> */}
        <WholeMarketDetails />
        <UserCredit />
        <Clock />
        <LSConnection />
      </div>
    </footer>
  )
}
export default Footer
