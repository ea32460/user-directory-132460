


import { useState } from "react";

function RegisterUser({ addUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [rating, setRating] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setError("Name is required");
            return;
        }

        if (rating < 1 || rating > 5) {
            setError("Rating must be between 1 and 5");
            return;
        }

        addUser({
            name,
            email,
            phone,
            website: "N/A",
            rating: Number(rating),
            verified,
        });

        setName("");
        setEmail("");
        setPhone("");
        setRating("");
        setVerified(false);
        setError("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Register User</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />

            <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <br />

            <label>
                Verified:
                <input
                    type="checkbox"
                    checked={verified}
                    onChange={(e) => setVerified(e.target.checked)}
                />
            </label>
            <br />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterUser;