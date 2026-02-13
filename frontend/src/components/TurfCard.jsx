import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./CSS/TurfCard.css";

const TurfCard = ({ turf }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user } = useContext(AuthContext);

  const handleSlotSelect = (index) => {
    if (!turf.slots[index].booked) {
      setSelectedSlot(index);
      setError("");
    }
  };

  const handleBooking = async () => {
    if (!user) {
      setError("Please login to book a turf");
      return;
    }

    if (selectedSlot === null) {
      setError("Please select a time slot");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          turfId: turf._id,
          slotTime: turf.slots[selectedSlot].time,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Booking successful!");
        setSelectedSlot(null);
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(data.message || "Booking failed");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="turf-card">
      <div className="turf-image">
        <img src={turf.images[0]} alt={turf.name} />
      </div>

      <div className="turf-info">
        <h2>{turf.name}</h2>
        <p className="location">📍 {turf.location}</p>
        <p className="price">₹{turf.pricePerHour}/hour</p>

        <div className="sports">
          <strong>Sports:</strong>
          {turf.sportsAvailable.map((sport, idx) => (
            <span key={idx} className="sport-badge">
              {sport}
            </span>
          ))}
        </div>

        <div className="slots">
          <strong>Available Slots:</strong>
          <div className="slot-grid">
            {turf.slots.map((slot, index) => (
              <button
                key={index}
                className={`slot-btn ${
                  slot.booked ? "booked" : ""
                } ${selectedSlot === index ? "selected" : ""}`}
                onClick={() => handleSlotSelect(index)}
                disabled={slot.booked}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <button
          className="book-btn"
          onClick={handleBooking}
          disabled={loading || selectedSlot === null}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default TurfCard;