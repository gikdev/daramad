import { Link } from "react-router"
import { House, Prohibit } from "@phosphor-icons/react"

export default function Nav() {
  return (
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
  )
}
