import "../CSS/Header.css"
import logo from './logo.png';
function Header(){

return(
<header className="headerclass">
    <br /><br />
<img src={logo} className="logo"/>
    <h1>Tic <span className="white"> Tac </span> Toe</h1> 

</header>

);

}




export default Header;