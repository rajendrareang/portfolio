import React from 'react';
import logo from './logo.svg';
import './App.css';

function Logo() {
  return (
    <h1 style={{ color: '#333', fontSize: '2rem', fontFamily: 'Times New Roman' }}>Portfolio</h1>
  );
}


function BodyHTML() {
  const resumeUrl = 'https://drive.google.com/file/d/1UZ9oQGoTPQh5k0to9KEBL5IUwzBuElL_/view?usp=drive_link';
  const emailAddress = 'rajendrareang2k18@gmail.com';

  return (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <br/> <br/> <br/> <br/> 
      <p>
        <p style={{fontSize: '2rem'}}>Hi there,</p>
        <h1 style={{ fontSize: '3rem' }}>I'm <span style={{ color: 'aqua' }}>RAJENDRA REANG</span></h1>
        <h2 style={{fontSize: '2.5rem', fontFamily:''}}>A Full-Stack Web Developer.</h2>
      </p>
      
      <a href={resumeUrl} download="RajendraReangResume.pdf">
        <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px', margin: '1rem' ,width: '150px', height:'40px' }}>
          Download Resume
        </button>
      </a>
      <a href={`mailto:${emailAddress}`}>
      <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px', margin: '1rem' ,width: '150px', height:'40px' }}>Contact Me</button>
      </a>
    </div>
  );
}



function NavBar() {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', margin: '0' }}>
      <li style={{ margin: '0 1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
      <li style={{ margin: '0 1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
      <li style={{ margin: '0 1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Blog</a></li>
      <li style={{ margin: '0 1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Let's Talk</a></li>
    </ul>
  );
}

function SideBar() {
  return (
    <aside style={{
      marginTop: '20%',
      color: '#fff',
      width: '200px',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      padding: '1rem',
    }}>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li style={{ marginBottom: '10px' }}><a href="https://www.linkedin.com/in/rajendrareang/" style={{ textDecoration: 'none', color: '#fff', padding: '0.5rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Linked In</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://leetcode.com/rajendrareang/" style={{ textDecoration: 'none', color: '#fff', padding: '0.5rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>LeetCode</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://auth.geeksforgeeks.org/user/rajendrareang" style={{ textDecoration: 'none', color: '#fff', padding: '0.5rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>GeeksforGeeks</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://www.codechef.com/users/rdrcodechef" style={{ textDecoration: 'none', color: '#fff', padding: '0.5rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>CodeChef</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://github.com/rajendrareang" style={{ textDecoration: 'none', color: '#fff', padding: '0.5rem', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Github</a></li>
      </ul>
    </aside>
  );
}


export default function MyApp() {
  return (
    <div style={{
      width: '98vw',
      height: '96vh', // Set the height to 100vh for full-screen display
      backgroundImage: `url(${process.env.PUBLIC_URL}/back.jpg)`,
      backgroundSize: 'cover',
      fontFamily: 'Times New Roman',
      padding: 10, // Remove padding
    }}>
      <div style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '0rem 1rem',
        display: 'inline-flex',
      }}><Logo />
      </div>

      <div style={{
        listStyle: 'none',
        display: 'inline-flex',
        margin: '0rem 1rem',
        textDecoration: 'none',
        color: '#ffffff',
        padding: '.5rem 2rem',
        borderRadius: '5px',
      }}><NavBar />
      </div>

      <div>
        <BodyHTML />
      </div>

      <div>
        <SideBar />
      </div>
    </div>
  );
}
