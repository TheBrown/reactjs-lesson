const studentList = [
    { name: "Saleumsack", id: 1, emoji: "", qty: 0 },
    { name: "John", id: 2 },
    { name: "Pinky", id: 3 },
    { name: "Cindy", id: 4 },
]

function StudentCard({ name }) {
    return (
        <div style={{ background: "white", color: "black" }}>
            <h2 style={{ color: "red" }}>My name is {name}</h2>
            <h2 style={{ color: "black" }}>I am a student</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            {studentList.map(item => (
                <StudentCard name={item.name} />
            ))}
        </div>
    );
}