import styled from "@master/styled.react"
import BudgetCard from "#/pages/home/budget-card.tsx"
import Nav from "#/pages/home/nav.tsx"
// import * as rdx from "#/assets/radix-colors-dark"

const Container = styled.div("min-h:100dvh flex flex-direction:column")
const MainContainer = styled.main(
  "flex:1|1|0 p:5x flex flex-direction:column gap:3x ai:center overflow-y:auto",
)
const Heading = styled.h1("text:center text:rdx-slate-120 font-size:x-large font-weight:900")

export default function Index() {
  return (
    <Container>
      <MainContainer>
        <Heading>مدیریت بودجه</Heading>

        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
      </MainContainer>

      <Nav />
    </Container>
  )
}
