import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

function BasicExample() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const d = new Date();
  return (
    
    <div style={{ backgroundColor: '#f5f5f5', width: '100%', padding: '20px', position: 'fixed'}}>
        <div className='footer' style={{ textAlign: 'center', height: '20px'}}>
            <span>Copyright © {d.getFullYear()} - All rights reserved </span>
        </div>
    </div>
    
  );
}

export default BasicExample;