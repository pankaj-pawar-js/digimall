const productList = [
    {
        id: 1,
        title: "Samsung Galaxy M51 (Celestial Black, 8GB RAM, 128GB Storage)",
        image: "https://m.media-amazon.com/images/I/713AhSUtbHL._AC_UY218_.jpg",
        price: "26999",
        rating: 5,
        quantity: 1
    },
    {
        id: 2,
        title: "Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage)",
        image: "https://m.media-amazon.com/images/I/71T0KJFxCHL._AC_UY218_.jpg",
        price: "39999",
        rating: 5,
        quantity: 1
    },
    {
        id: 3,
        title: "OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)",
        image: "https://m.media-amazon.com/images/I/71m05O2uNdL._AC_UY218_.jpg",
        price: "42999",
        rating: 5,
        quantity: 1
    },
    {
        id: 4,
        title: "OPPO A5 2020 (Dazzling White, 4GB RAM, 64GB Storage)",
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
        price: "11999",
        rating: 5,
        quantity: 1
    },
    {
        id: 5,
        title: "Vivo V19 2020 Lite (Mystic Silver, 8GB RAM, 128GB Storage)",
        image: "https://m.media-amazon.com/images/I/61DlqYmSLOL._AC_UY218_.jpg",
        price: "24999",
        rating: 5,
        quantity: 1
    },

    {
        id: 6,
        title: "OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)",
        image: "https://m.media-amazon.com/images/I/719CgfLcqNL._AC_UY218_.jpg",
        price: "29999",
        rating: 5,
        quantity: 1
    },
    {
        id: 7,
        title: "Apple iPhone XR (128GB) - Black",
        image: "https://m.media-amazon.com/images/I/51qBzX0pGYL._AC_UY218_.jpg",
        price: "53500",
        rating: 5,
        quantity: 1
    },
    {
        id: 8,
        title: "Apple iPhone 11 Pro Max (64GB) - Midnight Green",
        image: "https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg",
        price: "129999",
        rating: 5,
        quantity: 1
    },
];

const productSpecs = {
    "OS": "Android",
    "RAM": "8 GB",
    "Product Dimensions": "0.8 x 7.4 x 16.1 cm; 188 Grams",
    "Batteries": "2 Lithium ion batteries required. (included)",
    "Item model number": "OnePlus 8T",
    "Wireless communication technologies": "Bluetooth;WiFi Hotspot",
    "Connectivity technologies": "LTE/LTE-A: 4×4 MIMO;Supports up to DL Cat 18/UL Cat 18 (1.2Gbps/200Mbps);depending on carrier support;GSM;(B2;/3/5/8);WCDMA;(B1/2/4/5/8/9/19);LTE-FDD;(B1/2/3/4/5/7/8/12/17/18/19/20/26);LTE-TDD;(B34/38/39/40/41/46);5G NSA: N78;5G SA: N78;MIMO: LTE;(B1/3/40/41);NR: N78;NFC enabled;Wi-Fi: 2×2 MIMO;Support 2.4G/5G;Support WiFi 802.11 a/b/g/n/ac/ax",
    "Special features": "128;Dual SIM;GPS;Music Player;Video Player;;In-display Fingerprint sensor;Accelerometer;Electronic Compass;Gyroscope;Ambient Light sensor;Proximity sensor;sensor Core;Flicker-detect sensor;E-mail",
    "Display technology": "Multi-touch capacitive touchscreen with 402 ppi pixel density",
    "Other display features": "Wireless",
    "Device interface - primary": "Touchscreen",
    "Other camera features": "Main Camera: Dual LED Flash, Multi Autofocus ( PDAF+CAF) | Front Camera: Fixed Focus, Time Lapse, 1080 video @30 fps",
    "Form factor": "Touchscreen Phone",
    "Colour": "Aquamarine Green",
    "Battery Power Rating": "4500",
    "Whats in the box": "Handset, Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Case, Screen Protector and SIM Tray Ejector",
    "Manufacturer": "Oppo Mobiles India Private Limited",
    "Item Weight": "188 g"
};

export function getProductList() {
    return productList;
}

export function getProductDetailsByPId(id) {
    const pDetails = productList.filter(p => p.id === parseInt(id))[0];
    return { ...pDetails, specs: productSpecs };
}