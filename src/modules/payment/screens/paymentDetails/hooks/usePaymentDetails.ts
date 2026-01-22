import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  selectPaymentAmount,
  selectPromoCode,
  selectSchedulePayment,
  selectSaveAsTemplate,
  selectSelectedPaymentMethod,
  selectAvailableBalance,
  selectDailyLimitLeft,
  setPaymentAmount,
  setPromoCode,
  setSchedulePayment,
  setSaveAsTemplate,
  setSelectedPaymentMethod,
} from '@modules/payment/store';
import { paymentMethods } from '@modules/payment/store/initialData';
import type { PaymentStackParamList } from '@src/navigation/types';

type NavigationProp = NativeStackNavigationProp<PaymentStackParamList, 'PaymentReview'>;

export function usePaymentDetails() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const amount = useAppSelector(selectPaymentAmount);
  const promoCode = useAppSelector(selectPromoCode);
  const schedulePayment = useAppSelector(selectSchedulePayment);
  const saveAsTemplate = useAppSelector(selectSaveAsTemplate);
  const selectedPaymentMethod = useAppSelector(selectSelectedPaymentMethod);
  const availableBalance = useAppSelector(selectAvailableBalance);
  const dailyLimitLeft = useAppSelector(selectDailyLimitLeft);

  // Calculate fee estimate based on amount and selected payment method
  const feeEstimate = useMemo(() => {
    const amountNum = parseFloat(amount) || 0;
    const selectedMethod = paymentMethods.find((m) => m.id === selectedPaymentMethod);
    
    if (selectedMethod?.fee) {
      // If method has a fee (e.g., "-1% fee"), calculate it
      const feePercent = parseFloat(selectedMethod.fee.replace(/[^0-9.-]/g, '')) || 0;
      const fee = (amountNum * Math.abs(feePercent)) / 100;
      return fee.toFixed(2);
    }
    // Default fee calculation (1% of amount)
    const defaultFee = (amountNum * 0.01).toFixed(2);
    return defaultFee;
  }, [amount, selectedPaymentMethod]);

  // Calculate total (amount + fee)
  const total = useMemo(() => {
    const amountNum = parseFloat(amount) || 0;
    const feeNum = parseFloat(feeEstimate) || 0;
    return (amountNum + feeNum).toFixed(2);
  }, [amount, feeEstimate]);

  // Calculate points earned (1 point per 100 taka)
  const pointsEarned = useMemo(() => {
    const amountNum = parseFloat(amount) || 0;
    const points = Math.floor(amountNum / 100);
    return `+${points} pts`;
  }, [amount]);

  // Format balance and limit with currency symbol
  const formattedAvailableBalance = useMemo(() => {
    return `৳${parseFloat(availableBalance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [availableBalance]);

  const formattedDailyLimitLeft = useMemo(() => {
    return `৳${parseFloat(dailyLimitLeft).toLocaleString('en-US')}`;
  }, [dailyLimitLeft]);

  const formattedFeeEstimate = useMemo(() => {
    return `৳${parseFloat(feeEstimate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [feeEstimate]);

  const formattedTotal = useMemo(() => {
    return `৳${parseFloat(total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [total]);

  const handleAmountChange = (value: string) => {
    dispatch(setPaymentAmount(value));
  };

  const handleQuickAmount = (value: string) => {
    dispatch(setPaymentAmount(value));
  };

  const handleMaxAmount = () => {
    dispatch(setPaymentAmount('15000.00'));
  };

  const handlePromoCodeChange = (code: string) => {
    dispatch(setPromoCode(code));
  };

  const handleApplyPromoCode = () => {
    // TODO: Implement promo code validation and application logic
    console.log('Applying promo code:', promoCode);
  };

  const handleSchedulePaymentChange = (value: boolean) => {
    dispatch(setSchedulePayment(value));
  };

  const handleSaveAsTemplateChange = (value: boolean) => {
    dispatch(setSaveAsTemplate(value));
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    dispatch(setSelectedPaymentMethod(methodId));
  };

  const handleContinue = () => {
    navigation.navigate('PaymentReview');
  };

  return {
    amount,
    promoCode,
    schedulePayment,
    saveAsTemplate,
    selectedPaymentMethod,
    paymentMethods,
    availableBalance: formattedAvailableBalance,
    dailyLimitLeft: formattedDailyLimitLeft,
    feeEstimate: formattedFeeEstimate,
    total: formattedTotal,
    pointsEarned,
    handleAmountChange,
    handleQuickAmount,
    handleMaxAmount,
    handlePromoCodeChange,
    handleApplyPromoCode,
    handleSchedulePaymentChange,
    handleSaveAsTemplateChange,
    handlePaymentMethodSelect,
    handleContinue,
  };
}
