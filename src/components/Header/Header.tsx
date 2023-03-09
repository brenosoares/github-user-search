import gitHub from "../../assets/github-logo.svg";
import { HeaderContent } from "./style"
export const Header = () => {
  return (
    <HeaderContent>
        <h1>GitHub Users <img src={gitHub} alt="Github Logo"/></h1>
        <p>Find a profile by username</p>
    </HeaderContent>
  )
}
