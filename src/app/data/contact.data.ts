export const CONTACT_INFO = {
    whatsapp: {
        number: '5215576162856', // Format for API: Country Code + Number
        display: '+52 55 7616 2856',
        getLink: (message: string = 'Hola, me gustaría más información.') =>
            `https://wa.me/5215576162856?text=${encodeURIComponent(message)}`
    },
    phone: {
        number: '+525576162856',
        display: '+52 55 7616 2856'
    },
    email: {
        address: 'contacto@papelerianotarial.com'
    },
    address: {
        street: 'Tulipanes 29, Izcalli Ecatepec',
        city: 'Ciudad de México, CDMX',
        mapsLink: 'https://maps.google.com'
    },
    social: {
        facebook: 'https://www.facebook.com/people/Papeler%C3%ADa-Notarial-AG/100064114508293/#',
        instagram: 'https://www.instagram.com/papeleria_ayg/?hl=es',
        linkedin: '#',
        tiktok: 'https://www.tiktok.com/@papelerianotarialayg?lang=es'
    }
};
