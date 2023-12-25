import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const AddReservationCard = ({ visible, onClose }) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedHour, setSelectedHour] = useState('');
    const [duration, setDuration] = useState(1);
    const [price, setPrice] = useState(0);

    if (!visible) return null;

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
    };

    const handleHourChange = (e) => {
        const hour = e.target.value;
        setSelectedHour(hour);
        calculatePrice(hour, duration);
    };

    const handleDurationChange = (e) => {
        const selectedDuration = parseInt(e.target.value, 10);
        setDuration(selectedDuration);
        calculatePrice(selectedHour, selectedDuration);
    };

    const calculatePrice = (selectedHour, selectedDuration) => {
        const hourlyRate = 10;
        const totalPrice = hourlyRate * selectedDuration;
        setPrice(totalPrice);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', {
            selectedDate,
            selectedHour,
            duration,
            price,
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[1000]">
            <div className="relative z-10 max-w-md p-4 text-sm ">
                <div className="flex justify-center items-center">
                    <div className="max-w-md relative w-full p-6 bg-white rounded-md">
                        <button className="flex absolute text-xl text-orange-400 top-3 right-3" onClick={onClose}>
                            <FaTimes />
                        </button>
                        <h2 className="text-2xl mb-2 text-center font-bold text-orange-400">Add Reservation</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="my-4">
                                <label htmlFor="date" className="text-gray-500 text-sm">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    placeholder="YYYY-MM-DD"
                                    className="border-2 border-gray-500 rounded-xl px-4 py-2 text-sm transition-all w-full duration-300 focus:outline-none"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    required
                                />
                            </div>
                            <div className="my-4">
                                <label htmlFor="hour" className="text-gray-500 text-sm">
                                    Hour
                                </label>
                                <input
                                    type="time"
                                    id="hour"
                                    className="border-2 border-gray-500 rounded-xl px-4 py-2 text-sm transition-all w-full duration-300 focus:outline-none"
                                    value={selectedHour}
                                    onChange={handleHourChange}
                                    required
                                />
                            </div>
                            <div className="my-4">
                                <label htmlFor="duration" className="text-gray-500 text-sm">
                                    Duration(min):
                                </label>
                                <input
                                    type="number"
                                    id="duration"
                                    className="border-2 border-gray-500 rounded-xl px-4 py-2 text-sm transition-all w-full duration-300 focus:outline-none"
                                    value={duration}
                                    onChange={handleDurationChange}
                                    required
                                />
                            </div>
                            <center className="my-4">
                                <label htmlFor="price" className="text-gray-500 text-sm">
                                    Price
                                </label>
                                <div className="text-lg font-bold text-orange-400">{`$${price.toFixed(2)}`}</div>
                            </center>
                            <div className="my-4">
                                <button
                                    type="submit"
                                    className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:text-cyan-900 duration-300"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReservationCard;
