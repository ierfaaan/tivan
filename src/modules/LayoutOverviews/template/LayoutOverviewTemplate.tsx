interface LayoutOverviewTemplateProps {
  title: string
  description: string
}

const LayoutOverviewTemplate: React.FC<LayoutOverviewTemplateProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="opacity-[0.7] hover:opacity-[1] cursor-pointer">
      <div className="flex items-center mb-2 mr-1 gap-2">
        <h3 className="font-semibold text-md">{title}</h3>
        {description && <p className="text-sm text-gray-400">({description})</p>}
      </div>
      <div className="border-2 bg-gray-100 rounded-md border-gray-300 aspect-video">
        {children}
      </div>
    </div>
  )
}

export default LayoutOverviewTemplate
