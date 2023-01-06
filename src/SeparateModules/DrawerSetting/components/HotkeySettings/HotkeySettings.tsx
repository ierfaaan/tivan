import { FunctionComponent } from 'react'
import { SettingTemplate } from '../../Template'

interface HotkeySettingsProps {}

const HotkeySettings: FunctionComponent<HotkeySettingsProps> = () => {
  return (
    <div className="flex flex-col gap-4">
      <SettingTemplate title="تنظیمات سامانه">salam</SettingTemplate>
      <SettingTemplate title="جستجوی مشتری">salam</SettingTemplate>
      <SettingTemplate title="عمق بازار">salam</SettingTemplate>
      <SettingTemplate title="ارسال سفارش">salam</SettingTemplate>
      <SettingTemplate title="ارسال سفارش">salam</SettingTemplate>
      <SettingTemplate title="ارسال سفارش">salam</SettingTemplate>
      <SettingTemplate title="ارسال سفارش">salam</SettingTemplate>
    </div>
  )
}

export default HotkeySettings
