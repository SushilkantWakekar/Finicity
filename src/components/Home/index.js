import Header from '../Header'
import './index.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='info-container'>
            <Header />
            <div className='details-container'>
                <p className='designation-text'>UI/UX DESIGNER</p>
                <h1 className='name-text'>Hello,  my name is Sushilkant Wakekar</h1>
                <p className='about-text'>I have done MCA from Tulsiramji Gaikwad Patil College, Nagpur</p>

                <button className='btn1'>Projects</button>
                <button className='btn2'>LinkedIn</button>
            </div>
            </div>
            <div className="image-container">
           
            </div>    
        </div>
       
    )
}

export default Home