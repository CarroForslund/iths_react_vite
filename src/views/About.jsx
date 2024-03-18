import Person from "../components/Person/Person";
import S from "../components/Person/Person.styled";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <S.PeopleContainer>
        <Person name="Carro" age={40} birthplace="Västerås, Sweden" image="/public/images/carro.jpeg"/>
        <Person name="Chloe" age={7} birthplace="Paleochora, Greece" image="/public/images/chloe.jpg"/>
      </S.PeopleContainer>
    </>
  )
}
