import React from 'react'
import './Form.css'
export default function Form() {
  return (
    <div className=''>
        <div className="container-fluid padding">
            <div className="row ">
                <div className="col">
                    <p className='fw-bold mt-2'>Personal Information</p>
                    <div className=''>
                        <p className='fw-bold mt-2'>First Name</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Middle Name</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Last Name</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Phone Number</p>
                        <input type="number" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Case Number</p>
                        <input type="number" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Name of Business</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Point of Control</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>What was your financial loss from ?</p>
                        <select class="form-select"  aria-label="Default select example" >
                        {/* <option selected>Select your Gender</option> */}
                        <option>Savings</option>
                        <option>Unsavings</option>
                    </select>
                    </div>
                </div>
                <div className="col">
                <p className='fw-bold mt-2'>Who did you report your loss too?</p>
                <div className=''>
                        <p className='fw-bold mt-2'>Agency</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>City</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>State</p>
                        <select class="form-select"  aria-label="Default select example" >
                        {/* <option selected>Select your Gender</option> */}
                        <option>Alaska</option>
                        <option>Punj</option>
                    </select>
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Age</p>
                        <select class="form-select"  aria-label="Default select example" >
                        <option>18</option>
                        <option>22</option>
                    </select>
                    </div>
                    <p className='fw-bold mt-2'>How much was your financial loss in CryptoCurrency?</p>
                    <div className=''>
                        <input type="text" className='form-control' />
                    </div>
                    <p className='fw-bold mt-2'>Nft Exchange</p>
                    <div className=''>
                    <select class="form-select"  aria-label="Default select example" >
                       
                        <option>Larva labs</option>
                        <option>Labs</option>
                    </select>
                    </div>
                </div>
                <div className="col">
                    <p className='fw-bold mt-2'>The Address to where you send you are fraudulently obtained Cryptocurrency?</p>
                    <div className=''>
                        <p className='fw-bold mt-2'>BTC Address</p>
                        <input type="text" className='form-control' />
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>ETH Address</p>
                        <input type="text" className='form-control' />
                        
                    </div>
                    <p className='fw-bold mt-2'>How did you communicate with the subject</p>
                    <select class="form-select"  aria-label="Default select example" >        
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>Twitter</option>
                    </select>
                    <div className=''>
                        <p className='fw-bold mt-2'>Type of Crypto Currency</p>
                        <select class="form-select"  aria-label="Default select example" >        
                        <option>Tether</option>
                        <option>Crypto</option>
                        <option>Wallet</option>
                    </select>
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Type of Exchange</p>
                        <select class="form-select"  aria-label="Default select example" >        
                        <option>Binance</option>
                        <option>Wallance</option>
                    </select>
                    </div>
                    <div className=''>
                        <p className='fw-bold mt-2'>Type of NFT</p>
                        <select class="form-select"  aria-label="Default select example" >        
                        <option>Music</option>
                        <option>Songs</option>
                        <option>Dramas</option>
                    </select>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                <button className='btn btn-primary w-100'>Submit</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
