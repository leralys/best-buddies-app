import Nav from '../../components/nav/Nav';
import notFound from '../../assets/images/404.jpeg';
import './notFound.scss';

const NotFound = () => {
    return (
        <div className='notfound'>
            <Nav />
            <main className='page'>
                <div className='img-container'>
                    <img src={notFound} alt='Page Not Found' />
                </div>
            </main>
        </div>

    );
}

export default NotFound;