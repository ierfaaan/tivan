import GeneralSettings from '../components/GeneralSettings/GeneralSettings'
import HotkeySettings from '../components/HotkeySettings/HotkeySettings'

export const TABS_DATA = [
  {
    id: 1,
    title: 'تنظیمات عمومی',
    tabComponent: GeneralSettings,
  },
  {
    id: 2,
    title: 'تنظیمات کلید میانبر',
    tabComponent: HotkeySettings,
  },
]
