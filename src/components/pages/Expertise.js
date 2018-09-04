import React from 'react'
export function Expertise(props) {

    return (
        <div className="module module-solutions" data-nav-title="Services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="module-content text center wow fadeInUp expertiseHeading">
                            <span className="subtitle">Expertise</span>
                            <h2>High-Performance Real Estate Solutions</h2>
                            <p>We provide real estate solutions that positively impact our customer’s bottom line from the ground up.</p>                </div>
                    </div>
                </div>
                <div className="row">
                    <ExpertiseImage 
                        imageUrl='https://content.equisolve.net/_729a9b08a85f996d95e8e3c0a6c56ef1/libertyproperty/db/385/3737/background_image.jpg' 
                        title='Development'
                        content='With development expertise ranging from multi-tenant industrial buildings to multi-million square foot distribution facilities to state-of-the-art skyscrapers, Liberty delivers thoughtfully designed, sustainable properties with our clients, our communities, and our environment in mind.'
                        pageUrl='/'
                    />  
                    <ExpertiseImage 
                        imageUrl='https://content.equisolve.net/_729a9b08a85f996d95e8e3c0a6c56ef1/libertyproperty/db/385/2548/background_image.jpg'
                        title='Leasing'
                        content='For many businesses, the first contact with their landlord is in the leasing process. We view this collaborative process as the beginning of a partnership we hope will last many years.'
                        pageUrl='/leasing'
                    />
                    <ExpertiseImage 
                        imageUrl='https://content.equisolve.net/_729a9b08a85f996d95e8e3c0a6c56ef1/libertyproperty/db/385/2547/background_image.jpg'
                        title='Property Management'
                        content='We believe in personalized and timely attention to every property and every tenant from our property managers, technicians, and customer service specialists in every market.'
                        pageUrl='/management'
                    />
                </div>
            </div>
        </div>
    )
}

export function ExpertiseImage(props) {
    const imageUrl = props.imageUrl;
    const title = props.title;
    const content = props.content;
    const pageUrl = props.pageUrl;
    
    return (
        <div className="col-sm-4">
            <a href={pageUrl} className="teaser-link background expertiseBackground" style={{background:'url('+imageUrl+')'}}>
                <div className="overlay-content dark">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <span className="btn">Learn More</span>
                </div>
            </a>
        </div>
    )
}