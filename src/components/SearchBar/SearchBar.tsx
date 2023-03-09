import { SearchBarContent, SearchBarFieldButton, SearchBarFieldGroup, SearchBarFieldText } from "./style"
import searchIcon from "../../assets/icon-search.svg"
type Props = {
    username?: string,
    change: (f:any) => void,
    keyDown: (f:any) => void,
    click: (f:any) => void,
}

export const SearchBar = ({ username, change, keyDown, click }: Props) => {
  return (
    <SearchBarContent>
        <SearchBarFieldGroup>
            <SearchBarFieldText 
                type="text" 
                name="search-username" 
                id="search-username"
                placeholder="Search user profile..."
                value={username}
                onChange={change}
                onKeyDown={keyDown} />
            <SearchBarFieldButton onClick={click}>
                <img src={searchIcon} alt="search icon"/>
            </SearchBarFieldButton>
        </SearchBarFieldGroup>
    </SearchBarContent>
  )
}