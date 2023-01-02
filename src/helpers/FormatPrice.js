const FormatPrice = ({price}) => {
    return Intl.NumberFormat("ur-pk", {
        style:"currency",
        currency:"PKR",
        maximumFractionDigits: 2,
    }).format(price / 100);
};

export default FormatPrice;