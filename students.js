// This is the "database" for your students page.
// To add a new student, copy an existing entry and change the details.
// Make sure the 'photo' name matches the image file in your 'images' folder.

const students = [
    {
        name: 'Aarav Chen',
        class: 'Intermediate Group',
        photo: 'student1.jpg'
    },
    {
        name: 'Priya Patel',
        class: 'Beginner Group',
        photo: 'student2.jpg'
    },
    {
        name: 'Rohan Kumar',
        class: 'Advanced Group',
        photo: 'student3.jpg'
    },
    {
        name: 'Zara Singh',
        class: 'Intermediate Group',
        photo: 'student4.jpg'
    },
    {
        name: 'Liam Das',
        class: 'Beginner Group',
        photo: 'student5.jpg'
    },
    {
        name: 'Anika Sharma',
        class: 'Advanced Group',
        photo: 'student6.jpg'
    },
    {
        name: 'Advik Reddy',
        class: 'Intermediate Group',
        photo: 'student7.jpg'
    },
    {
        name: 'Ishani Gupta',
        class: 'Beginner Group',
        photo: 'student8.jpg'
    }
    // Add more students here following the same format
    // Example:
    // {
    //     name: 'New Student Name',
    //     class: 'Their Class',
    //     photo: 'new_student_photo.jpg'
    // },
];


// This function runs when the students.html page loads.
// It reads the 'students' array above and builds the HTML for each student.
document.addEventListener('DOMContentLoaded', () => {
    const studentGrid = document.getElementById('student-grid');
    if (studentGrid) {
        students.forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.className = 'card-bg rounded-lg p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform';

            const studentImage = document.createElement('img');
            studentImage.className = 'w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white object-cover';
            studentImage.src = `images/${student.photo}`;
            studentImage.alt = student.name;
            // Fallback image if the student's photo is not found
            studentImage.onerror = () => {
                studentImage.src = 'https://placehold.co/200x200/D7CCC8/4A2E2A?text=Photo';
            };


            const studentName = document.createElement('h4');
            studentName.className = 'text-xl font-bold';
            studentName.textContent = student.name;

            const studentClass = document.createElement('p');
            studentClass.className = 'text-sm text-accent-brown';
            studentClass.textContent = student.class;

            studentCard.appendChild(studentImage);
            studentCard.appendChild(studentName);
            studentCard.appendChild(studentClass);

            studentGrid.appendChild(studentCard);
        });
    }
});

