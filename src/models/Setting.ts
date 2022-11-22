import { GlobalSettingResultType } from '@/api/Setting/types'

class SettingModel {
  private _setting: $NullType<GlobalSettingResultType> = null

  set setting(setting: GlobalSettingResultType) {
    this._setting = setting
  }

  get tabCount() {
    return this._setting?.tabCount
  }
}
export const SettingModelModel = new SettingModel()
