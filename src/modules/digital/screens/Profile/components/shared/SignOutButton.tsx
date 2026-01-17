import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type SignOutButtonProps = {
    onPress?: () => void
}

export const SignOutButton: React.FC<SignOutButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            className="mt-6 h-10 flex-row items-center justify-center rounded-[8.35px] border border-[#d4183d] bg-white"
        >
            <Text className="text-base font-semibold text-[#d4183d]">Sign Out</Text>
        </TouchableOpacity>
    )
}


