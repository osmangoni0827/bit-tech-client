import React from 'react';
import { useHistory } from 'react-router';
import './SingleBlog.css'
const SingleBlog = ({blog}) => {
    const{img,title,sortDescription,_id}=blog;
    const history=useHistory()
    const HandleReadMore=()=>{
        history.push('/singleBlogInfo/'+_id);
    }
    return (
        <div className='col-12 col-md-4 py-3'>
            
               <div className='singleblog shadow'>
                <div className='image'>
                <img src={img} alt=''></img>
                </div>
               <div className='p-4 '>
                    <h4>{title}</h4>
                    <p>{sortDescription}</p>
                    <button onClick={HandleReadMore} className='btn btn-info mt-1'>Read More</button>
               </div>
               </div>
        </div>
    );
};

export default SingleBlog;