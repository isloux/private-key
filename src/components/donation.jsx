import publickey from  '../publickey.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Donation = () => {
    return (
        <>
            <div className='Donation'>
                Make a donation
            </div>            
            <p>
                Bitcoin address: <code>1Gu8r7jMNJAMAyc8jFPjt5fZCmrpXcNkcT</code>
                &nbsp;
                <CopyToClipboard text='1Gu8r7jMNJAMAyc8jFPjt5fZCmrpXcNkcT'>
                    <button className='Nolick'>Copy to clipboard</button>
                </CopyToClipboard>
            </p>         
            <img src={publickey} width='128' height='128' alt="public key" />
        </>
    )
    
}

export default Donation;