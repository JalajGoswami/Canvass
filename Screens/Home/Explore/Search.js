import StyledBody from 'Components/Common/StyledBody'
import Recents from 'Components/Explore/Search/Recents'
import SearchInput from 'Components/Explore/Search/SearchInput'
import SearchSuggestion from 'Components/Explore/Search/SearchSuggestion'
import { useState } from 'react'

export default function Search() {
    const [searchString, setSearchString] = useState('')
    const [typing, setTyping] = useState(false)

    return (
        <StyledBody>
            <SearchInput
                setTyping={setTyping}
                searchString={searchString}
                onChange={setSearchString}
            />
            {searchString ?
                typing ?
                    <SearchSuggestion />
                    :
                    <></>
                :
                <Recents />
            }
        </StyledBody>
    )
}