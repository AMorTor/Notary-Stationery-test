export const CONTACT_INFO = {
    whatsapp: {
        number: '5215500000000', // Format for API: Country Code + Number
        display: '+52 55 0000 0000',
        getLink: (message: string = 'Hola, me gustaría más información.') =>
            `https://wa.me/5215500000000?text=${encodeURIComponent(message)}`
    },
    phone: {
        number: '+525500000000',
        display: '+52 55 0000 0000'
    },
    email: {
        address: 'contacto@ayg.com'
    },
    address: {
        street: 'Av. Paseo de  la Reforma 000',
        city: 'Ciudad de México, CDMX',
        mapsLink: 'https://maps.google.com'
    },
    social: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        tiktok: '#'
    }
};
