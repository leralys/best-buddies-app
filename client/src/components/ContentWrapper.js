import './ContentWrapper.css';

const ContentWrapper = (props) => {
    return <div className='Wrapper'>{props.children}</div>
}

export default ContentWrapper;