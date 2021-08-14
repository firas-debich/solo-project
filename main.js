
var TabPrix=[75, 175, 350]
$('#select_change').change(function() {
    var $option = $("#select_change").find('option:selected');
    var value = $option.val()
    if(value === "Balcony"){
     	$('#prix001').val('150')
    }
    else if( value==="front stage" ){
     	$('#prix001').val("175")
    }else{
     	$('#prix001').val("75")
    }
    });

///total price 
$("#prix002").click(function(){
    var price=$("#prix001").val()
    var number_of_place=$("#number_Place").val()
    var total=0
    total=price*number_of_place
    $("#result").val(`${total}`)
/// for promotion
    if (number_of_place>"2"){
        var total_with_promotion=total-total*0.25
        var span=$(`<br><span>You have 25% promotion,you can juste pay ${total_with_promotion} DT </span>`)
        span.addClass("span")   
        $(".app").append(span)
    }   
})
// for the paying  
$("#for_paying").click(function(){

    $("#search div").hide()
    var temp1=$(`<div class="hah"><p id="pra" style="color: white;"> </p>
               
                <img src="images/pass.jpeg"  id="ticket_pay">
                <div class="container">
 <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"><p id="pra" style="color: black;">&#127871; Don't Forget To Bring Popcorn &#127871; </p></h4>
        </div>
        <div class="modal-body">
          <p style="text-align: center;"> This is Your code :<strong>#@21!85</strong> </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" id="btn_close">Close</button>
        </div>
      </div>
      
    </div>
  </div>
</div></div><script>
$(document).ready(function(){
  // Show the Modal on load
  $("#myModal").modal("show");
    
  // Hide the Modal
 
});
</script>`)
    $("#search").append(temp1)

})


  
$("#filter").click(function(){
    object_of_mouvie=[
    {mouvie_name:"prédestination",img:"images/predestination.jpeg",description:"Predestination is a 2014 Australian science fiction film written, co-produced and directed by Michael and Peter Spierig. It is an adaptation of the short story You Zombies by Robert A. Heinlein published in 1959."},
    {mouvie_name:"Interstellar",img:"images/inter.jpeg",description:"Interstellar, or Interstellar in Quebec and New Brunswick, is a British-American science fiction film produced, written and directed by Christopher Nolan, released in 2014. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine , Casey Affleck and Matt Damon."},
    {mouvie_name:"Inception",img:"images/Inception.jpeg",description:"The film explores different themes, but above all those of dream and reality, and the confusion between the two. Cobb's character is obsessed with an idea, similar to ideas that may characterize the victim of a creation"},
    {mouvie_name:"shutter island",img:"images/shutter.jpeg",description:"In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane. In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital."},
    {mouvie_name:"Gladiator",img:"images/Gladiator.jpeg",description:"A gladiator (Latin: gladiator, swordsman, from gladius, sword) was an armed combatant who entertained audiences in the Roman Republic and Roman Empire in violent confrontations with other gladiators, wild animals, and condemned criminals"},
    {mouvie_name:"The Shawshank Redemption",img:"images/shawshank.jpeg",description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit"}
                    ]
    var temp;
    var test=false
    var searchMovie=$("#mv_to_search").val()
    for(var i=0;i<object_of_mouvie.length;i++){
        if(searchMovie.toUpperCase()===object_of_mouvie[i].mouvie_name.toUpperCase()){
            $("#search div").hide()
            test=true
            var  temp=$(`
                <div>
                    <img  src=${object_of_mouvie[i].img} id="img_style">
                    <div id="prix_1"></div>
                    <div id="nested_div">
                    <h1 id="header00" style="color:white" >Ticket Reservation</h1>
                    <p style="color:white"><span id="descript">Description:${object_of_mouvie[i].description}</span> </p>
                    <fieldset>
                    <legend style="color:white"> Choice Of Seat </legend> 
                    <select name="listPlace" id="select_change"> 
                        <option value= "mezzanine" > Mezzanine</option>           
                        <option value= "Balcony">  Balcony </option> 
                        <option value= "front stage">   front stage </option> 
                    </select>
                    <label style="color:white"> At The Price Of : </label> 
                    <input type="number" id="prix001" value="75" readonly /><br><br>
                    <label style="color:white"> Number of places :  </label> 
                    <input type="number" name="nb" min="1" max="20" value="1" id="number_Place" />
                    <br>
                    <button id="prix002">Total</button>
                    <input type="number" id="result" value="" readonly ><br>
                    <div class="app"></div>
                    <button id="for_paying">pay</button>
                    </fieldset>
                    </div>
                </div>

                    `)
            $("#search").append(temp)
        }
       
    }
    //if the movie not availble
    if(test===false){
    alert("this film is not availble")
    }

})   


$("#btn_close").click(function(){
$(".hah").hide()

})
