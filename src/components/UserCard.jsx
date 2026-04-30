function UserCard({ user }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
            <p>rating: {user.rating}</p>
            <p>verified: {user.verified.toString()}</p>

            {user.verified && <p>✅ Verified user</p>}
            {user.rating >= 4 && <p>⭐ Top rated</p>}
        </div>
    );
}

export default UserCard;