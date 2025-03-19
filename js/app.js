// Store subjects, attendance, and timetable data
let subjects = [
    'Physics',
    'Maths 2',
    'Electronics',
    'Cyber Security',
    'Computer Science',
    'Maths 1' // M1 for backlog
];
let attendanceData = [];
let timetableData = {
    saturday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '11:00', endTime: '12:00' },
        { subject: 'Cyber Security', startTime: '12:50', endTime: '13:50' },
        { subject: 'Computer Science', startTime: '13:50', endTime: '14:50' },
        { subject: 'Maths 1', startTime: '16:05', endTime: '17:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ],
    sunday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '11:00', endTime: '12:00' },
        { subject: 'Cyber Security', startTime: '12:50', endTime: '13:50' },
        { subject: 'Computer Science', startTime: '13:50', endTime: '14:50' },
        { subject: 'Maths 1', startTime: '16:05', endTime: '17:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ],
    monday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '11:00', endTime: '12:00' },
        { subject: 'Cyber Security', startTime: '12:50', endTime: '13:50' },
        { subject: 'Computer Science', startTime: '13:50', endTime: '14:50' },
        { subject: 'Maths 1', startTime: '16:05', endTime: '17:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ],
    tuesday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '11:00', endTime: '12:00' },
        { subject: 'Cyber Security', startTime: '12:50', endTime: '13:50' },
        { subject: 'Computer Science', startTime: '13:50', endTime: '14:50' },
        { subject: 'Maths 1', startTime: '16:05', endTime: '17:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ],
    wednesday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '11:00', endTime: '12:00' },
        { subject: 'Cyber Security', startTime: '12:50', endTime: '13:50' },
        { subject: 'Computer Science', startTime: '13:50', endTime: '14:50' },
        { subject: 'Maths 1', startTime: '16:05', endTime: '17:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ],
    thursday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '11:00', endTime: '12:00' },
        { subject: 'Cyber Security', startTime: '12:50', endTime: '13:50' },
        { subject: 'Computer Science', startTime: '13:50', endTime: '14:50' },
        { subject: 'Maths 1', startTime: '16:05', endTime: '17:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ],
    friday: [
        { subject: 'Maths 1', startTime: '05:20', endTime: '07:20' },
        { subject: 'Physics', startTime: '09:00', endTime: '10:00' },
        { subject: 'Maths 2', startTime: '10:00', endTime: '11:00' },
        { subject: 'Electronics', startTime: '12:30', endTime: '13:30' },
        { subject: 'Cyber Security', startTime: '16:05', endTime: '17:05' },
        { subject: 'Computer Science', startTime: '17:05', endTime: '18:05' },
        { subject: 'Coding Practice', startTime: '18:50', endTime: '20:50' }
    ]
};

function loadData() {
    const savedAttendance = localStorage.getItem('attendanceData');
    attendanceData = savedAttendance ? JSON.parse(savedAttendance) : [];

    const savedSubjects = localStorage.getItem('subjects');
    subjects = savedSubjects ? JSON.parse(savedSubjects) : [
        'Physics', 'Maths 2', 'Electronics', 'Cyber Security', 'Computer Science', 'Maths 1'
    ];

    // Reset timetableData to default if not present or invalid
    const savedTimetable = localStorage.getItem('timetableData');
    timetableData = savedTimetable && Object.keys(JSON.parse(savedTimetable)).length > 0 
        ? JSON.parse(savedTimetable) 
        : timetableData;

    console.log('Loaded timetableData:', timetableData); // Debug
}

function saveData() {
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
    localStorage.setItem('subjects', JSON.stringify(subjects));
    localStorage.setItem('timetableData', JSON.stringify(timetableData));
}

// Initialize the application
function initApp() {
    console.log('Initializing app...');
    loadData();

    const currentDate = new Date();
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString();
    document.getElementById('date').valueAsDate = currentDate;

    populateSubjectDropdowns();
    displayTodayTimetable(); // Ensure timetable displays on load
    displayAttendanceHistory();
    updateAttendanceStats();

    setupEventListeners();
}

// Mark attendance
function markAttendanceFromTimetable(subject, status) {
    const date = document.getElementById('date').value;
    const notes = document.getElementById('notes').value;

    if (!date || !subject) {
        alert('Please fill in Date and Subject!');
        return;
    }

    const attendanceRecord = {
        date,
        day: new Date(date).toLocaleString('en-US', { weekday: 'long' }).toLowerCase(),
        subject,
        status,
        notes
    };

    attendanceData.push(attendanceRecord);
    saveData();

    displayAttendanceHistory();
    updateAttendanceStats();

    document.getElementById('notes').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('status').value = 'present';
    animateFormReset();
}

function animateFormReset() {
    const form = document.querySelector('.attendance-form');
    form.classList.add('fade-out');
    setTimeout(() => {
        form.classList.remove('fade-out');
        form.classList.add('fade-in-up');
        setTimeout(() => form.classList.remove('fade-in-up'), 500);
    }, 300);
}

// Update attendance statistics with animation
function updateAttendanceStats() {
    let presentCount = 0, absentCount = 0, lateCount = 0;
    attendanceData.forEach(item => {
        if (item.status === 'present') presentCount++;
        else if (item.status === 'absent') absentCount++;
        else if (item.status === 'late') lateCount++;
    });

    const totalClasses = presentCount + absentCount + lateCount;
    const attendancePercentage = totalClasses > 0 ? Math.round((presentCount / totalClasses) * 100) : 0;

    animateStatUpdate('present-count', presentCount);
    animateStatUpdate('absent-count', absentCount);
    animateStatUpdate('late-count', lateCount);
    animateStatUpdate('attendance-percentage', `${attendancePercentage}%`);
}

function animateStatUpdate(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.classList.add('pop-in');
    setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('pop-in');
    }, 300);
}

// Populate subject dropdowns
function populateSubjectDropdowns() {
    const dropdowns = [
        document.getElementById('subject'),
        document.getElementById('edit-subject'),
        document.getElementById('class-subject'),
        document.getElementById('filter-subject')
    ];

    dropdowns.forEach(dropdown => {
        if (dropdown && dropdown.id !== 'filter-subject') {
            dropdown.innerHTML = '<option value="">Select a subject</option>';
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                dropdown.appendChild(option);
            });
        } else if (dropdown && dropdown.id === 'filter-subject') {
            dropdown.innerHTML = '<option value="all">All Subjects</option>';
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                dropdown.appendChild(option);
            });
        }
    });
}

// Display today's timetable with debugging
function displayTodayTimetable() {
    const today = new Date().toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
    const display = document.getElementById('timetable-display');
    
    if (!display) {
        console.error('Timetable display element not found!');
        return;
    }

    console.log('Current day:', today); // Debug
    console.log('Timetable for today:', timetableData[today]); // Debug

    display.innerHTML = `<h3>Today's Schedule (${today.charAt(0).toUpperCase() + today.slice(1)})</h3>`;

    if (timetableData[today] && timetableData[today].length > 0) {
        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';
        
        timetableData[today].forEach(cls => {
            const li = document.createElement('li');
            li.className = 'class-item';
            li.innerHTML = `<strong>${cls.startTime} - ${cls.endTime}</strong>: ${cls.subject}`;
            ul.appendChild(li);
            li.classList.add('slide-in-right');
        });
        display.appendChild(ul);
    } else {
        display.innerHTML += '<p>No study scheduled for today.</p>';
    }
}

// Display attendance history with animations
function displayAttendanceHistory() {
    const tbody = document.getElementById('attendance-data');
    tbody.innerHTML = '';
    const filteredData = filterAttendanceData();

    filteredData.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.date}</td>
            <td>${record.day}</td>
            <td>${record.subject}</td>
            <td class="status-${record.status}">${record.status}</td>
            <td>${record.notes || '-'}</td>
            <td><button class="action-btn" onclick="editAttendance(${index})">Edit</button></td>
        `;
        tbody.appendChild(tr);
        tr.classList.add('slide-in-left');
    });
}

function filterAttendanceData() {
    const monthFilter = document.getElementById('filter-month').value;
    const subjectFilter = document.getElementById('filter-subject').value;

    return attendanceData.filter(record => {
        const date = new Date(record.date);
        const monthMatch = monthFilter === 'all' || date.getMonth() == monthFilter;
        const subjectMatch = subjectFilter === 'all' || record.subject === subjectFilter;
        return monthMatch && subjectMatch;
    });
}

// Edit attendance
function editAttendance(index) {
    const record = attendanceData[index];
    const modal = document.getElementById('edit-modal');
    document.getElementById('edit-date').value = record.date;
    document.getElementById('edit-subject').value = record.subject;
    document.getElementById('edit-status').value = record.status;
    document.getElementById('edit-notes').value = record.notes || '';
    modal.style.display = 'block';

    document.getElementById('update-attendance').onclick = () => {
        attendanceData[index] = {
            ...record,
            subject: document.getElementById('edit-subject').value,
            status: document.getElementById('edit-status').value,
            notes: document.getElementById('edit-notes').value
        };
        saveData();
        displayAttendanceHistory();
        updateAttendanceStats();
        modal.style.display = 'none';
    };
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('submit-attendance').addEventListener('click', (e) => {
        e.preventDefault();
        const subject = document.getElementById('subject').value;
        const status = document.getElementById('status').value;
        if (subject) markAttendanceFromTimetable(subject, status);
    });

    document.getElementById('filter-month').addEventListener('change', displayAttendanceHistory);
    document.getElementById('filter-subject').addEventListener('change', displayAttendanceHistory);
    document.getElementById('clear-filters').addEventListener('click', () => {
        document.getElementById('filter-month').value = 'all';
        document.getElementById('filter-subject').value = 'all';
        displayAttendanceHistory();
    });

    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    document.getElementById('open-timetable-setup').addEventListener('click', () => {
        document.getElementById('timetable-modal').style.display = 'block';
        updateSubjectsList();
    });

    document.getElementById('add-subject-btn').addEventListener('click', () => {
        const newSubject = document.getElementById('add-subject').value.trim();
        if (newSubject && !subjects.includes(newSubject)) {
            subjects.push(newSubject);
            saveData();
            populateSubjectDropdowns();
            updateSubjectsList();
            document.getElementById('add-subject').value = '';
        }
    });

    document.querySelectorAll('.add-class-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentDay = btn.dataset.day;
            document.getElementById('add-class-modal').style.display = 'block';
        });
    });

    document.getElementById('add-class-confirm').addEventListener('click', () => {
        const cls = {
            subject: document.getElementById('class-subject').value,
            startTime: document.getElementById('class-start-time').value,
            endTime: document.getElementById('class-end-time').value
        };
        if (cls.subject && cls.startTime && cls.endTime) {
            if (!timetableData[currentDay]) timetableData[currentDay] = [];
            timetableData[currentDay].push(cls);
            saveData();
            updateDaySchedule(currentDay);
            document.getElementById('add-class-modal').style.display = 'none';
            displayTodayTimetable();
        }
    });

    document.getElementById('save-timetable').addEventListener('click', () => {
        document.getElementById('timetable-modal').style.display = 'none';
        displayTodayTimetable();
    });
}

let currentDay = '';
function updateSubjectsList() {
    const list = document.getElementById('subjects-list');
    list.innerHTML = '';
    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.innerHTML = `${subject} <span class="remove-subject" onclick="removeSubject('${subject}')">×</span>`;
        list.appendChild(li);
        li.classList.add('fade-in');
    });
}

function removeSubject(subject) {
    subjects = subjects.filter(s => s !== subject);
    saveData();
    populateSubjectDropdowns();
    updateSubjectsList();
}

function updateDaySchedule(day) {
    const schedule = document.getElementById(`${day}-schedule`);
    schedule.innerHTML = '';
    if (timetableData[day]) {
        timetableData[day].forEach((cls, index) => {
            const item = document.createElement('div');
            item.className = 'schedule-item';
            item.innerHTML = `${cls.subject} (${cls.startTime} - ${cls.endTime}) <span class="remove-class" onclick="removeClass('${day}', ${index})">×</span>`;
            schedule.appendChild(item);
            item.classList.add('slide-in-right');
        });
    }
}

function removeClass(day, index) {
    timetableData[day].splice(index, 1);
    if (timetableData[day].length === 0) delete timetableData[day];
    saveData();
    updateDaySchedule(day);
    displayTodayTimetable();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    initApp();
});
