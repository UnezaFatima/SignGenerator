const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('signature-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signature-name').value;
    const font = document.getElementById('font').value;
    const color = document.getElementById('color-picker').value;
    const size = document.getElementById('size').value;
    const slope = document.getElementById('slope').value;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 400;
    canvas.height = 200;
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `${size}px ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(slope * Math.PI / 180);
    ctx.fillText(name, 0, 0);
    ctx.restore();
    
    const outputDiv = document.getElementById('signature-output');
    outputDiv.innerHTML = '';
    outputDiv.appendChild(canvas);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = 'signature.png';
    downloadLink.textContent = 'Download Signature';
    downloadLink.className = 'download-btn';
    outputDiv.appendChild(downloadLink);
});

