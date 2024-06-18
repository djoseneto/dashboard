import { ArrowRightIcon, ChartPieIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

export default function Login() {
    return (
        <div style={{
            flex: 1,
            background: '#121418',
            color: '#F5F5F5',
            paddingLeft: '8rem',
            paddingRight: '8rem'
        }}>
            <header style={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ChartPieIcon style={{
                        width: '2rem',
                        height: '2rem'
                    }} />
                    <span style={{ fontWeight: 'bold' }}>Dashboard</span>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '1rem'
                }}>
                    <p>Product</p>
                    <p>Resources</p>
                    <p>Support</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                </div>
                <div>
                    <div style={{
                        cursor: 'pointer',
                        color: '#F5F5F5'
                    }}>Sign in <strong style={{
                        color: '#00C39A',
                        fontSize: '18px'
                    }}>Request Demo</strong></div>
                </div>
            </header>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <p style={{
                    fontSize: '42px',
                    fontWeight: '600',
                    lineHeight: '28px',
                    marginTop: '10rem',

                }}>Login to Your Account</p>
                <p style={{ marginTop: '1.5rem', fontSize: '24px', color: '#696982', fontWeight: '400', maxWidth: '550px', textAlign: 'center' }}>Chose from 130,00 online video courses with new additions published every second month</p>
            </div>
            <div style={{ marginTop: '10rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <input style={{
                        background: '#222222',
                        border: '0px',
                        width: '350px',
                        height: '60px',
                        padding: '1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                    }} type="text" name="" id="" placeholder='Brand / Influencer' />
                    <input style={{
                        background: '#222222',
                        border: '0px',
                        width: '350px',
                        height: '60px',
                        padding: '1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        marginTop: '8px'
                    }} type="text" name="" id="" placeholder='8 Digit Pin' />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '0px',
                        width: '350px',
                        height: '60px',
                        padding: '1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        marginTop: '8px',
                        background: 'linear-gradient(to right, #00C299, #39C58F, #7EC882, #B0CB7A, #C7CC76, #E4CD71)',
                        color: '#020201',
                        fontWeight: '600'
                    }}>
                        <strong>Login to Your Account</strong>
                        <ArrowRightIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                    </div>
                </div>
                <strong style={{ fontSize: '42px' }}>/</strong>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(to right, #00C299, #39C58F, #7EC882, #B0CB7A, #C7CC76, #E4CD71) 1',
                        width: '350px',
                        height: '60px',
                        padding: '1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        marginTop: '8px',
                        color: 'white',
                        fontWeight: '600'
                    }}>
                        <CheckBadgeIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                        <strong>Login to Your Account</strong> <ArrowRightIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(to right, #00C299, #39C58F, #7EC882, #B0CB7A, #C7CC76, #E4CD71) 1',
                        width: '350px',
                        height: '60px',
                        padding: '1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        marginTop: '8px',
                        color: 'white',
                        fontWeight: '600'
                    }}>
                        <CheckBadgeIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                        <strong>Login to Your Account</strong> <ArrowRightIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(to right, #00C299, #39C58F, #7EC882, #B0CB7A, #C7CC76, #E4CD71) 1',
                        width: '350px',
                        height: '60px',
                        padding: '1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        marginTop: '8px',
                        color: 'white',
                        fontWeight: '600'
                    }}>
                        <CheckBadgeIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                        <strong>Login to Your Account</strong> <ArrowRightIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                    </div>
                </div>

            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5rem',
            }}>Forgot Password?</div>

            <div style={{
                color: '#3F4041',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '4rem',
                fontWeight: 'bold'
            }}><strong>Provacy Pollicy</strong>
                <strong>Copyright@2024</strong></div>
        </div>
    )
}
