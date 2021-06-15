const title = 'Datacoves | Open Source tools for the Modern Data Stack.'
const description =
    'Integrating open source analytics tools to make the modern data stoack available to everyone.'

const SEO = {
    title,
    description,
    canonical: 'https://datacoves.com',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://datacoves.com',
        title,
        description,
        images: [
            {
                url: 'https://datacoves.com/img/logo.svg',
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@datacoves',
        site: '@datacoves',
        cardType: 'summary_large_image'
    }
}

export default SEO