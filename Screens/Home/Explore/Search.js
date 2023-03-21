import StyledBody from 'Components/Common/StyledBody'
import Recents from 'Components/Explore/Search/Recents'
import SearchInput from 'Components/Explore/Search/SearchInput'
import { useState } from 'react'

export default function Search() {
    const [searchString, setSearchString] = useState('')

    return (
        <StyledBody>
            <SearchInput
                searchString={searchString}
                onChange={setSearchString}
            />
            {searchString ?
                <></>
                :
                <Recents />
            }
        </StyledBody>
    )
}