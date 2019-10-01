import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { ThemeColors } from 'react-navigation';
import * as theme from "../config/theme";
export default class Typography extends Component {
    render() {
        const
            { h1,
                h2,
                h3,
                title,
                body,
                caption,
                small,
                //Sizes
                size,
                //Styling
                bold,
                semibold,
                light,
                center,
                right,

                //colors
                color,
                accent,
                primary,
                secondary,
                tertiary,
                black,
                white,
                gray,
                gray2,
                children,
                style,
                ...props
            } = this.props;

        const textStyle = [
            styles.text,
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            title && styles.title,
            body && styles.body,
            caption && styles.caption,
            small && styles.small,
            size && { fontSize: size, },
            bold && styles.bold,
            semibold && styles.semibold,
            light && styles.light,
            center && styles.center,
            right && styles.right,
            color && styles[color],
            color && !styles[color] && { color },

            //Color Shortcuts
            accent && styles.accent,
            primary && styles.primary,
            secondary && styles.secondary,
            tertiary && styles.tertiary,
            black && styles.black,
            white && styles.white,
            gray && styles.gray,
            gray2 && styles.gray2,
            style,  //Rewrite predefined styles
        ];
        return (
            <Text style={textStyle}{...props}>
                {children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    //Default styles
    text: {
        fontSize: theme.sizes.font,
        color: theme.colors.black,
    },
    //Variations
    bold: {
        fontWeight: 'bold',
        //fontFamily:"Montserrat-Bold"
    },
    semibold: {
        fontWeight: '500'
        //fontFamily:"Montserrat-Bold"
    },
    light: {
        fontWeight: '200'
        //fontFamily:"Montserrat-Bold"
    },
    //Position
    center: { textAlign: "center" },
    right: { textAlign: "right" },
    //Colors
    accent: { backgroundColor: theme.colors.accent },
    primary: { backgroundColor: theme.colors.primary },
    secondary: { backgroundColor: theme.colors.secondary },
    tertiary: { backgroundColor: theme.colors.tertiary },
    black: { backgroundColor: theme.colors.black },
    white: { backgroundColor: theme.colors.white },
    gray: { backgroundColor: theme.colors.gray },
    gray2: { backgroundColor: theme.colors.gray2 },

    //Fonts
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    title: theme.fonts.title,
    body: theme.fonts.body,
    caption: theme.fonts.caption,
    small: theme.fonts.small,

})
