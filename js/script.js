function markAttendance() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;

  let records = JSON.parse(localStorage.getItem('attendance')) || [];
  records.push({name, date, status});
  localStorage.setItem('attendance', JSON.stringify(records));
  document.getElementById('attendanceForm').reset();

  // Update displayed entries
  displayEntries();
}

function displayEntries() {
  const list = document.getElementById('attendanceList');
  list.innerHTML = '';
  
  JSON.parse(localStorage.getItem('attendance') || '[]').forEach(record => {
    const entry = document.createElement('div');
    entry.className = 'attendance-entry';
    entry.innerHTML = `
      <p><strong>Name:</strong> ${record.name}</p>
      <p><strong>Date:</strong> ${record.date}</p>
      <p><strong>Status:</strong> ${record.status}</p>
      <hr>
    `;
    list.appendChild(entry);
  });
}

// Initial load
window.addEventListener('DOMContentLoaded', displayEntries);
