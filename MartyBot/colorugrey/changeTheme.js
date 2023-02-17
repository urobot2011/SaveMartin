$("colourchange").html(`
      <div class="mb-3">
        <select id="boardthemeselect">
          <option value="default" selected>default board theme</option>
          <option value="classic">board theme:classic</option>
          <option value="chocolate">board theme:chocolate</option>
          <option value="bnw">board theme:black and white</option>
          <option value="green">board theme in colour:green</option>
          <option value="purple">board theme in colour:purple</option>
          <option value="blue">board theme in colour:blue</option>
          <option value="brown">board theme in colour:brown</option>
          <option value="orange">board theme in colour:orange</option>
          <option value="marble">board theme in texture:marble</option>
          <option value="goldsilver">board theme in texture:gold and silver</option>
          <option value="walnut">board theme in texture:walnut</option>
          <option value="wood">board theme in texture:wood</option>
          <option value="neowood">board theme in texture:neo-wood</option>
          <option value="ivory">board theme in texture:ivory and ebony wood</option>
        </select>
        <!--<button type="button" class="btn btn-primary" id="colourchangebtn">change board theme</button>-->
      </div>
`);
$(window).load(function(){
      $("#boardthemeselect").change(function(){
        var selectmenu = $("#boardthemeselect").val();
        var blcsquare1 = document.querySelectorAll(".black-3c85d");
        var whtsquare1 = document.querySelectorAll(".white-1e1d7");
        for (i = 0; i < whtsquare1.length; i++) {
          var whtsquare = whtsquare1[i];
          if (selectmenu == "default") {
            whtsquare.style.background = "#f0d9b5";
            whtsquare.style.color = "#b58863";
          }
          if (selectmenu == "classic") {
            whtsquare.style.background = "#e9e0ef";
            whtsquare.style.color = "#060510";
          }
          if (selectmenu == "chocolate") {
            whtsquare.style.background = "#f0d9b5";
            whtsquare.style.color = "chocolate";
          }
          if (selectmenu == "bnw") {
            whtsquare.style.background = "#f8f8f8";
            whtsquare.style.color = "#000";
          }
          if (selectmenu == "green") {
            whtsquare.style.background = "#f0d9f5";
            whtsquare.style.color = "indigo";
          }
          if (selectmenu == "purple") {
            whtsquare.style.background = "#f0d9f5";
            whtsquare.style.color = "purple";
          }
          if (selectmenu == "blue") {
            whtsquare.style.background = "#f0d9b5";
            whtsquare.style.color = "blue";
          }
          if (selectmenu == "brown") {
            whtsquare.style.background = "#f0d9ff";
            whtsquare.style.color = "brown";
          }
          if (selectmenu == "orange") {
            whtsquare.style.background = "#d0d9ff";
            whtsquare.style.color = "orange";
          }
          if (selectmenu == "marble") {
            whtsquare.style.background = "";
            whtsquare.style.backgroundImage = "url(https://chonggi-tokhu.github.io/aass/docs/chess/img/chessboardtheme/fromchesscom/marble_whitesq.png)";
          }
          if (selectmenu == "goldsilver") {
            whtsquare.style.background = "var(--silver)";
          }
          if (selectmenu == "ivory") {
            whtsquare.style.background = "";
            whtsquare.style.backgroundImage = "url(https://media.istockphoto.com/id/1412328901/photo/old-concrete-wall-texture-background-close-up-retro-plain-beige-color-cement-material-surface.jpg?b=1&s=170667a&w=0&k=20&c=_Yd94mVWR9O6JN1PKX41Zr9Fgm2cU3L0GtmKXXs2sFI=)";
          }
          if (selectmenu == "walnut") {
            whtsquare.style.background = "";
            whtsquare.style.backgroundImage ="url(https://chonggi-tokhu.github.io/aass/docs/chess/img/chessboardtheme/fromchesscom/walnut_whtsq.png)"
          }
        }
        for (i = 0; i < blcsquare1.length; i++) {
          var blcsquare = blcsquare1[i];
          if (selectmenu == "default") {
            blcsquare.style.background = "#b58863";
            blcsquare.style.color = "#f0d9b5";
          }
          if (selectmenu == "classic") {
            blcsquare.style.background = "radial-gradient(#888,#101527)";
            blcsquare.style.color = "#e9e0ef";
          }
          if (selectmenu == "chocolate") {
            blcsquare.style.background = "chocolate";
            blcsquare.style.color = "#f0d9b5";
          }
          if (selectmenu == "bnw") {
            blcsquare.style.background = "radial-gradient(#eee,#020202,#020202)";
            blcsquare.style.color = "#fff";
          }
          if (selectmenu == "green") {
            blcsquare.style.background = "green";
            blcsquare.style.color = "#f0d9f5";
          }
          if (selectmenu == "purple") {
            whtsquare.style.background = "#f0d9f5";
            whtsquare.style.color = "purple";
            blcsquare.style.background = "purple";
            blcsquare.style.color = "#f0d9f5";
          }
          if (selectmenu == "blue") {
            blcsquare.style.background = "blue";
            blcsquare.style.color = "#f0d9b5";
          }
          if (selectmenu == "brown") {
            blcsquare.style.background = "brown";
            blcsquare.style.color = "#f0d9ff";
          }
          if (selectmenu == "orange") {
            blcsquare.style.background = "orange";
            blcsquare.style.color = "#d0d9ff";
          }
          if (selectmenu == "marble") {
            blcsquare.style.background = "";
            blcsquare.style.backgroundImage = "url(https://chonggi-tokhu.github.io/aass/docs/chess/img/chessboardtheme/fromchesscom/marble_blacksq.png)"
          }
          if (selectmenu == "goldsilver") {
            blcsquare.style.background = "var(--gold)";
          }
          if (selectmenu == "ivory") {
            blcsquare.style.background = "";
            blcsquare.style.backgroundImage = "url(https://media.istockphoto.com/id/1355204884/photo/rustic-plywood-texture-background.jpg?b=1&s=170667a&w=0&k=20&c=YT3HKmr1sSpRwFhnJCUN-AlMFU5GmGQDIlwuHOqAbKc=)";
          }
          if (selectmenu == "walnut") {
            blcsquare.style.background = "";
            blcsquare.style.backgroundImage = "url(https://chonggi-tokhu.github.io/aass/docs/chess/img/chessboardtheme/fromchesscom/walnut_blsq.png)";
          }
        }
      });
});
