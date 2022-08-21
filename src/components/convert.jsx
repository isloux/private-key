import { useEffect, useState, useRef } from 'react';
import wif from 'wif';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Convert = ({ value }) => {
    const [uncompressed, setUncompressed] = useState('');
    const [display, setDisplay] = useState(null);
    const [usage, setUsage] = useState(null);
    // On pourrait aussi utiliser useState ?
    var didMount = useRef(false);

    function bufferToHex (buffer) {
        return [...new Uint8Array (buffer)]
            .map (b => b.toString (16).padStart (2, "0"))
            .join ("");
    }

    const handleClick = () => {
        var privatekey = value;
        var decodedKey;
        //privatekey=privatekey.replace(/[\n\r]/g, '');
        try {
            decodedKey = wif.decode(privatekey);
        }
        catch(err) {
            console.log(err);
            decodedKey=JSON.parse('{"version":128, "privateKey": 0, "compressed": true}');
        }
        if (decodedKey.privateKey.length > 0) {
            setUncompressed(bufferToHex(decodedKey.privateKey));
            didMount.current = true;
        } else {
            setUsage(<span style={{color:"red"}}><b>&nbsp;Error, invalid WIF key</b></span>);
            didMount.current = false;
            setDisplay(null);
            setUncompressed('');
        }
    };

    useEffect(() => {
        if (didMount.current) {
            setDisplay(<p><b>Uncompressed private key:</b> <code>{uncompressed}</code></p>);
            setUsage(<p>This 128-bit private key can be identically used for Bitcoin and Ethereum wallets. The WIF private key can be for instance used to import a Bitcoin wallet in <a href='https://freewallet.org'>Freewallet</a>, whereas the uncompressed private key can be used to import a Ethereum wallet in <a href='https://metamask.io'>Metamask</a>. This key will of course generate different public keys on Bitcoin and Ethereum.</p>);    
        } 
    }, [uncompressed]);

    const displayCopyButton = () => {
        if (didMount.current)
            return(
                <CopyToClipboard text={uncompressed}>
                    <button className='Noclick'>Copy private key to clipboard</button>
                </CopyToClipboard>
            )
    }

    return(
        <>
            <button onClick={handleClick}>Convert to uncompressed</button>
            {display}{displayCopyButton()}
            {usage}
        </>
    )
}

export default Convert;