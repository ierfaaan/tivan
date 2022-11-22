import { GlobalSettingResultType } from '@/api/Setting/types'

class SettingModel {
  private setting: $NullType<GlobalSettingResultType> = null

  set setSetting(setting: GlobalSettingResultType) {
    this.setting = setting
  }

  get tabCount() {
    return this.setting?.tabCount
  }
}
export const SettingModelModel = new SettingModel()
