import styled from "@master/styled.react"
import { ArrowClockwise, CircleDashed, type Icon, Minus, Plus } from "@phosphor-icons/react"
import { useState } from "react"

function toPersianNumerals(input: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹"
  return input.replace(/\d/g, d => persianDigits[Number.parseInt(d, 10)])
}

const Card = styled.div(
  "bg:rdx-slate-30 p:3x r:8 flex flex-direction:column gap:4x max-w:max-content w:full border:1|solid|rdx-slate-70",
)
const BtnContainer = styled.div("flex gap:2x flex-wrap:wrap")
const Header = styled.div("flex flex-direction:column gap:2x")
const Label = styled.p("text:rdx-slate-110 fill:rdx-slate-110 flex ai:center gap:1x")
const Price = styled.p("w:full")

export default function BudgetCard() {
  const [price, setPrice] = useState(3_200)
  const [sidePrice, setSidePrice] = useState(0)

  function handleMinusBtnClick() {
    setPrice(p => p - sidePrice)
    setSidePrice(0)
  }

  function handleChangeBtnClick() {
    if (sidePrice === 0) {
      const allowed = confirm("مطمئنی؟")
      if (!allowed) return
    }
    setPrice(sidePrice)
    setSidePrice(0)
  }

  function handlePlusBtnClick() {
    setPrice(p => p + sidePrice)
    setSidePrice(0)
  }

  return (
    <Card>
      <Header>
        <Label>
          <CircleDashed size={16} className="fill:inherit" />
          <span>تفریح</span>
        </Label>

        <Price dir="ltr">
          <span className="text:rdx-slate-120 font:bold font-size:xx-large">
            {toPersianNumerals(Number(price).toLocaleString())}
          </span>
          <span className="text:rdx-slate-110">ت</span>
        </Price>
      </Header>

      <input
        dir="ltr"
        type="number"
        value={sidePrice}
        onChange={e => setSidePrice(Number(e.target.value))}
        className="border:2|solid|rdx-slate-70 px:4x py:2x py:1x r:8 flex:2|2|0 min-w:30x max-w:full bg:rdx-slate-40 text:rdx-slate-120"
      />

      <BtnContainer>
        <Btn Icon={Minus} onClick={handleMinusBtnClick} theme="amber" />
        <Btn Icon={ArrowClockwise} onClick={handleChangeBtnClick} theme="blue" />
        <Btn Icon={Plus} onClick={handlePlusBtnClick} theme="green" />
      </BtnContainer>
    </Card>
  )
}

interface BtnProps {
  theme: "blue" | "green" | "amber"
  Icon: Icon
  onClick: () => void
}

function Btn({ Icon, theme, onClick }: BtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`fill:rdx-${theme}-100 fill:rdx-${theme}-20:hover bg:rdx-${theme}-90:hover p:2x r:8 cursor:pointer transform:scale(0.9):active flex:1|1|0 min-w:max-content flex ai:center jc:center`}
    >
      <Icon size={32} className="fill:inherit" />
    </button>
  )
}
