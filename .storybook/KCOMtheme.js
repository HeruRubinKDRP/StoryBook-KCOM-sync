import { create } from '@storybook/theming';
import Logo from './KCOM.svg';

export default create(
    {
        base: 'light',
        brandTitle : 'KCOM Design System',
        brandUrl: '/',
        brandTarget :"_self",
        brandImage: Logo
    }
)
