export const Modal = ({ id }) => {
  return (
    <>
      <button popovertarget={`modal-${id}`}>Részletek</button>
      <div className="w-full max-w-xl p-4 rounded-md backdrop:backdrop-blur-md backdrop:bg-black/50" id={`modal-${id}`} popover="auto">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-xl font-semibold">Pizza neve</h2>
          <button popovertarget={`modal-${id}`} popovertargetaction="hide">x</button>
        </div>
        <ul className="p-2">
          méret: 22 - ár: 1250 Ft
        </ul>
        <div className="flex justify-end">
          <button className="py-1 px-4 rounded-md text-white bg-zinc-600" popovertarget={`modal-${id}`} popovertargetaction="hide">Bezár</button>
        </div>
      </div>
    </>
  )
}