import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
    ProductCard,
    ProductGrid,
    SingleProduct,
    iCardProps,
    IProductGridProps,
} from './Brewer-CLP-grid';


export default {
    title: 'WIP /CLP Brewers Exploration',
    component: ProductCard,
    argTypes: {
        hoverUrl: { control: 'text' },
        products: {
            control: 'object'
        }
    },
} as Meta;

const Template: Story<iCardProps> = (args) => <ProductCard {...args} />;

export const Card = Template.bind({});
Card.args = {
    name: 'Product Name',
    onetimeprice: '$19.99',
    imageUrl: 'https://example.com/product.jpg',
    hoverUrl: 'https://example.com/product-hover.jpg',
};

export const Grid: Story<IProductGridProps> = (args) => <ProductGrid {...args} />;
Grid.args = {
    products: [
        {
            name: 'K-Café® Special Edition Single Serve Coffee Latte & Cappuccino Maker',
            kskprice:'$49.99',
            onetimeprice: '$199.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-SE_Desktop_767x687px@2x?wid=2000',
            hoverUrl:
                'https://www.keurig.com/medias/K-Cafe-Special-Edition-Carousel-1.jpg?context=bWFzdGVyfGxwLWhvdC1icmV3ZXJzfDE0NTAwMHxpbWFnZS9qcGVnfGxwLWhvdC1icmV3ZXJzL2g2Ny9oZWEvNTI1NDYzNTM5ODc2MTQuanBnfDU2NTE5YTdiNzQ2ODg3Y2E3NmNhMTc3NTE1OTZkZDI4NDEyY2E4OTczOTIyZWQyYmVkMTlhNDE5MGQ5MWNlY2M',
        },
        {
            name: 'K-Iced™ Single Serve Coffee Maker',
            kskprice:'$49.99',
            onetimeprice: '$99.99',
            imageUrl:
                'https://www.keurig.com/medias/5000374500-E2-EN-Kca-Desktop-K-Iced.jpg?context=bWFzdGVyfHJvb3R8MTE0MTc4MHxpbWFnZS9qcGVnfGhjNy9oNWMvNjYyNTAwMDMxNTI5MjYuanBnfGQyYjE2NGVlNTg0Njk2YTY4ODdkY2Q3Y2IyYzg3MGI2YzE0Mzk2N2MyYTUyYzIyNTk1YmI2ZjExYzM0ZDRhYTU',
            hoverUrl:
                'https://www.keurig.com/medias/bg-desktop-k-iced-hutch-hero.jpg?context=bWFzdGVyfGstaWNlZC1odXRjaC1scHwyNDMzNDl8aW1hZ2UvanBlZ3xrLWljZWQtaHV0Y2gtbHAvaDk2L2hhMy82NjM0MDI5MDcyMzg3MC5qcGd8YTBiZDU3ZTYyMWQyMGYyNDFkNDAxMjJiNGM5ZTg4OWFiNjhiYWM2N2VkOWJlNDgzNWZlNmM3M2M1NmYyOGQ1Nw',
        },
        {
            name: 'K-Café® SMART Single Serve Coffee Maker',
            kskprice:'$124.99',
            onetimeprice: '$249.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-SMART-Coffee-Latte-Cappuccino-Maker_5000365485_alt_2',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-SMART-Coffee-Latte-Cappuccino-Maker_5000365485_alt_3',
        },
        {
            name: 'K-Supreme® SMART Single Serve Coffee Maker',
            kskprice:'$89.99',
            onetimeprice: '$179.99',
            imageUrl:
                'https://s7d4.scene7.com/is/image/keurig/kss_offer_hero?fmt=png-alpha&scl=1',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme-SMART-Coffee-Maker_5000367509_alt_3?fmt=png-alpha&wid=575',
        },
        {
            name: 'K-Supreme Plus® SMART Single Serve Coffee Maker',
            kskprice:'$114.99',
            onetimeprice: '$229.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme_Plus_Smart_Mobile_375x255px@2x?scl=1',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme_Plus_SMART_Mobile_375x337px@2x?scl=1',
        },
        {
            name: 'K-Café® Single Serve Coffee Latte & Cappuccino Maker',
            kskprice:'$94.99',
            onetimeprice: '$169.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Caf%C3%A9_Desktop_1440x665px@2x?wid=2000',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Café_Desktop_767x687px@2x?scl=1',
        },
        {
            name: 'Keurig® K-Elite® Single Serve Coffee Maker',
            kskprice:'$94.99',
            onetimeprice: '$169.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Elite_Desktop_CA_1440x665px@2x?wid=2000',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Elite_Desktop_CA_767x687px@2x?wid=2000',
        },
        {
            name: 'K-Slim® Single Serve Coffee Maker',
            kskprice:'FREE',
            onetimeprice: '$129.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Slim_Mobile_375x255px@2x',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Slim-Single-Serve-Coffee-Maker_5000360386_1_swatch?fmt=png-alpha',
        },
        {
            name: 'K-Mini Plus® Single Serve Coffee Maker',
            kskprice:'FREE',
            onetimeprice: '$109.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Mini_Plus_Mobile_375x255px@2x?scl=1',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Mini_Plus_Desktop_767x687px@2x?scl=1',
        },
    ]
};

export const Gridsilhouette: Story<IProductGridProps> = (args) => <ProductGrid {...args} />;
Gridsilhouette.args = {
    products: [
        {
            name: 'K-Café® Special Edition Single Serve Coffee Latte & Cappuccino Maker',
            kskprice:'$49.99',
            onetimeprice: '$199.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-Special-Edition-Coffee-Latte-Cappuccino-Maker_5000341465_swatch?fmt=png-alpha',
            hoverUrl:
                'https://www.keurig.com/medias/K-Cafe-Special-Edition-Carousel-1.jpg?context=bWFzdGVyfGxwLWhvdC1icmV3ZXJzfDE0NTAwMHxpbWFnZS9qcGVnfGxwLWhvdC1icmV3ZXJzL2g2Ny9oZWEvNTI1NDYzNTM5ODc2MTQuanBnfDU2NTE5YTdiNzQ2ODg3Y2E3NmNhMTc3NTE1OTZkZDI4NDEyY2E4OTczOTIyZWQyYmVkMTlhNDE5MGQ5MWNlY2M',
        },
        {
            name: 'K-Iced™ Single Serve Coffee Maker',
            kskprice:'$49.99',
            onetimeprice: '$99.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/k-iced-single-serve-coffee-maker_5000371871_swatch?fmt=png-alpha',
            hoverUrl:
                'https://www.keurig.com/medias/bg-desktop-k-iced-hutch-hero.jpg?context=bWFzdGVyfGstaWNlZC1odXRjaC1scHwyNDMzNDl8aW1hZ2UvanBlZ3xrLWljZWQtaHV0Y2gtbHAvaDk2L2hhMy82NjM0MDI5MDcyMzg3MC5qcGd8YTBiZDU3ZTYyMWQyMGYyNDFkNDAxMjJiNGM5ZTg4OWFiNjhiYWM2N2VkOWJlNDgzNWZlNmM3M2M1NmYyOGQ1Nw',
        },
        {
            name: 'K-Café® SMART Single Serve Coffee Maker',
            kskprice:'$124.99',
            onetimeprice: '$249.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-SMART-Coffee-Latte-Cappuccino-Maker_5000365485_swatch?fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-SMART-Coffee-Latte-Cappuccino-Maker_5000365485_alt_3',
        },
        {
            name: 'K-Supreme® SMART Single Serve Coffee Maker',
            kskprice:'$89.99',
            onetimeprice: '$179.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000361470_swatch?fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme-SMART-Coffee-Maker_5000367509_alt_3?fmt=png-alpha&wid=575',
        },
        {
            name: 'K-Supreme Plus® SMART Single Serve Coffee Maker',
            kskprice:'$114.99',
            onetimeprice: '$229.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme-Single-Serve-Coffee-Maker_5000368401_swatch?fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Supreme_Plus_SMART_Mobile_375x337px@2x?scl=1',
        },
        {
            name: 'K-Café® Single Serve Coffee Latte & Cappuccino Maker',
            kskprice:'$94.99',
            onetimeprice: '$169.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Cafe-Coffee-Latte-Cappuccino-Maker_5000201735_swatch?fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Café_Desktop_767x687px@2x?scl=1',
        },
        {
            name: 'Keurig® K-Elite® Single Serve Coffee Maker',
            kskprice:'$94.99',
            onetimeprice: '$169.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Elite-Single-Serve-Coffee-Maker_5000359832_swatch?fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Elite_Desktop_CA_767x687px@2x?wid=2000',
        },
        {
            name: 'K-Slim® Single Serve Coffee Maker',
            kskprice:'FREE',
            onetimeprice: '$129.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Slim-Single-Serve-Coffee-Maker_5000363760_swatch?$fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Slim-Single-Serve-Coffee-Maker_5000360386_1_swatch?fmt=png-alpha',
        },
        {
            name: 'K-Mini Plus® Single Serve Coffee Maker',
            kskprice:'FREE',
            onetimeprice: '$109.99',
            imageUrl:
                'https://images.keurig.com/is/image/keurig/K-Mini-Plus-Coffee-Maker_5000200239_swatch?fmt=png-alpha',
            hoverUrl:
                'https://images.keurig.com/is/image/keurig/K-Mini_Plus_Desktop_767x687px@2x?scl=1',
        },
    ]
};

export const Single: Story<{ product: iCardProps }> = (args) => <SingleProduct {...args} />;
Single.args = {
    product: {
        name: 'Product Name',
        onetimeprice: '$229.99',
        kskprice:'$114.99',
        imageUrl: 'https://example.com/product.jpg',
        hoverUrl: 'https://example.com/product-hover.jpg',
    },
};
