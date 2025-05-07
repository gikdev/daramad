import { CircleDashed, ArrowClockwise, House, Minus, Plus, Prohibit } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from "react-router"
// import * as rdx from "#/assets/radix-colors-dark"

function toPersianNumerals(input: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹"
  return input.replace(/\d/g, d => persianDigits[Number.parseInt(d, 10)])
}

export default function Home() {
  const [price, setPrice] = useState(3_200)
  const [sidePrice, setSidePrice] = useState(0)

  return (
    <div className="min-h:100dvh flex flex-direction:column">
      <main className="flex:1|1|0 p:5x flex flex-direction:column gap:3x ai:center">
        <h1 className="text:center text:rdx-slate-120 font-size:x-large font-weight:900">
          مدیریت بودجه
        </h1>

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
      </main>

      <nav className="bg:rdx-slate-20 border-top:1 border:rdx-slate-60 flex">
        <Link
          to="#/"
          className="flex:1|1|0 h:18x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={24} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>

        <Link
          to="#/"
          className="flex:1|1|0 h:18x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={24} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>

        <Link
          to="/"
          className="flex:1|1|0 h:18x px:2x bg:rdx-slate-30:hover text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x text:rdx-slate-120:hover fill:rdx-slate-100 fill:rdx-slate-120:hover border-bottom:1x border:rdx-slate-120 text:rdx-slate-120 fill:rdx-slate-120"
        >
          <House size={24} weight="fill" className="fill:inherit" />
          <span>خانه</span>
        </Link>

        <Link
          to="#/"
          className="flex:1|1|0 h:18x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={24} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>

        <Link
          to="#/"
          className="flex:1|1|0 h:18x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={24} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>
      </nav>
    </div>
  )
}
