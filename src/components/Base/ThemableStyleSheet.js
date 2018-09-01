// @flow
import * as _ from "lodash";
import { Device, MediaQuerySelector } from "react-native-responsive-ui";


export default class ThemableStyleSheet {
    static select(styles, theme) {
        const { width, height } = Device.dimensions.window;
        const selectedStyles = [];
        styles.forEach(style =>
            MediaQuerySelector.query(style.query, width, height) &&
                (theme === undefined || style.query.theme === undefined || style.query.theme === theme)
                ? selectedStyles.push(style.style) : undefined
        );
        return _.merge.apply(null, selectedStyles);
    }
}
