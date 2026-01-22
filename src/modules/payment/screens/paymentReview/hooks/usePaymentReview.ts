import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  selectPaymentAmount,
  selectSelectedPaymentMethod,
  selectSelectedMerchant,
  selectAuthType,
  selectPinDigits,
  selectShowPin,
  selectPaymentDetails,
  setAuthType,
  addPinDigit,
  removePinDigit,
  clearPin,
  togglePinVisibility,
} from '@modules/payment/store';
import { paymentMethods } from '@modules/payment/store/initialData';

export function usePaymentReview() {
  const dispatch = useAppDispatch();
  const amount = useAppSelector(selectPaymentAmount);
  const selectedPaymentMethod = useAppSelector(selectSelectedPaymentMethod);
  const selectedMerchant = useAppSelector(selectSelectedMerchant);
  const authType = useAppSelector(selectAuthType);
  const pinDigits = useAppSelector(selectPinDigits);
  const showPin = useAppSelector(selectShowPin);
  const paymentDetails = useAppSelector(selectPaymentDetails);

  // Calculate fee estimate
  const feeEstimate = useMemo(() => {
    const amountNum = parseFloat(amount) || 0;
    const selectedMethod = paymentMethods.find((m) => m.id === selectedPaymentMethod);

    if (selectedMethod?.fee) {
      const feePercent = parseFloat(selectedMethod.fee.replace(/[^0-9.-]/g, '')) || 0;
      const fee = (amountNum * Math.abs(feePercent)) / 100;
      return fee.toFixed(2);
    }
    const defaultFee = (amountNum * 0.01).toFixed(2);
    return defaultFee;
  }, [amount, selectedPaymentMethod]);

  // Calculate total
  const total = useMemo(() => {
    const amountNum = parseFloat(amount) || 0;
    const feeNum = parseFloat(feeEstimate) || 0;
    return (amountNum + feeNum).toFixed(2);
  }, [amount, feeEstimate]);

  // Calculate points earned
  const pointsEarned = useMemo(() => {
    const amountNum = parseFloat(amount) || 0;
    const points = Math.floor(amountNum / 100);
    return `+${points} pts`;
  }, [amount]);

  // Format values
  const formattedAmount = useMemo(() => {
    return `৳${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [amount]);

  const formattedFee = useMemo(() => {
    return `৳${parseFloat(feeEstimate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [feeEstimate]);

  const formattedTotal = useMemo(() => {
    return `৳${parseFloat(total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [total]);

  // Get payment method info
  const paymentMethod = useMemo(() => {
    return paymentMethods.find((m) => m.id === selectedPaymentMethod);
  }, [selectedPaymentMethod]);

  const handleAuthTypeChange = (type: 'faceId' | 'pin') => {
    dispatch(setAuthType(type));
  };

  const handleUseFaceId = () => {
    // TODO: Implement Face ID authentication
    console.log('Using Face ID');
  };

  const handleChangeAmount = () => {
    // TODO: Navigate back to payment details
    console.log('Change amount');
  };

  const handleChangeMerchant = () => {
    // TODO: Navigate back to merchant selection
    console.log('Change merchant');
  };

  const handleChangePaymentMethod = () => {
    // TODO: Navigate back to payment details
    console.log('Change payment method');
  };

  const handlePinDigitPress = (digit: string) => {
    if (pinDigits.length < 6) {
      dispatch(addPinDigit(digit));
      // Auto-submit when 6 digits are entered
      if (pinDigits.length === 5) {
        // TODO: Validate and process PIN
        console.log('PIN entered:', [...pinDigits, digit].join(''));
      }
    }
  };

  const handlePinDelete = () => {
    dispatch(removePinDigit());
  };

  const handlePinClear = () => {
    dispatch(clearPin());
  };

  const handleTogglePinVisibility = () => {
    dispatch(togglePinVisibility());
  };

  const handleForgotPin = () => {
    // TODO: Navigate to forgot PIN screen
    console.log('Forgot PIN');
  };

  return {
    amount: formattedAmount,
    fee: formattedFee,
    total: formattedTotal,
    pointsEarned,
    selectedMerchant,
    paymentMethod,
    authType,
    showPin,
    handleAuthTypeChange,
    handleUseFaceId,
    handleChangeAmount,
    handleChangeMerchant,
    handleChangePaymentMethod,
    pinDigits,
    handlePinDigitPress,
    handlePinDelete,
    handlePinClear,
    handleTogglePinVisibility,
    handleForgotPin,
  };
}
