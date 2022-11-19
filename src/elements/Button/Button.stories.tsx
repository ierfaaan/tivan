import Button from './Button'

export default {
  title: 'Elements/Button',
  component: Button,
}

export const solid = () => <Button>خرید</Button>

export const outline = () => <Button color="green">فروش</Button>

export const ghost = () => <Button color="red">خرید</Button>

export const link = () => <Button color="red">فروش</Button>
