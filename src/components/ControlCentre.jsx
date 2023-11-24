import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { FaSave } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const ControlCentre = () => {
    const { storeInfo, setStoreInfo, setShowReview } = useAppContext();

    const handleRefresh = () => {
        window.location.reload();
    };

    const currenciesWithSymbol = [
        { symbol: '₹', code: 'INR' },
        { symbol: '€', code: 'EUR' },
        { symbol: '$', code: 'USD' },
        { symbol: '£', code: 'GBP' },
        { symbol: '₩', code: 'KRW' }
    ]

    const dateFormats = [
        'DD-MM-YYYY',
        'MM-DD-YYYY',
        'YYYY-MM-DD',
        'DD-MM-YYYY',
        'MM-DD-YYYY',
        'YYYY-MM-DD',
    ]

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
                <select value={storeInfo.currency} onChange={(e) => {
                    const newVal = { ...storeInfo, currency: e.target.value };
                    setStoreInfo(newVal);
                    localStorage.setItem('storeInfo', JSON.stringify(newVal));
                }} className="select select-bordered">
                    {currenciesWithSymbol.map((currency, index) => (
                        <option key={index} value={currency.symbol}>{currency.symbol} - {currency.code}</option>
                    ))}
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Date Format</span>
                </label>
                <select value={storeInfo.dateFormat} onChange={(e) => {
                    const newVal = { ...storeInfo, dateFormat: e.target.value };
                    setStoreInfo(newVal);
                    localStorage.setItem('storeInfo', JSON.stringify(newVal));
                }} className="select select-bordered">
                    {dateFormats.map((format, index) => (
                        <option key={index} value={format}>{format}</option>
                    ))}
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
