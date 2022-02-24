import Nav from './Nav';
import ContentWrapper from './ContentWrapper';
import notFound from '../assets/404.jpeg';

const NotFound = () => {
    return (
        <>
            <Nav />
            <main className='page'>
                <ContentWrapper>
                    <img src={notFound} style={{ marginTop: '2rem' }} alt='Page Not Found' />
                </ContentWrapper>
            </main>
        </>
    )
}

export default NotFound;