import { useState } from "react";

interface OTPPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (otp: string) => void;
}

export default function OTPPopup({ isOpen, onClose, onSubmit }: OTPPopupProps) {
    const [otp, setOtp] = useState("");

    const handleSubmit = () => {
        if (otp.length === 6) {
            onSubmit(otp);
        } else {
            alert("Please enter a valid 6-digit OTP");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-center text-xl font-semibold">Enter OTP</h2>
                <div className="flex flex-col gap-4 mt-4">
                    <input
                        type="text"
                        maxLength={6}
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="text-center text-lg tracking-widest border p-2 rounded-md w-full"
                    />
                    <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-md">Submit</button>
                    <button onClick={onClose} className="w-full bg-gray-300 text-black py-2 rounded-md">Cancel</button>
                </div>
            </div>
        </div>
    );
}
