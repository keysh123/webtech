
const sectionHeader = ({icon,title,classname}) => {
  return (
    <div className={`section_head ${classname}`}>
    <span>{icon}</span>
    <h2>{title}</h2>
</div>
  )
}

export default sectionHeader