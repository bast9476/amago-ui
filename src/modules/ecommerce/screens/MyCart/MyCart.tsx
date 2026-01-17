import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import MainHeader from '@modules/common/components/MainHeader';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  removeFromCart,
  bootstrapCartData,
} from '@modules/ecommerce/store';
import {
  incrementQuantity as incrementCartQuantity,
  decrementQuantity as decrementCartQuantity,
} from '@modules/ecommerce/store/slices/cartSlice';
import { selectCartItems, selectCartTotal } from '@modules/ecommerce/store/selectors/cartSelectors';
import { CartItem, CheckoutModal } from './components';

export default function MyCart() {
    const dispatch = useAppDispatch();

    // Redux state
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(selectCartTotal);

    // Bootstrap cart data on mount
    useEffect(() => {
        (dispatch as any)(bootstrapCartData());
    }, [dispatch]);

    const headerProps = {
        title: 'My Cart',
        variant: 'white' as const,
        rightIcon: {
            type: 'info' as const,
            onPress: () => {
                // Info button pressed
            },
        },
    };

    const handleDelete = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleIncreaseQuantity = (id: string) => {
        dispatch(incrementCartQuantity(id));
    };

    const handleDecreaseQuantity = (id: string) => {
        dispatch(decrementCartQuantity(id));
    };

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };

    const handleGoToPayment = () => {
        setShowCheckoutModal(false);
        // TODO: Navigate to payment screen
    };

    return (
        <View className="flex-1 bg-white">
            <MainHeader {...headerProps} />
            <ScrollView 
                className="flex-1" 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 100 }}
            >
                <View className="flex-col justify-start items-center w-full">
                    {cartItems.map((item, index) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            imageSource={item.imageSource}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            quantity={item.quantity}
                            onDelete={handleDelete}
                            onIncreaseQuantity={handleIncreaseQuantity}
                            onDecreaseQuantity={handleDecreaseQuantity}
                            index={index}
                        />
                    ))}
                </View>
            </ScrollView>

            {/* Fixed Checkout Button at Bottom */}
            <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-8 border-t border-[#fafafb]">
                <TouchableOpacity
                    onPress={handleCheckout}
                    activeOpacity={0.8}
                    className="w-full h-14 rounded-lg overflow-hidden relative"
                >
                    {/* Gradient Background */}
                    <View style={StyleSheet.absoluteFill} pointerEvents="none">
                        <Svg
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: '100%',
                                height: '100%',
                            }}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <Defs>
                                <LinearGradient
                                    id="checkoutGradient"
                                    x1="0%"
                                    y1="100%"
                                    x2="100%"
                                    y2="0%"
                                    gradientUnits="objectBoundingBox"
                                >
                                    <Stop offset="57.95%" stopColor="#07b556" />
                                    <Stop offset="124.21%" stopColor="#36d97f" />
                                </LinearGradient>
                            </Defs>
                            <Rect x="0" y="0" width="100" height="100" fill="url(#checkoutGradient)" />
                        </Svg>
                    </View>

                    {/* Button Content */}
                    <View className="flex-row items-center justify-center h-full px-2.5 py-3.5 relative" style={{ zIndex: 10 }}>
                        <Text className="text-lg font-medium text-white">
                            Go to Checkout
                        </Text>
                        
                        {/* Price Badge */}
                        <View className="absolute right-2.5 top-[19px] flex-col justify-center items-center overflow-hidden px-[6px] py-[1px] rounded bg-[#b0e3c9]">
                            <Text className="text-sm font-medium text-[#003a1c]">
                                ৳{totalPrice}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Checkout Modal */}
            <CheckoutModal
                visible={showCheckoutModal}
                onClose={() => setShowCheckoutModal(false)}
                onGoToPayment={handleGoToPayment}
            />
        </View>
    );
}

