import { HeroList } from "../components"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"


export const DcPages = () => {

  return (
    <>
    <h1>DC Comics</h1>
    <hr />
    <HeroList publisher='DC Comics'/>
    </>

  )
}
