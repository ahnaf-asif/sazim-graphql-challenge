import {Link} from 'react-router-dom';

export default function NotFound(){
    return (
        <div className="flex justify-center items-center" style={{height: '85vh'}}>
            <div>
                <h1 className="text-6xl font-bold text-center" >404 not found</h1>
                <p className="text-center mt-5">The page you are looking for does not exist. <br /> Please go back the the <Link to="/" style={{color: '#007bff', textDecoration: 'underline'}}>home page</Link></p>
            </div>
        </div>
    )
}