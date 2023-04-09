import { StyleSheet } from 'react-native'
import { Menu } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import MenuItem from 'Components/Common/MenuItem'

export default function OptionMenu({ options, setOptions, user }) {

    const styles = StyleSheet.create({
        optionsBtn: {
            height: 1,
            opacity: 0,
        },
    })

    return (
        <Menu
            visible={options}
            onDismiss={() => setOptions(false)}
            anchorPosition='bottom'
            anchor={
                <StyledText style={styles.optionsBtn}>.</StyledText>
            }
        >
            <MenuItem
                IconComponent={MaterialIcons}
                icon='delete-forever'
                title='Delete Notification'
            />
            <MenuItem
                IconComponent={MaterialIcons}
                icon='block' iconSize={19}
                title={`Block ${user}`}
            />
        </Menu>
    )
}