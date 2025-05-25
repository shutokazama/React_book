import dl_icon from '../image/dl.png';

type Props = {
    isbn: string;
};


export default function Download({ isbn }:Props) {
    return (
        <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
            <img src={dl_icon} alt="Sample Download" />
        </a>
    );
}