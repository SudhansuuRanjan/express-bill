import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        currentDate: Date.now(),
        invoiceNumber: '',
        dateOfIssue: "",
        notes: '',
        buyerName: "",
        buyerEmail: "",
        buyerMobno: "",
        buyerAddress: "",
    });
    const [products, setProducts] = useState([]);
    const [storeInfo, setStoreInfo] = useState({
        name: '',
        address: '',
        logo: '',
        email: '',
        mobno: '',
        pincode: '',
        city: '',
        state: '',
        terms: '',
        clientNotes: '',
        showTerms: true,
        showClientNotes: true,
        currency: '₹',
        dateFormat: 'DD/MM/YYYY',
    });
    const [showReview, setShowReview] = useState(false);

    const [showBillingPercent, setShowBillingPercent] = useState({
        discount: false,
        tax: false,
        shipping: false,
    });

    const [discount, setDiscount] = useState({
        type: 'percent',
        value: "0"
    })

    const [tax, setTax] = useState({
        type: "percent",
        value: "0"
    })

    const [shipping, setShipping] = useState("0");

    const getTotalAmount = () => {
        const total = products.reduce((acc, it) => acc + it.total, 0);
        const applyDiscount = discount.type === "absolute" ? Number(discount.value) : (total * Number(discount.value) / 100);
        const totalAfterDiscount = total - applyDiscount;
        const applyTax = tax.type === "absolute" ? Number(tax.value) : (totalAfterDiscount * Number(tax.value) / 100);
        const grandTotal = (totalAfterDiscount + applyTax + Number(shipping)).toFixed(2);
        return { total, discount, tax, shipping, grandTotal: grandTotal ?? 0, discountAmount: applyDiscount, taxAmount: applyTax };
    };

    return (
        <AppContext.Provider value={{
            formData,
            setFormData,
            products,
            setProducts,
            storeInfo,
            setStoreInfo,
            showReview,
            setShowReview,
            showBillingPercent,
            setShowBillingPercent,
            discount,
            setDiscount,
            tax,
            setTax,
            shipping,
            setShipping,
            getTotalAmount,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;