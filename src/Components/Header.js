import React from "react"
import './Header.css';
function Header() {
    return(
       
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">MovieDB</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Movies</a></li>
      <li><a href="#">TV Shows</a></li>
      <li><a href="#">More</a></li>
    </ul>
    <form class="navbar-form ">
      <div class="form-group">
        <input type="text" class="form-search" placeholder="Search" name="search" />
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</nav>
</div>
    )
}
export default Header;
