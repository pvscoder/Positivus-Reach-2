export function TitleLink({
    title = "",
    Description = "",
    DescriptionTwo  = ""
}
) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="text-[40px]/[45px] font-medium rounded-lg bg-green item-center p-1">
            {title}
        </div>
        <div className="text-lg font-normal text-center md:text-left">
            {Description} <br className="hidden lg:block"/> {DescriptionTwo}
        </div>
    </div>
)}


