import { CardActionArea, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  
  
  return (
    <div className="full-width main">
  <div className="container">
    <div className='row d-flex'>
    <div className="books">
      {Array.isArray(data.author.books) &&
      data.author.books.map((item,index)=>{
        return <div className=' col-3' key={index}>
          <div className='box p-3 h-100'>
            <h5>{item.books.title}</h5>
            <p>{item.authorname}</p>
            <p><span>{item.books.publishedon}</span><span>{item.books.isbn}</span></p>
          <div className='container'>
            <div className="row">
              <div className="col-6">
            <Link to={'/edit'} className='btn btn-outline-primary'>Edit</Link></div>
            <div className="col-6">
            <button className='btn btn-outline-danger'>Delete</button></div>
            </div>
            </div>
            </div>
            
          </div>
        
      })
      }
    </div>
    </div>
    </div>
    </div>
  )
}

export default Card
