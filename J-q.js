var receptTomb = [];

$(function () {
 $("article div").click(megjelenitRecept);
        $.ajax(
        {url: "receptek.json",
                success: function (result) {
                receptTomb = (result);
                        console.log(receptTomb);
                        kepgaleria();
                }
        });
        });
        
function megjelenitRecept(receptek) {
    $("article").empty();
   //az adott Json elem megjelenítése
    //Article h2-be a cim
    $("article").append("<h2></h2>");
    $("article h2").append(receptek.nev);
    //Article P-be a leírása
    $("article").append("<p></p>");
    $("article p").append(receptek.leiras);
    //Article Divbe a kép
//    $("article").append("<div></div>");

        var img = $('<img />').attr({
            'src': receptek.eleresiut,
            'alt': receptek.nev,
            'title': receptek.nev,
            'width': 200
        }).appendTo('article div');
        $("article").append("<div></div>");
          $("article div").append("<button>Módosít</button>");
        


    //article imagebe a képet

}


 function kepgaleria() {

//kisképek betöltése
                for (var i = 0; i < receptTomb.length; i++) {
        var elem = ' <div><img data-id="' + i + '" src="' + receptTomb[i].eleresiut + '" alt=""/>\n\
<h2>' + receptTomb[i].nev + '</h2><p>' + receptTomb[i].ár + '</p><input type="button" name="torol" id="torol" value="Törlés"></div>';
                $("article").append(elem);
        }
    }    
   