import styled from "@master/styled.react"
import { House, type Icon, Prohibit } from "@phosphor-icons/react"
import { Link } from "react-router"

export default function Nav() {
  return (
    <nav className="bg:rdx-slate-20 border-top:1 border:rdx-slate-60 flex">
      <NavItem Icon={Prohibit} title="W.I.P" to="#/" disabled={true} />
      <NavItem Icon={Prohibit} title="W.I.P" to="#/hello" />
      <NavItem to="/" Icon={House} title="خانه" isActive={true} />
      <NavItem Icon={Prohibit} title="W.I.P" to="#/" disabled />
      <NavItem Icon={Prohibit} title="W.I.P" to="#/" disabled />
    </nav>
  )
}

interface NavItemProps {
  to: string
  disabled?: boolean
  isActive?: boolean
  Icon: Icon
  title: string
}

function NavItem({ isActive = false, Icon, title, to, disabled = false }: NavItemProps) {
  const StyledLink = styled(Link)(
    "text:rdx-slate-110 fill:rdx-slate-110",
    "flex:1|1|0 h:18x px:2x flex flex-direction:column ai:center jc:center gap:1x",
    {
      disabled: "text:rdx-slate-90 fill:rdx-slate-90",
      $isActive:
        "text:rdx-slate-120 fill:rdx-slate-120 border-bottom:1x border:rdx-slate-120 text:rdx-slate-100 fill:rdx-slate-100",
    },
  )

  return (
    <StyledLink to={disabled ? "#/" : to} disabled={disabled} $isActive={isActive}>
      <Icon size={24} className="fill:inherit" />
      <span>{title}</span>
    </StyledLink>
  )
}
