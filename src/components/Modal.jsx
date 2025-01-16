import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../util"
import { Icon } from "@iconify/react"

export const Modal = ({ id, name }) => {
  const { isFetched, data } = useQuery({
    queryKey: ['pricelist', id],
    queryFn: () => getProduct(id)
  })

  return (
    <>
      <button className="py-1 px-4 rounded-md text-white bg-emerald-600" popovertarget={`modal-${id}`}>Részletek</button>
      <div className="w-full max-w-xl p-4 rounded-md backdrop:backdrop-blur-md backdrop:bg-black/50" id={`modal-${id}`} popover="auto">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <button popovertarget={`modal-${id}`} popovertargetaction="hide">
            <Icon icon="material-symbols:close-rounded" />
          </button>
        </div>
        {
          isFetched &&
          <ul className="p-2">
            {data.data.map(pricelist => (
              <li key={pricelist.id}>
                <b>Méret:</b> {pricelist.size} - <b>Ár:</b> {pricelist.price} Ft
              </li>
            ))}
          </ul>
        }
        <div className="flex justify-end">
          <button className="py-1 px-4 rounded-md text-white bg-emerald-600" popovertarget={`modal-${id}`} popovertargetaction="hide">Bezár</button>
        </div>
      </div>
    </>
  )
}