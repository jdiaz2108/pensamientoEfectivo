  
  $(document).ready(function() {
  var machine1 = $("#machine1").slotMachine({
    active: 0,
    delay: 600
  });

  // var machine2 = $("#machine2").slotMachine({
  //   active: 1,
  //   delay: 600,
  //   direction: "down"
  // });

  // var machine3 = $("#machine3").slotMachine({
  //   active: 2,
  //   delay: 700,
  // });

  var results;

  function onComplete(active) {
    switch (this.element[0].id) {
      case "machine1":
        $("#machine1Result").text(this.active);
        results[0] = getMachineResult($('#machine1'), this.active);
        // break;
//      case "machine2":
//        $("#machine2Result").text(this.active);
//        results[1] = getMachineResult($('#machine2'), this.active);
//        break;
//      case "machine3":
//        $("#machine3Result").text(this.active);
//        results[2] = getMachineResult($('#machine3'), this.active);
        break;
    }
    $("#results").text(results.join(" + "));
  }

  function getMachineResult(i_jqMachine, i_iActive){
      return i_jqMachine.find('span.option > img.case-item').eq(i_iActive + 1).attr('alt');
  }

  $("#randomizeButton").click(function() {
    results = [];
    $("#results").text("");
    machine1.shuffle(3, onComplete);
//      machine2.shuffle(5, onComplete);
//      machine3.shuffle(5, onComplete);
  });
});