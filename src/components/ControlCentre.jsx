import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { FaSave } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const ControlCentre = () => {
    const { storeInfo, setStoreInfo, setShowReview } = useAppContext();

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="flex w-full flex-col items-center justify-center gap-5 pb-5">
            <button onClick={handleRefresh} className="btn btn-primary btn-lg btn-outline w-full">
                + New Invoice
            </button>
            <button className="btn btn-primary btn-warning btn-lg w-full">
                <FaSave /> Save Invoice
            </button>
            <div className="flex w-full justify-between">
                <button onClick={() => setShowReview(prev => !prev)} className="btn w-full btn-info">
                    <FaDownload /> Preview & Download
                </button>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Currency</span>
                </label>
                <select className="select select-bordered">
                    <option selected>INR</option>
                    <option>USD</option>
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Date Format</span>
                </label>
                <select className="select select-bordered">
                    <option selected>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>DD-MM-YYYY</option>
                    <option>MM-DD-YYYY</option>
                </select>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col w-full">
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Payments Terms</span>
                        <input
                            onChange={(e) => {
                                let newVal = { ...storeInfo, showTerms: e.target.checked };
                                setStoreInfo(newVal);
                                localStorage.setItem('storeInfo', JSON.stringify(newVal));
                            }}
                            type="checkbox"
                            className="toggle toggle-primary"
                            checked={storeInfo.showTerms}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Client Notes</span>
                        <input
                            onChange={(e) => {
                                let newVal = { ...storeInfo, showClientNotes: e.target.checked };
                                setStoreInfo(newVal);
                                localStorage.setItem('storeInfo', JSON.stringify(newVal));
                            }}
                            type="checkbox"
                            className="toggle toggle-primary"
                            checked={storeInfo.showClientNotes}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ControlCentre;
