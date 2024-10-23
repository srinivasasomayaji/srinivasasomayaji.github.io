function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'SRINIVASA resume.pdf'; // Replace with actual path
    link.download = 'Resume.pdf';
    link.click();
}

// Set the default page to show
document.getElementById('home').style.display = 'block';
