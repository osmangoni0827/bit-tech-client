import React from 'react';
import './BlogListTable..css';
const ServiceTable = ({blog}) => {

    console.log(blog)
    const HandleDeleteService=(id)=>{
        fetch('https://morning-depths-96771.herokuapp.com/deleteblog/'+id)
        .then(res=>res.json())
        .then(data=>{
            if(data){
                document.getElementById(id).style.display='none'
            }    
        })
    }
    return (
        <table className="table table-borderless serviceTable">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Blog Id</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Action</th>
            
                </tr>
            </thead>
            <tbody>
                {
                  blog?.map((blog, index) => 
                        
                    <tr style={{border:'2px solid'}} id={blog._id}>
                        <td className='pt-3'>{index + 1}</td>
                        <td className='pt-3'>{blog._id}</td>
                        <td className='pt-3'>{blog.title}</td>
                        <td><button onClick={()=>HandleDeleteService(blog._id)}>Delete</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ServiceTable;