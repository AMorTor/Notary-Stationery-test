export interface ServiceItem {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon?: string;
    image?: string;
}

export const SERVICES_CATALOG: ServiceItem[] = [
    {
        id: 'nfc',
        title: 'Tarjetas NFC',
        shortDescription: 'Conectividad al instante',
        fullDescription: 'Comparta su información de contacto, portafolio o sitio web con solo acercar su tarjeta al teléfono de su cliente. Sin aplicaciones extra, rápido y moderno.',
        icon: 'wifi',
        image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'web',
        title: 'Sitios Web Corporativos',
        shortDescription: 'Su oficina digital 24/7',
        fullDescription: 'Diseñamos páginas web elegantes y funcionales que presentan su firma al mundo. Optimizadas para que sus clientes encuentren fácilmente sus servicios y contacto.',
        icon: 'globe',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'qrs',
        title: 'Soluciones QR',
        shortDescription: 'Acceso rápido a información',
        fullDescription: 'Códigos inteligentes para folletos, tarjetas o recepción. Dirija a sus clientes a agendar citas, ver ubicaciones o descargar documentos importantes al instante.',
        icon: 'qr-code',
        image: 'https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'social',
        title: 'Redes Sociales',
        shortDescription: 'Presencia de marca activa',
        fullDescription: 'Gestión profesional de sus perfiles sociales. Creamos contenido que refleja la seriedad y confianza de su notaría, manteniendo una comunicación fluida con su audiencia.',
        icon: 'share',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'vcards',
        title: 'Tarjetas Digitales (vCard)',
        shortDescription: 'Siempre en el bolsillo de su cliente',
        fullDescription: 'Un perfil digital interactivo que se guarda en la agenda del teléfono. Actualice sus datos cuando quiera sin necesidad de reimprimir tarjetas físicas.',
        icon: 'user-circle',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'binding',
        title: 'Empastado Profesional',
        shortDescription: 'Protección y legado',
        fullDescription: 'Encuadernación artesanal de alta durabilidad para libros de protocolo y apéndices. Acabados en piel y materiales premium que garantizan la conservación de sus documentos.',
        icon: 'book',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop'
    }
];
