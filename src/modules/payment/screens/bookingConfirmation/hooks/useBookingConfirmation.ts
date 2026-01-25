import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  selectBookingConfirmation,
  selectSelectedMerchant,
  selectSelectedPaymentMethod,
  toggleBookingRecurring,
} from '@modules/payment/store';
import { paymentMethods } from '@modules/payment/store/initialData';

export function useBookingConfirmation() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const bookingConfirmation = useAppSelector(selectBookingConfirmation);
  const selectedMerchant = useAppSelector(selectSelectedMerchant);
  const selectedPaymentMethod = useAppSelector(selectSelectedPaymentMethod);

  const paymentMethod = useMemo(() => {
    return paymentMethods.find((method) => method.id === selectedPaymentMethod) ?? null;
  }, [selectedPaymentMethod]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleInfo = () => {
    // TODO: show info/help
    console.log('Info pressed');
  };

  const handleDownloadPdf = () => {
    console.log('Download PDF');
  };

  const handleShare = () => {
    console.log('Share');
  };

  const handleRepeat = () => {
    console.log('Repeat payment');
  };

  const handleFavorite = () => {
    console.log('Favorite');
  };

  const handleToggleRecurring = () => {
    dispatch(toggleBookingRecurring());
  };

  const handleCategorize = () => {
    console.log('Categorize payment');
  };

  const handleReportIssue = () => {
    console.log('Report issue');
  };

  const handleBackToHome = () => {
    console.log('Back to Home');
  };

  const handleNewPayment = () => {
    console.log('New Payment');
  };

  const handleCopyTransactionId = () => {
    console.log('Copy transaction ID');
  };

  return {
    bookingConfirmation,
    selectedMerchant,
    paymentMethod,
    handleBack,
    handleInfo,
    handleDownloadPdf,
    handleShare,
    handleRepeat,
    handleFavorite,
    handleToggleRecurring,
    handleCategorize,
    handleReportIssue,
    handleBackToHome,
    handleNewPayment,
    handleCopyTransactionId,
  };
}
