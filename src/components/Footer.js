import { NavLink } from 'react-router-dom';
function Footer() {
  console.log('footer');
  return (
    <footer className="footer">
      <nav className="flex container center">
        <a href="/">Restart</a>
        <NavLink to="/">FeedBack</NavLink>
        <NavLink to="/">Contact</NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
