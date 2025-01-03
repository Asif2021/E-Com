export const Card = ({title, value}) => {
  return (
    <div>
         <div className="rounded-xl bg-gray-200 p-2 shadow-sm hover:bg-sky-100 hover:text-blue-600">
      <div className="flex p-4">
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        <h3 className="ml-2 text-sm font-medium">
         {title}
        </h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
       {value}
      </p>
    </div>
    </div>
  )
}

export const CardWrapper = ()=>{
  return (
    <>
    <Card title="Total Products" value="35" />
    <Card title= "Delivered" value = "20"/>
    <Card title="Pending" value = "15"/>
    </>
  )
}