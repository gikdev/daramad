import { ArrowRight, House, List, Minus, Plus, Prohibit, Trash } from "@phosphor-icons/react"
import { Link } from "react-router"
import * as rdx from "#/assets/radix-colors-dark"

export default function Home() {
  return (
    <div className="min-h:100dvh flex flex-direction:column">
      <nav className="bg:rdx-slate-20 flex jc:space-between border-bottom:1 border:rdx-slate-60">
        <button
          type="button"
          onClick={() => history.back()}
          className="cursor:not-allowed flex ai:center jc:center h:12x px:3x text:rdx-slate-110"
        >
          <ArrowRight size={16} color={rdx.slate[100]} />
        </button>

        <Link
          className="h:12x px:3x font:bold text:rdx-slate-120:hover flex ai:center jc:center font-size:large"
          to="/"
        >
          درآمد
        </Link>

        <button
          type="button"
          onClick={() => history.back()}
          className="cursor:not-allowed flex ai:center jc:center h:12x px:3x text:rdx-slate-110"
        >
          <List size={16} color={rdx.slate[100]} />
        </button>
      </nav>

      <main className="flex:1|1|0 p:5x flex flex-direction:column gap:3x">
        <h1 className="text:center text:rdx-slate-120 font-size:x-large font:bold">مدیریت بودجه</h1>

        <div className="bg:rdx-slate-30 p:3x r:8 flex flex-direction:column gap:4x">
          <div className="flex gap:1x">
            <span className="margin-inline-end:auto text:rdx-slate-110">تفریح</span>
            <button
              type="submit"
              className="fill:rdx-slate-90 bg:rdx-slate-30 p:1x r:4 cursor:not-allowed"
              disabled
            >
              <Plus size={16} className="fill:inherit" />
            </button>
            <button
              type="submit"
              className="fill:rdx-slate-90 bg:rdx-slate-30 p:1x r:4 cursor:not-allowed"
              disabled
            >
              <Minus size={16} className="fill:inherit" />
            </button>
            <button
              type="submit"
              className="fill:rdx-slate-90 bg:rdx-slate-30 p:1x r:4 cursor:not-allowed"
              disabled
            >
              <Trash size={16} className="fill:inherit" />
            </button>
          </div>

          <div className="">
            <p className="" dir="ltr">
              <span className="text:rdx-slate-120 font:bold font-size:xx-large">۳،۲۰۰</span>
              <span className="text:rdx-slate-110">ت</span>
            </p>
          </div>
        </div>
      </main>

      <nav className="bg:rdx-slate-20 border-top:1 border:rdx-slate-60 flex">
        <Link
          to="#/"
          className="flex:1|1|0 h:15x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={16} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>

        <Link
          to="#/"
          className="flex:1|1|0 h:15x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={16} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>

        <Link
          to="/"
          className="flex:1|1|0 h:15x px:2x bg:rdx-slate-30:hover text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x text:rdx-slate-120:hover fill:rdx-slate-100 fill:rdx-slate-120:hover border-bottom:1x border:rdx-slate-120 text:rdx-slate-120 fill:rdx-slate-120"
        >
          <House size={16} weight="fill" className="fill:inherit" />
          <span>خانه</span>
        </Link>

        <Link
          to="#/"
          className="flex:1|1|0 h:15x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={16} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>

        <Link
          to="#/"
          className="flex:1|1|0 h:15x px:2x text:rdx-slate-100 flex flex-direction:column ai:center jc:center gap:1x fill:rdx-slate-100"
        >
          <Prohibit size={16} className="fill:inherit" />
          <span>W.I.P</span>
        </Link>
      </nav>
    </div>
  )
}
