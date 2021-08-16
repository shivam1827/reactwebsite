import {Link} from 'react-router-dom';
const Navigation = () => {

    return (
        <>
          <nav className ="container max-auto flex items-center py-4 px-4 justify-between ">
          <Link to="/">
                  <h3 className ="text-blue-600 text-xl font-extrabold">Landkit.</h3> 
         </Link>
              <ul className ="flex justify-center text-blue-800 text-lg">
                <li><Link to="/">Landing</Link></li>
                <li className ="ml-6"><Link to="/pages">Pages</Link></li>
                <li className ="ml-6"><Link to="/account">Account</Link></li>
                <li className ="ml-6"><Link to="/documentation">Documentation</Link></li>
                
                <button  className ="ml-6 bg-blue-600 text-white padding-10px rounded-lg py-2 px-3">Buy Now</button> 
  
              </ul>
             </nav>  
        </>
    )
}

export default Navigation
