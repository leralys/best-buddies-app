import Nav from '../../components/nav/Nav';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import notFound from '../../assets/images/404.jpeg';

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

    );
}

export default NotFound;