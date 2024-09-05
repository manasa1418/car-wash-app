import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        carModel: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking Confirmed!\nName: ${formData.name}\nCar Model: ${formData.carModel}\nDate: ${formData.date}`);
        setFormData({
            name: '',
            carModel: '',
            date: '',
        });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book a Car Wash</h2>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Car Model</label>
                <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Booking Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BookingForm;
