import { useSelector } from 'react-redux';
import '../pages/ParkPageStyles.css';


const CheckedIn = () => {
    const checkedIn = useSelector(state => state.checkedIn.checkedIn);
    return (
        <>
            <h2 className='page-header'>Here right now:</h2>
            <div>
                <ul>
                    {checkedIn.map(el => {
                        return (
                            // 
                            <li key={el.createdat} className='col'
                                style={{ listStyle: 'none' }}>
                                <div>
                                    <div className='row' style={{ alignItems: 'flex-start' }}>
                                        <span style={{
                                            fontSize: '0.5rem',
                                            marginRight: "0.25rem",
                                            marginBottom: '0.5rem'
                                        }}>🟢</span>
                                        {el.username}
                                    </div>
                                    <div style={{
                                        color: 'var(--color-dark-grey',
                                        fontSize: '0.8rem',
                                        marginBottom: '0.8rem'
                                    }}>
                                        Last seen at: {el.createdat}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    )
}

export default CheckedIn;