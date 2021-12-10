function navBar(){
    return `    <!-- header bar -->
    <div id="navContainer">
      <!-- created two div to have left bar and top bar -->
      <div id="rightSideMenu">
        <div id="menu">
          <hr/>
          <hr/>
          <hr/>
        </div>
        <div id="icon-box">
          <div>
            <span class="material-icons"> home </span>
            <p>Home</p>
          </div>
          <div>
            <span class="material-icons-outlined"> explore </span>
            <p>Explore</p>
          </div>
          <div>
            <span class="material-icons-outlined"> subscriptions </span>
            <p>Subscriptions</p>
          </div>
          <div>
            <span class="material-icons-outlined"> video_library </span>
            <p>Library</p>
          </div>
        </div>
      </div>
      <!-- left bar ends here -->
      <!-- right bar begins  here -->
      <!-- navigation bar -->
      <div id="navbar">
        <!-- logo of the header -->
        <div id="logo">
          <img id="logoimg"
            src="https://lh3.googleusercontent.com/NEfk60tG0hIl9Mnymkex5wNtbydbKZ8QJwU7zIpRDUNOT4sQQLcC4cFWoVeqGUDnluV7LQ=s170"
            alt=""
          />
        </div>

        <!-- searchBar -->
        <div id="searchBar">
          <!-- to add input result div we have to take another div -->
          <div>
            <input id="search" placeholder="Search" type="search" />
            <div id="search-icon-box">
              <span class="material-icons-outlined sz"> search </span>
            </div>
            <!-- mic div  -->
            <div id="mic-box">
              <span class="material-icons-outlined"> mic </span>
            </div>
          </div>
          <!-- will built input box here to show search result here (214 is not flex) -->
          <div id="inputBox"></div>

        </div>
        <!-- searchBar completed -->

        <!-- right logos div -->
        <div id="right-logos-div">
          <span class="material-icons-outlined"> videocam </span>
          <span class="material-icons-outlined"> apps </span>
          <span class="material-icons-outlined"> notifications </span>
          <div id="sign-in">
            <span class="material-icons-outlined">
                account_circle
                </span>
                <p>Sign IN</p>
          </div>
        </div>
      </div>
    </div>`
}

export default navBar;