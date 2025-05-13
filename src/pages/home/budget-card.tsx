import { ArrowClockwise, CircleDashed, Minus, Plus } from "@phosphor-icons/react"
import {useState} from "react";

function toPersianNumerals(input: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹"
  return input.replace(/\d/g, d => persianDigits[Number.parseInt(d, 10)])
}

export default function BudgetCard() {
  const [price, setPrice] = useState(3_200)
  const [sidePrice, setSidePrice] = useState(0)

  return (
    <div className="bg:rdx-slate-30 p:3x r:8 flex flex-direction:column gap:4x max-w:max-content w:full border:1|solid|rdx-slate-70">
      <div className="flex flex-direction:column gap:2x">
        <p className="text:rdx-slate-110 fill:rdx-slate-110 flex ai:center gap:1x">
          <CircleDashed size={16} className="fill:inherit" />
          <span>تفریح</span>
        </p>

        <p className="w:full" dir="ltr">
              <span className="text:rdx-slate-120 font:bold font-size:xx-large">
                {toPersianNumerals(Number(price).toLocaleString())}
              </span>
          <span className="text:rdx-slate-110">ت</span>
        </p>
      </div>

      <input
        min={0}
        dir="ltr"
        type="number"
        value={sidePrice}
        onChange={e => setSidePrice(Number(e.target.value))}
        className="border:2|solid|rdx-slate-70 px:4x py:2x py:1x r:8 flex:2|2|0 min-w:30x max-w:full bg:rdx-slate-40 text:rdx-slate-120"
      />

      <div className="flex gap:2x flex-wrap:wrap">
        <button
          type="button"
          className="fill:rdx-green-100 bg:rdx-green-40 p:2x r:8 cursor:pointer transform:scale(0.9):active flex:1|1|0 min-w:max-content flex ai:center jc:center"
          onClick={() => {
            setPrice(p => p + sidePrice)
            setSidePrice(0)
          }}
        >
          <Plus size={32} className="fill:inherit" />
        </button>

        <button
          type="button"
          className="fill:rdx-blue-100 bg:rdx-blue-40 p:2x r:8 cursor:pointer transform:scale(0.9):active flex:1|1|0 min-w:max-content flex ai:center jc:center"
          onClick={() => {
            if (sidePrice === 0) {
              const allowed = confirm("مطمئنی؟")
              if (!allowed) return
            }
            setPrice(sidePrice)
            setSidePrice(0)
          }}
        >
          <ArrowClockwise size={32} className="fill:inherit" />
        </button>

        <button
          type="button"
          className="fill:rdx-amber-100 bg:rdx-amber-40 p:2x r:8 cursor:pointer transform:scale(0.9):active flex:1|1|0 min-w:max-content flex ai:center jc:center"
          onClick={() => {
            setPrice(p => p - sidePrice)
            setSidePrice(0)
          }}
        >
          <Minus size={32} className="fill:inherit" />
        </button>
      </div>
    </div>
  )
}