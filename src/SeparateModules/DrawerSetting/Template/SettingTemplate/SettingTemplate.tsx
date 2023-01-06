import { FunctionComponent } from 'react'

interface SettingTemplateProps {
  title: string
}

const SettingTemplate: FunctionComponent<SettingTemplateProps> = ({
  children,
  title,
}) => {
  return (
    <div className="w-full last:mb-4">
      <div className="bg-gray-700 text-white p-3 rounded-t-lg shadow-md">
        <h2>{title}</h2>
      </div>
      <div className="bg-gray-100 p-3 rounded-b-lg border-b-2 border-gray-200 shadow-sm">
        {children}
      </div>
    </div>
  )
}

export default SettingTemplate
