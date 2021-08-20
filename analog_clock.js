setInterval(() => {
      let d = new Date();
      htime = d.getHours();
      mtime = d.getMinutes();
      stime = d.getSeconds();
      mmtime = d.getMilliseconds();
      hrotation = 30 * htime + mtime / 2 + (1 / 120) * stime;
      mrotation = 6 * mtime + (1 / 10) * stime;
      srotation = 6 * stime + (6 / 1000) * mmtime;
      // console.log(mmtime);

      // let hour = document.getElementsByClassName("hour");
      var hour = document.getElementById("hour");
      var min = document.getElementById("min");
      let sec = document.getElementById("sec");
      hour.style.transform = `rotateZ(${hrotation}deg)`;
      min.style.transform = `rotate(${mrotation}deg)`;
      sec.style.transform = `rotate(${srotation}deg)`;
}, 1);
setInterval(() => {
      let d = new Date();
      htime = d.getHours();
      mtime = d.getMinutes();
      stime = d.getSeconds();

      var dhour = document.getElementById("dhour");
      var dmin = document.getElementById("dmin");
      let dsec = document.getElementById("dsec");
      dhour.innerText = `${htime}`;
      dmin.innerText = `${mtime}`;
      dsec.innerText = `${stime}`;
}, 1);
setInterval(() => {
      var dot1 = document.getElementById("dots1");
      var dot2 = document.getElementById("dots2");
      dot1.classList.toggle("hide");
      dot2.classList.toggle("hide");
}, 400);
