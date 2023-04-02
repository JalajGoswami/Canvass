import { StyleSheet } from 'react-native'
import { Menu, TouchableRipple, useTheme } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import StyledText from 'Components/Common/StyledText'

export default function OptionMenu({ options, setOptions }) {
    const theme = useTheme()

    const styles = StyleSheet.create({
        optionsBtn: {
            height: 1,
            opacity: 0,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        menuItemIcon: {
            width: 40,
            height: 36,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        menuItemTxt: {
            color: theme.colors.onSurfaceVariant,
            paddingRight: 12,
        },
    })

    function MenuItem({
        IconComponent, icon, title, onPress = () => null
    }) {
        return (
            <TouchableRipple borderless
                rippleColor={theme.colors.primary + '22'}
                style={styles.menuItem}
                onPress={onPress}
            >
                <>
                    <IconComponent
                        color={theme.colors.onSurfaceVariant}
                        name={icon} size={20}
                        style={styles.menuItemIcon}
                    />
                    <StyledText style={styles.menuItemTxt}>
                        {title}
                    </StyledText>
                </>
            </TouchableRipple>
        )
    }

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
                title='Delete'
            />
            <MenuItem
                IconComponent={MaterialIcons}
                icon='report'
                title='Report'
            />
        </Menu>
    )
}