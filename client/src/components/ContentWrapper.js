import './ContentWrapper.css';

const ContentWrapper = (props) => {
    return <main className='Wrapper'>{props.children}</main>
}

export default ContentWrapper;