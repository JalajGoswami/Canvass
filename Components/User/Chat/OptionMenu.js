import MenuItem from 'Components/Common/MenuItem'
import StyledText from 'Components/Common/StyledText'
import React from 'react'
import { Menu } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export default function OptionMenu({
    isText, showOptions, setShowOptions, style
}) {
    return (
        <Menu
            visible={showOptions}
            onDismiss={() => setShowOptions(false)}
            anchorPosition='bottom'
            anchor={
                <StyledText style={style}>.</StyledText>
            }
        >
            {isText &&
                <MenuItem
                    IconComponent={Ionicons}
                    icon='copy-outline'
                    title='Copy' iconSize={19}
                />
            }
            <MenuItem
                IconComponent={Feather}
                icon='share' iconSize={19}
                title='Share'
            />
            <MenuItem
                IconComponent={MaterialIcons}
                icon='delete-forever'
                title='Delete'
            />
        </Menu>
    )
}