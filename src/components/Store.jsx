import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Store = () => {
    const { storeInfo, setStoreInfo } = useAppContext();
    const handleStoreChange = (e) => {
        const newValue = { ...storeInfo, [e.target.id]: e.target.value };
        setStoreInfo(newValue);
        localStorage.setItem('storeInfo', JSON.stringify(newValue));
    }

    useEffect(() => {
        let storeInfo = JSON.parse(localStorage.getItem('storeInfo'));
        if (storeInfo) {
            setStoreInfo(storeInfo);
        }
    }, []);

    return (
        <div className='flex gap-2 items-center justify-between p-3'>
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Store Logo</span>
                    </label>
                    <input id="logo" type="file" className="file-input
                            file-input-md file-input-bordered file-input-primary w-[19rem]" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Store Name</span>
                    </label>
                    <input value={storeInfo.name} id="name" onChange={handleStoreChange} type="text" placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input value={storeInfo.address} id="address" type="text" onChange={handleStoreChange} placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pin Code</span>
                    </label>
                    <input value={storeInfo.pincode} id="pincode" onChange={handleStoreChange} type="text" placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>
            </div>
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email Id</span>
                    </label>
                    <input value={storeInfo.email} id="email" onChange={handleStoreChange} type="text" placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mob No.</span>
                    </label>
                    <input value={storeInfo.mobno} id="mobno" onChange={handleStoreChange} type="text" placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">City</span>
                    </label>
                    <input value={storeInfo.city} id="city" onChange={handleStoreChange} type="text" placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">State</span>
                    </label>
                    <input value={storeInfo.state} id="state" onChange={handleStoreChange} type="text" placeholder="Type here" className="input input-bordered input-primary w-[19rem]" />
                </div>
            </div>
        </div>
    )
}

export default Store