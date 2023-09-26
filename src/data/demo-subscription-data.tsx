

export type iSubscriptionItem = {
    productId: number;
    brand: string;
    productName: string;
    productDescription: string;
    sizes: any[]
}

export type iSubscriptionVariant = {
    size: string;
    price: number;
    availability: boolean;
    isActive : boolean;
}

export let subscriptionData = [
    {
        productId: 1,
        brand : "Keurig",
        productName: "Coffee Subscription",
        productDescription: "A subscription for premium coffee beans.",
        sizes: [
            {
                size: "24count",
                price: 24.99,
                availability: true,
                isActive : true

            },
            {
                size: "48count",
                price: 44.99,
                availability: true,
                isActive : false
            },
            {
                size: "72count",
                price: 64.99,
                availability: false,
                isActive : false
            }
        ]
    }

]