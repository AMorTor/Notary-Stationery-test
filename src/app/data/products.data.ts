export interface ProductItem {
    id: string;
    name: string;
    description?: string;
    subtypes?: string[];
    icon?: string; // SVG path or icon name
    image?: string; // NEW: Image URL
}

export interface ProductCategory {
    id: string;
    title: string;
    subtitle?: string;
    items: ProductItem[];
}

export const PRODUCT_CATALOG: ProductCategory[] = [
    {
        id: 'stationery',
        title: 'Papelería Corporativa',
        subtitle: 'La base de su identidad profesional en cada documento.',
        items: [
            {
                id: 'hojas',
                name: 'Hojas',
                subtypes: ['Testimonio', 'Membretada', 'Folio', 'Póliza', 'Certificados', 'Reconocimientos', 'Certificaciones'],
                icon: 'document',
                image: 'https://images.unsplash.com/photo-1586075010923-2dd45eeed875?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'folders-paper',
                name: 'Folders',
                subtypes: ['Entrega de testimonio', 'Copia certificada'],
                icon: 'folder',
                image: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'tarjetas',
                name: 'Tarjetas',
                subtypes: ['Presentación', 'Agradecimiento', 'NFC Metal/PVC'],
                icon: 'card',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'sobres',
                name: 'Sobres',
                subtypes: ['Entrega', 'Administración/UIF'],
                icon: 'envelope',
                image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'recibos',
                name: 'Recibos',
                subtypes: ['Ingreso', 'Egreso'],
                icon: 'receipt',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'blocks',
                name: 'Blocks',
                subtypes: ['Notas'],
                icon: 'note',
                image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'etiquetas',
                name: 'Etiquetas',
                subtypes: ['Holográficas', 'Personalizadas'],
                icon: 'tag',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'flyers',
                name: 'Flyers',
                subtypes: ['Tríptico', 'Díptico'],
                icon: 'flyer',
                image: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1000&auto=format&fit=crop'
            },
            {
                id: 'sellos',
                name: 'Sellos',
                subtypes: ['Oficiales', 'Corporativos'],
                icon: 'stamp',
                image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1000&auto=format&fit=crop'
            }
        ]
    },
    {
        id: 'folders',
        title: 'Carpetas y Archivos',
        subtitle: 'Organización elegante y duradera para su notaría.',
        items: [
            { id: 'carpeta-firma', name: 'Carpetas de Firma', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop' },
            { id: 'protocolo', name: 'Protocolo', image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1000&auto=format&fit=crop' },
            { id: 'apendice', name: 'Apéndice', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop' },
            { id: 'libro-registros', name: 'Libro de Registros', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop' },
            { id: 'libro-indice', name: 'Libro de Índice/Guía', image: 'https://images.unsplash.com/photo-1507842217121-fe6607d0f977?q=80&w=1000&auto=format&fit=crop' },
            { id: 'libro-corporativo', name: 'Libro Corporativo', image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1000&auto=format&fit=crop' },
            { id: 'cajas-resguardo', name: 'Cajas de Resguardo', image: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop' },
            { id: 'sobre-vip', name: 'Sobre VIP', image: 'https://images.unsplash.com/photo-1635384260341-a906d50730b6?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 'promo',
        title: 'Artículos Promocionales',
        subtitle: 'Extienda su presencia de marca en el día a día.',
        items: [
            { id: 'termos', name: 'Termos', image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1000&auto=format&fit=crop' },
            { id: 'servilletas', name: 'Servilletas', image: 'https://images.unsplash.com/photo-1574545564858-a92c4e334ba9?q=80&w=1000&auto=format&fit=crop' },
            { id: 'boligrafos', name: 'Bolígrafos', image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1000&auto=format&fit=crop' },
            { id: 'portavasos', name: 'Portavasos', image: 'https://images.unsplash.com/photo-1587841315573-03061453a253?q=80&w=1000&auto=format&fit=crop' },
            { id: 'collarines', name: 'Collarines', image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop' },
            { id: 'calendarios', name: 'Calendarios', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop' },
            { id: 'agendas', name: 'Agendas', image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 'luxury', // Keeping consistent with "Section 4 same as 3" but likely intended as "VIP/Custom"
        title: 'Regalos Corporativos',
        subtitle: 'Detalles exclusivos para clientes distinguidos.',
        items: [
            { id: 'termos-vip', name: 'Termos Premium', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop' },
            { id: 'servilletas-tela', name: 'Servilletas de Tela', image: 'https://images.unsplash.com/photo-1574545564858-a92c4e334ba9?q=80&w=1000&auto=format&fit=crop' },
            { id: 'boligrafos-metal', name: 'Bolígrafos Metálicos', image: 'https://images.unsplash.com/photo-1549643446-4cb877c8e547?q=80&w=1000&auto=format&fit=crop' },
            { id: 'portavasos-piel', name: 'Portavasos de Piel', image: 'https://images.unsplash.com/photo-1587841315573-03061453a253?q=80&w=1000&auto=format&fit=crop' },
            { id: 'collarines-vip', name: 'Collarines Personalizados', image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop' },
            { id: 'calendarios-ejecutivos', name: 'Calendarios Ejecutivos', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop' },
            { id: 'agendas-piel', name: 'Agendas en Piel', image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1000&auto=format&fit=crop' }
        ]
    }
];
