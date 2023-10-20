import './PaymentModal.scss';

const PaymentModal = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="paymentModal">
      <div className="modal">
        <span className="close" onClick={handleClose}>
          X
        </span>
        <div className="">a</div>
      </div>
    </div>
  );
};

export default PaymentModal;
