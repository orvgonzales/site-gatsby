import React from "react"
import styled from "styled-components"
import { GiEarthAsiaOceania } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const StatsData = [
  {
    icon: (
      <GiEarthAsiaOceania
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over million destinations",
    desc: "Travel in unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Over million destinations",
    desc: "Travel in unique places",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Fastest Support",
    desc: "Access our Support Team Everyday",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Best Deals",
    desc: "Best Prices",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  padding: 4rem calc((100vw - 1300px) / 2);

  /* width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2); */
`
const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: -webkit-flex;
  display: flex;

  @media (max-width: 600px) {
    -webkit-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
  }

  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and(max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and(max-width: 500px) {
    grid-template-columns: 1fr;
  } */
`

const StatsBox = styled.div`
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  padding: 2rem calc((100vw - 1300px) / 2);

  /* height: 100%;
  width: 100%;
  padding: 2rem; */
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  text-align: center;
`

const Description = styled.p`
  text-align: center;
`
